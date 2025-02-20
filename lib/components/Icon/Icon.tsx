import { styled } from "@mui/material";

import checkActive from "../../icons/check-active.svg";
import checkNonActive from "../../icons/check-non-active.svg";
import checkCompleted from "../../icons/check-completed.svg";
import checkmark from "../../icons/checkmark.svg";
import tune from "../../icons/tune.svg";
import tuneLight from "../../icons/tune-light.svg";
import chevronDown from "../../icons/chevron-down.svg";
import chevronDownLight from "../../icons/chevron-down-light.svg";
import switchVertical from "../../icons/switch-vertical.svg";
import switchVerticalLight from "../../icons/switch-vertical-light.svg";
import wallet from "../../icons/wallet.svg";
import walletLight from "../../icons/wallet-light.svg";

const types: Record<string, string> = {
  checkActive: checkActive,
  checkNonActive: checkNonActive,
  checkCompleted: checkCompleted,
  checkmark: checkmark,
  tune: tune,
  chevronDown: chevronDown,
  switchVertical: switchVertical,
  wallet: wallet,
};

const typesLight: Record<string, string> = {
  ...types,
  tune: tuneLight,
  chevronDown: chevronDownLight,
  switchVertical: switchVerticalLight,
  wallet: walletLight,
};

interface IconProps {
  type: string;
  size?: number;
  width?: string;
}

const StyledImage = styled("img")<{ width?: string; height?: string }>(
  ({ ...props }) => `
    height: ${props.height}px;
    width: ${props.width}px;
  `
);

export function Icon({ type, size, width, ...props }: IconProps) {
  const darkMode = true;

  return (
    <StyledImage
      src={darkMode ? types[type] : typesLight[type]}
      width={width ? width : `${size}`}
      height={width ? undefined : `${size}`}
      {...props}
    />
  );
}
