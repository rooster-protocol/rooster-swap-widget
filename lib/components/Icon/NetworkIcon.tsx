import { Box, styled } from "@mui/material";
import { Icon } from "../Icon/Icon";
import { getChain } from "../../utils/getChain";

interface NetworkIconProps {
  className?: string;
  size?: number;
  chainId: number;
}

const StyledNetwork = styled(Box)(
  () => `
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: max-content;
  `
);

const StyledImage = styled("img")<{ size?: number | string }>(
  ({ theme, ...props }) => `
    height: ${props.size}px;
    width: ${props.size}px;
    border-radius: 50%;
    outline: 1px solid ${theme.palette.grey[800]};
  `
);

const StyledChainIcon = styled(Icon)(
  () => `
    position: absolute;
    bottom: 0;
    right: 0;
  `
);

export function NetworkIcon({ size = 20, chainId, ...rest }: NetworkIconProps) {
  let url: string;

  const chain = getChain(chainId);

  // Name may be multiple words
  const name = chain?.name.split(" ")[0]?.toLowerCase() || "";

  if (
    new RegExp(name).test("development") ||
    name == "ethereum" ||
    name == "goerli" ||
    name == "sepolia"
  ) {
    url =
      "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880";
  } else if (new RegExp(name).test("bnb")) {
    url =
      "https://assets.coingecko.com/asset_platforms/images/1/small/bnb_smart_chain.png?1694050220";
  } else if (new RegExp(name).test("base")) {
    url =
      "https://github.com/base-org/brand-kit/blob/main/logo/in-product/Base_Network_Logo.svg?raw=true";
  } else if (new RegExp(name).test("plume")) {
    url = "https://avatars.githubusercontent.com/u/148658248?s=200&v=4";
  } else if (new RegExp(name).test("zksync")) {
    url =
      "https://assets.coingecko.com/asset_platforms/images/121/small/zksync.jpeg?1679897283";
  } else {
    url = `https://github.com/trustwallet/assets/blob/master/blockchains/${name}/info/logo.png?raw=true`;
  }

  return (
    <StyledNetwork>
      <StyledImage src={url} size={size} {...rest} />
      {chain?.testnet && <StyledChainIcon size={size / 2.5} type="testNet" />}
    </StyledNetwork>
  );
}
