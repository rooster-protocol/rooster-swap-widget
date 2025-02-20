import { Box, Typography, styled } from "@mui/material";
import React from "react";

const StyledBox = styled(Box)(
  () => `
  padding: 0 25px 22px;
    display: flex;
    align-items: center;
    flex-direction: column;
`
);

const StyledText = styled(Typography)(
  () => `
  padding: 15px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
`
);

interface TProps {
  icon: React.ReactNode;
  text: string;
}

function SwapVerify(props: TProps) {
  const { icon, text } = props;

  return (
    <StyledBox>
      <Box>{icon}</Box>
      <StyledText>{text}</StyledText>
    </StyledBox>
  );
}

export default SwapVerify;
