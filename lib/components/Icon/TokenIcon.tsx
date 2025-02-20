import { SxProps, Theme, styled } from "@mui/material";
import { Box } from "@mui/material";
import Avatar from "boring-avatars";
import { stringToColor } from "../../utils";
import { Token } from "../../types";
import { NetworkIcon } from "../Icon/NetworkIcon";

interface TokenIconProps {
  token: Token;
  className?: string;
  size?: number;
  sx?: SxProps<Theme>;
  hideChain?: boolean;
}

const StyledTokenIcon = styled(Box)<{ size?: number | string }>(
  ({ ...props }) => `
    height: ${props.size}px;
    width: ${props.size}px;
    position: relative;
  `
);

const StyledImage = styled("img")<{ size?: number | string }>(
  ({ ...props }) => `
    height: ${props.size}px;
    width: ${props.size}px;
    border-radius: 50%;
  `
);

const StyledNetworkIcon = styled(Box)(
  () => `
    position: absolute;
    bottom: 0;
    right: 0;
  `
);

export const TokenIcon = ({
  token,
  sx,
  size = 25,
  hideChain,
  ...rest
}: TokenIconProps) => {
  let iconType;

  if (size >= 50) {
    iconType = "large";
  } else if (size > 25) {
    iconType = "small";
  } else {
    iconType = "thumb";
  }

  const tokenIconUrl = token?.logoURI
    ? token.logoURI.replace("thumb", iconType)
    : "";

  if (tokenIconUrl.length > 0) {
    return !hideChain ? (
      <StyledTokenIcon size={size}>
        <StyledImage
          src={tokenIconUrl}
          sx={sx}
          size={size}
          {...rest}
          alt={token?.symbol}
        />
        <StyledNetworkIcon>
          <NetworkIcon chainId={token.chainId} size={size / 2.5} />
        </StyledNetworkIcon>
      </StyledTokenIcon>
    ) : (
      <StyledImage
        src={tokenIconUrl}
        sx={sx}
        size={size}
        {...rest}
        alt={token?.symbol}
      />
    );
  } else {
    return (
      <Box
        className={rest.className}
        display="inline-flex"
        alignContent="center"
        alignItems="center"
        height="fit-content"
        sx={sx}>
        <Avatar
          name={token.symbol ?? ""}
          size={size}
          variant="ring"
          colors={[
            "#FFFFFF",
            stringToColor(token.symbol ?? ""),
            "#000000",
            stringToColor(token.symbol ?? ""),
            stringToColor(token.symbol ?? ""),
          ]}
        />
      </Box>
    );
  }
};
