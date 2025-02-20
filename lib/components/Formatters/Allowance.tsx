import { Typography, Box } from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";
import Number from "./Number";
import CommonTooltip from "../Common/CommonTooltip";

interface AllowanceProps {
  allowance: number;
  amount: number;
  symbol: string | undefined;
}

export default function Allowance({
  allowance,
  amount,
  symbol,
}: AllowanceProps) {
  return (
    <Box display="grid" gap="15px">
      <Box display="flex" justifyContent="space-between">
        <Typography variant="body2" color="warning.main">
          Current Allowance
        </Typography>
        <Typography variant="body2" color="warning.main">
          <Number
            value={allowance}
            preset="number"
            display="inline"
            showToolTip={false}
          />{" "}
          {symbol}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="body2" color="error.main">
          Minimum Allowance{" "}
          <CommonTooltip title="Minimum allowance is the amount you must approve in your wallet in order for this transaction to be successful. Set your allowance to a large value to avoid having to reapprove in future transactions.">
            <InfoOutlined
              sx={{ marginLeft: "3px", transform: "translateY(2px)" }}
              fontSize="inherit"
            />
          </CommonTooltip>
        </Typography>
        <Typography variant="body2" color="error.main">
          <Number
            value={amount * 1.01}
            preset="number"
            display="inline"
            showToolTip={false}
          />{" "}
          {symbol}
        </Typography>
      </Box>
    </Box>
  );
}
