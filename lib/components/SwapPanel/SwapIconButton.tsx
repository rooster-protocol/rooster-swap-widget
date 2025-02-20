import { IconButton, styled } from "@mui/material";

const SwapIconButton = styled(IconButton)(({ theme }) => {
  return `
      margin-top: -${theme.spacing(1.625)};
      margin-bottom: -${theme.spacing(1.625)};
      border: 1px solid rgba(255, 255, 255, 0.16);
      padding: 6px;

      &.MuiIconButton-root {
        background: ${theme.palette.background.default};
      }

      &.MuiIconButton-root:hover {
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.1)
          ),
          linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
          #101123;
      }
    `;
});

export default SwapIconButton;
