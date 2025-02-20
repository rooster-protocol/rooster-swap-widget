import React from "react";
import { South as SouthIcon } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { isNil, noop } from "lodash";
import { Token } from "../../types";

import SwapIconButton from "./SwapIconButton";
import TokenLabel from "../Token/TokenLabel";

import { displayNumber } from "../../utils/numberFormat";
import CommonCard from "../Common/CommonCard";

interface ConfirmSwapCardsProps {
  tokenB?: Token;
  tokenA: Token | undefined;
  tokenBAmount?: number;
  tokenAAmount: number;
  onInputSelect?: any;
  hideIcon?: boolean;
}

const ConfirmSwapCards = React.memo(function ConfirmSwapCards({
  tokenB,
  tokenA,
  tokenBAmount,
  tokenAAmount,
  onInputSelect,
  hideIcon,
}: ConfirmSwapCardsProps) {
  return (
    <Box>
      {isNil(tokenA) || isNil(tokenAAmount) || (
        <CommonCard
          styles={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <TokenLabel token={tokenA} />
          <Typography
            variant="h4"
            color="text.secondary"
            onClick={() => {
              onInputSelect && onInputSelect();
            }}>
            {tokenAAmount}
          </Typography>
        </CommonCard>
      )}
      {hideIcon ? (
        <Box padding="5px" />
      ) : (
        <Box display="flex" justifyContent="center">
          <SwapIconButton onClick={noop} disabled={true}>
            <SouthIcon sx={{ height: 20, width: 20 }} />
          </SwapIconButton>
        </Box>
      )}
      {isNil(tokenB) || isNil(tokenBAmount) || (
        <CommonCard
          styles={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <TokenLabel token={tokenB} />
          <Typography
            variant="h4"
            color="text.secondary"
            onClick={() => {
              onInputSelect && onInputSelect();
            }}>
            {displayNumber(tokenBAmount, "input")}
          </Typography>
        </CommonCard>
      )}
    </Box>
  );
});

export default ConfirmSwapCards;
