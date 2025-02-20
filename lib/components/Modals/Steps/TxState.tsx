/// <reference types="vite-plugin-svgr/client" />

import { Box, Typography } from "@mui/material";
import CheckmarkIcon from "../../../icons/checkmark.svg?react";
import { TxType } from "../../../types";
import Sine from "../../SineWaveTwo";
import { confirmMessages } from "../../../config/tx";

interface TxStateProps {
  txState: TxType;
}

export default function TxState({ txState }: TxStateProps) {
  if (
    !txState ||
    !(
      txState == "confirmed" ||
      txState == "signing" ||
      txState == "signed" ||
      txState == "submitted"
    )
  ) {
    return null;
  }
  return txState == "confirmed" ? (
    <>
      <CheckmarkIcon style={{ margin: "auto" }} />
      <Typography variant="h3" textAlign="center">
        Transaction Approved
      </Typography>
    </>
  ) : (
    <>
      <Box sx={{ width: "100%" }} display="flex" justifyContent="center">
        <Box sx={{ width: "100px", height: "55px" }}>
          <Sine />
        </Box>
      </Box>
      {txState && (
        <>
          <Typography variant="h3" textAlign="center">
            {confirmMessages[txState]?.title}
          </Typography>
          <Typography variant="body2" textAlign="center">
            {confirmMessages[txState]?.subtext}
          </Typography>
        </>
      )}
    </>
  );
}
