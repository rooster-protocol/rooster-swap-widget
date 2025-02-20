import { Box, BoxProps, styled, Tooltip, TooltipProps } from "@mui/material";
import { tooltipClasses } from "@mui/material/Tooltip";
import { numberPresets, preset, displayNumber } from "../../utils/numberFormat";

export interface NumberProps extends Omit<BoxProps, "style"> {
  value: number;
  fontSize?: "large" | "medium" | string;
  classes?: any;
  format?: Intl.NumberFormatOptions;
  locale?: string;
  type?: "limit" | "default" | "exact";
  preset?: preset;
  showToolTip?: boolean;
}

interface MoneyBoxProps extends BoxProps {
  fontSize?: NumberProps["fontSize"];
}

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    textAlign: "center",
    paddingLeft: "7px",
    color: "white",
    fontSize: "12px",
    boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.5)",
    borderRadius: "5px",
    whiteSpace: "nowrap",
  },
}));

const StyledBox = styled(Box)<MoneyBoxProps>(({ ...props }) => {
  return {
    "& .currency, .dollars, .compact, .cents": {
      fontSize: props.fontSize || "inherit",
      fontVariant: "slashed-zero",
    },
    "& .compact": {
      textTransform: "lowercase",
    },
  };
});

export default function Number({
  value,
  format = { currency: "USD", style: "currency" },
  locale = "en-US",
  type = "default",
  preset,
  showToolTip = true,
  ...rest
}: NumberProps): JSX.Element {
  let elementsToRender = [];

  if (preset) {
    format = { currency: format.currency, ...numberPresets(value, preset) };
  }

  const currencyParts = new Intl.NumberFormat(locale, {
    ...format,
  }).formatToParts(value);

  // See: http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
  elementsToRender = currencyParts.map((part, i) => {
    switch (part.type) {
      case "currency":
        return (
          Boolean(format.currency) && (
            <span key={i} className="part currency">
              {part.value}
            </span>
          )
        );

      case "group":
      case "integer":
        return (
          <span key={i} className="part dollars">
            {part.value}
          </span>
        );

      case "decimal":
      case "fraction":
        return (
          <span key={i} className="part cents">
            {preset ? part.value : part.value.slice(0, 3)}
          </span>
        );
      case "compact":
        return (
          <span key={i} className="part compact">
            {part.value}
          </span>
        );
      default:
        return (
          <span key={i} className={`part ${part.type}`}>
            {part.value}
          </span>
        );
    }
  });
  if (isNaN(value)) {
    elementsToRender = ["-"];
  } else if (preset == "input" && value == 0) {
    elementsToRender = ["0"];
  } else if (type == "limit" && value < 0.001 && value != 0) {
    if (preset == "currency" || (!preset && format.currency)) {
      elementsToRender = ["<$0.001"];
    } else if (preset == "percent" || (!preset && format.style == "percent")) {
      elementsToRender = ["<0.1%"];
    } else {
      elementsToRender = ["<0.001"];
    }
  } else if (type == "exact" && preset == "percent") {
    elementsToRender = [`${(value * 100).toFixed(2)}%`];
  }

  const toolTipLabel =
    format.style == "percent" || preset == "percent"
      ? displayNumber(value, "fullPercent")
      : (!preset && format.currency) || preset == "currency"
      ? "$" + displayNumber(value, "full")
      : displayNumber(value, "full");

  return (
    <LightTooltip title={toolTipLabel} disableHoverListener={!showToolTip}>
      <StyledBox component="span" display="flex" alignItems="start" {...rest}>
        <>{elementsToRender}</>
      </StyledBox>
    </LightTooltip>
  );
}
