/// <reference types="vite-plugin-svgr/client" />
import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import MaverickAMM from "../../icons/maverick_amm.svg?react";
import MaverickAMMLight from "../../icons/maverick_amm_light.svg?react";

export default function PoweredByMaverick(props: BoxProps) {
  const darkMode = true;

  return (
    <Box display="flex" alignItems="center" {...props}>
      <Typography mr={1} variant="body2">
        Incubated by
      </Typography>
      {darkMode ? <MaverickAMM /> : <MaverickAMMLight />}
    </Box>
  );
}
