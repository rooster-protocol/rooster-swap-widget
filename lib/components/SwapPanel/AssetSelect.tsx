import { Circle as CircleIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControlProps,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { Token } from "../../types";
import { TokenIcon } from "../Icon/TokenIcon";
import { AssetSelectionModal } from "../Modals/AssetSelectionModal";
import useModal from "../../hooks/useModal";
import { Icon } from "../Icon/Icon";

interface AssetSelectProps extends Omit<FormControlProps, "onChange"> {
  value?: Token;
  tokens?: Token[];
  loading: boolean;
  styles?: SxProps<Theme>;
  onChange: (asset: Token) => void;
  ve?: boolean;
  text?: string;
}

export const AssetSelect = ({
  value,
  tokens = [],
  loading,
  styles,
  onChange,
  ve,
  text = "Add Token",
}: AssetSelectProps) => {
  const { isOpen, openModal, closeModal } = useModal();
  function handleModalClose(asset?: Token) {
    if (asset) {
      onChange(asset);
    }

    closeModal();
  }

  return (
    <>
      <Button
        id="demo-simple-select-filled"
        variant="text"
        onClick={openModal}
        sx={{
          height: "100%",
          minHeight: "1rem",
          p: 0.5,
          minWidth: "5rem",
          color: "white",
          "&:hover": { bgcolor: "neutral.main" },
          ...styles,
        }}>
        <Typography variant="h6" lineHeight="1rem" borderRadius="10px">
          <Box display="flex" alignItems={"center"}>
            {!value ? (
              <CircleIcon htmlColor="#1C1D2E" />
            ) : (
              <TokenIcon token={value} size={24} />
            )}

            <Typography variant="body1" ml="5px">
              {!value ? text : `${ve ? "ve" : ""}${value.symbol}`}
            </Typography>

            {ve && (
              <Box ml="7px" display="flex">
                <Icon type="veToken" size={18} />
              </Box>
            )}
            <Box ml={0.4}>
              <Icon type="chevronDown" size={20} />
            </Box>
          </Box>
        </Typography>
      </Button>
      <AssetSelectionModal
        open={isOpen}
        loading={loading}
        tokens={tokens}
        onClose={handleModalClose}
      />
    </>
  );
};
