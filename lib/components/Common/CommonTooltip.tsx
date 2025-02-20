import { Tooltip, TooltipProps } from "@mui/material";

function CommonTooltip(props: TooltipProps) {
  const { children } = props;

  return (
    <Tooltip
      placement="top"
      componentsProps={{
        tooltip: {
          sx: {
            maxWidth: "215px",
            color: "#fff",
            fontSize: "12px",
            width: "unset",
            padding: "8px",
            background:
              "linear-gradient(0deg, var(--Base-Surface, rgba(255, 255, 255, 0.06)) 0%, var(--Base-Surface, rgba(255, 255, 255, 0.06)) 100%), var(--Brand-950, #030519)",
          },
        },
      }}
      {...props}>
      {children}
    </Tooltip>
  );
}

export default CommonTooltip;
