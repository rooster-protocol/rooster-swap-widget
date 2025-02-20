import React from "react";
import { Close as CloseIcon } from "@mui/icons-material";
import { Dialog, DialogProps, IconButton, styled } from "@mui/material";

export interface BaseModalProps extends Omit<DialogProps, "onClose"> {
  open: boolean;
  onClose: (arg0?: any) => void;
  // TODO: Change this to children prop
  render?: (CloseButton: JSX.Element) => React.ReactNode;
}

const StyledDialog = styled(Dialog)<BaseModalProps>(({ theme }) => {
  return {
    "& .MuiDialog-paper": {
      padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
    },
  };
});

export default function BaseModal({
  render = () => null,
  onClose,
  ...props
}: BaseModalProps) {
  const closeButton = CloseButton({ onClose });

  return (
    <StyledDialog {...props} onClose={() => onClose()}>
      {render(closeButton)}
    </StyledDialog>
  );
}

export const CloseButton = ({ onClose }: { onClose: () => void }) => {
  return (
    <IconButton
      aria-label="close"
      onClick={() => onClose()}
      sx={{
        color: (theme) => theme.palette.grey[500],
        margin: "-8px",
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}>
      <CloseIcon />
    </IconButton>
  );
};
