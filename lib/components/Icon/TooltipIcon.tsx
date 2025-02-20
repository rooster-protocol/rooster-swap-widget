import { IconButton } from "@mui/material";
import { InfoOutlined as InfoOutlinedIcon } from "@mui/icons-material";
import CommonTooltip from "../Common/CommonTooltip";

interface TooltipIconProps {
  title: string;
  size?: number;
}

export function TooltipIcon({ title, size = 20 }: TooltipIconProps) {
  return (
    <CommonTooltip title={title} placement={"right"}>
      <IconButton sx={{ padding: "1px" }}>
        <InfoOutlinedIcon
          fontSize="small"
          style={{
            color: "rgba(255,255,255,0.5)",
            width: size,
            height: size,
          }}
        />
      </IconButton>
    </CommonTooltip>
  );
}
