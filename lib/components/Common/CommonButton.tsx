import {
  Button as ButtonMui,
  ButtonProps,
  SxProps,
  Theme,
  styled,
  useTheme,
} from "@mui/material";

interface TProps extends ButtonProps {
  text?: string;
  buttonType: "secondary" | "outlined" | "neutral" | "tertiary" | "text";
  styles?: SxProps<Theme>;
}

const StyledButton = styled(ButtonMui)(
  () => `
  height: 36px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  border-radius: 8px;
  padding: 8px 12px;
  box-shadow: 0px 1px 2px 0px rgba(14, 24, 41, 0.05);

  &:hover {
    box-shadow: 0px 1px 2px 0px rgba(14, 24, 41, 0.05);
  }
`
);

const CommonButton = ({
  text,
  buttonType,
  styles,
  children,
  size = "large",
  fullWidth = true,
  ...props
}: TProps) => {
  const theme = useTheme();

  switch (buttonType) {
    case "secondary":
      return (
        <StyledButton
          sx={{
            background: theme.button.secondary,
            "&:hover": {
              background: theme.button.secondary,
            },
            color: "#FFF",
            ...styles,
          }}
          variant="contained"
          size={size}
          fullWidth={fullWidth}
          {...props}>
          {text}
          {children}
        </StyledButton>
      );
    case "outlined":
      return (
        <StyledButton
          sx={{
            border: `1px solid ${theme.borders.primary}`,
            background: theme.button.outlined,
            color: theme.palette.text.secondary,
            "&:hover": {
              border: `1px solid ${theme.borders.primary}`,
              background: theme.button.outlined,
            },
            ...styles,
          }}
          variant="outlined"
          color="neutral"
          size={size}
          fullWidth={fullWidth}
          {...props}>
          {text}
          {children}
        </StyledButton>
      );
    case "tertiary":
      return (
        <StyledButton
          sx={{
            border: "1px solid #00DAB5",
            "&:hover": {
              border: "1px solid #00DAB5",
              background: "unset",
            },
            ...styles,
          }}
          variant="outlined"
          color="neutral"
          size={size}
          fullWidth={fullWidth}
          {...props}>
          {text}
          {children}
        </StyledButton>
      );
    case "neutral":
      return (
        <StyledButton
          sx={{
            border: `1px solid ${theme.borders.teal}`,
            background: theme.button.outlined,
            color: theme.palette.text.teal,
            ...styles,
          }}
          variant="contained"
          color="neutral"
          size={size}
          fullWidth={fullWidth}
          {...props}>
          {text}
          {children}
        </StyledButton>
      );
    case "text":
      return (
        <StyledButton
          sx={{
            color: theme.palette.text.tertiary,
            width: "max-content",
            minWidth: "unset",
            ...styles,
          }}
          variant="text"
          size={size}
          fullWidth={fullWidth}
          {...props}>
          {text}
          {children}
        </StyledButton>
      );
  }
};

export default CommonButton;
