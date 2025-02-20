import { Box, Typography } from "@mui/material";
import AssetAutocomplete, {
  AssetAutocompleteProps,
} from "../AssetAutocomplete";
import { Token } from "../../types";
import BaseModal, { BaseModalProps } from "./BaseModal";

interface AssetSelectionModalProps extends BaseModalProps {
  onClose: (asset?: Token) => void;
  tokens: Token[];
  loading: boolean;
}

export const AssetSelectionModal = ({
  onClose,
  open,
  tokens,
  loading,
}: AssetSelectionModalProps) => {
  const handleChange: AssetAutocompleteProps["onChange"] = (
    _,
    value,
    reason
  ) => {
    if (reason === "selectOption") {
      onClose(value as unknown as Token);
    }
  };

  return (
    <BaseModal
      PaperProps={{
        elevation: 1,
      }}
      onClose={onClose}
      open={open}
      fullWidth
      maxWidth={"xs"}
      render={(CloseButton) => (
        <Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h4">Tokens</Typography>
            {CloseButton}
          </Box>
          <Typography variant="body2" mt={0.5} mb={3}>
            Search and select a token.
          </Typography>
          <AssetAutocomplete
            tokens={tokens}
            loading={loading}
            onChange={handleChange}
          />
        </Box>
      )}
    />
  );
};
