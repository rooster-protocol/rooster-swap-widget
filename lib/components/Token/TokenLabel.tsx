import { Box, Typography } from "@mui/material";

import { Token } from "../../types";
import { TokenIcon } from "../Icon/TokenIcon";

interface TokenLabelProps {
  token: Token;
  size?: number;
  ve?: boolean;
  asterisk?: boolean;
}

export default function TokenLabel({
  token,
  size = 24,
  ve,
  asterisk,
}: TokenLabelProps) {
  return (
    <Box display="flex" alignItems={"center"}>
      <TokenIcon token={token} size={size} />

      <Typography variant="body1" fontWeight={600} ml="7px">
        {ve ? `ve${token.symbol}` : token.symbol}
        {asterisk ? "*" : ""}
      </Typography>
    </Box>
  );
}
