import { TextField, TextFieldProps, styled } from "@mui/material";
import { useRef } from "react";

const StyledInput = styled(TextField)(
  ({ theme }) => `
    & .MuiInputLabel-root {
      font-size: ${theme.typography.body2.fontSize};
      color: ${theme.palette.text.primary};
      margin-bottom: 8px;
      position: inherit;
      transform: none;
    }
  `
);

const CommonInput = (props: TextFieldProps) => {
  const { ...rest } = props;

  const inputRef = useRef(null);

  return (
    <StyledInput
      inputRef={inputRef}
      variant="outlined"
      size="small"
      fullWidth
      {...rest}
    />
  );
};

export default CommonInput;
