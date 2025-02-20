/// <reference types="vite-plugin-svgr/client" />

import React from "react";
import {
  Box,
  Chip,
  SxProps,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import { isNil, noop } from "lodash";
import { Token } from "../../types";
import Number from "../Formatters/Number";

import { AssetSelect } from "../SwapPanel/AssetSelect";

import TokenLabel from "../Token/TokenLabel";

import { makeStringNumeric } from "../../utils";
import CommonCard from "../Common/CommonCard";
import { Icon } from "../Icon/Icon";
import { useTokenPrice } from "../../hooks/useTokenPrice";

interface AssetInputCardProps {
  token: Token | undefined;
  tokens?: Token[];
  loading: boolean;
  amount?: string;
  balance?: number;
  onAssetChange?: (asset: Token) => void;
  onAmountChange?: (value: string) => void;
  isMax?: boolean;
  isInput?: boolean;
  per?: Token;
  setMax?: React.Dispatch<React.SetStateAction<boolean>>;
  ve?: boolean;
  stylesCard?: SxProps<Theme>;
  showPrice?: boolean;
}

export default function AssetInputCard({
  token,
  tokens = [],
  loading,
  amount,
  balance,
  onAssetChange = noop,
  onAmountChange = noop,
  isMax = true,
  isInput = true,
  per,
  setMax,
  ve,
  stylesCard,
  showPrice,
}: AssetInputCardProps) {
  const onMaxClick = () => {
    if (balance) {
      onAmountChange(balance.toString());
      if (setMax) {
        setMax(true);
      }
    }
  };

  const { price } = useTokenPrice(token);

  const parsedAmount = amount ? parseFloat(amount) : 0;

  const value =
    price && amount && parsedAmount > 0 ? price * parsedAmount : undefined;

  return (
    <Box>
      <CommonCard
        styles={{
          padding: 0.5,
          ...stylesCard,
        }}>
        <Box
          sx={{ whiteSpace: "nowrap" }}
          display="flex"
          alignItems={"center"}
          justifyContent={"space-between"}>
          <Box>
            {isInput ? (
              <AssetSelect
                value={token}
                tokens={tokens}
                loading={loading}
                onChange={onAssetChange}
                ve={ve}
              />
            ) : (
              <Box sx={{ mt: "5px" }}>
                {token && <TokenLabel token={token} />}
              </Box>
            )}
          </Box>
          <Box>
            <TextField
              variant="standard"
              placeholder="0"
              value={amount}
              size="small"
              InputProps={{ disableUnderline: true }}
              inputProps={{
                inputMode: "decimal",
                min: 0,
                max: balance,
                pattern: "^[0-9]*[.]?[0-9]*$",
              }}
              sx={{
                paddingLeft: "10px",
                background: "transparent",
                border: "none",
                input: {
                  fontSize: "1rem",
                  padding: "0 8px 0 0",
                  textAlign: "right",
                  "&::placeholder": { opacity: 0.5 },
                },
              }}
              onChange={(
                e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => {
                onAmountChange(makeStringNumeric(e.target.value));
                if (setMax) {
                  setMax(false);
                }
              }}
            />
          </Box>
        </Box>
      </CommonCard>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={0.75}>
        <Box display="flex" alignItems="center">
          {token && !isNil(balance) && (
            <Box display="flex" alignItems="center">
              <Icon type="wallet" size={20} />
              <Typography mr={0.75} ml={0.75} variant="body2">
                {balance ? (
                  <Number value={balance} preset="number" type="limit" />
                ) : (
                  "-"
                )}
              </Typography>
              {isMax && (
                <Chip
                  onClick={onMaxClick}
                  label={<Typography variant="overline">MAX</Typography>}
                />
              )}
            </Box>
          )}
          {!isNil(per) && (
            <Box display="flex" alignItems="center" mt="9px">
              <Typography ml={0.625} variant="body2">
                per 1 {per.symbol}
              </Typography>
            </Box>
          )}
        </Box>
        {showPrice && value && (
          <Typography variant="body2" minHeight="16px">
            <Number value={value} preset="currency" />
          </Typography>
        )}
      </Box>
    </Box>
  );
}
