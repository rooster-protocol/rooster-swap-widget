import { createContainer } from "unstated-next";
import { useAccount, useConfig } from "wagmi";
import { plumeDevnet, plume } from "wagmi/chains";

export const chains = [plume, plumeDevnet] as const;

const ChainState = () => {
  const { address } = useAccount();

  const config = useConfig();

  const chainId = config.state.chainId;

  const roosterApiUrl =
    chainId == plumeDevnet.id
      ? "https://rooster-api-one.vercel.app/api"
      : "https://api.rooster-protocol.xyz/api";
  const mavApiUrl = "https://v2-api.mav.xyz/api/v5";

  const supportedChainIds: number[] = chains.map((c) => c.id);

  return {
    address,
    roosterApiUrl,
    mavApiUrl,
    chainId,
    supportedChain: supportedChainIds.includes(chainId),
    chains: chains
      .filter((chain) => supportedChainIds.includes(chain.id))
      .map((c) => {
        if (c.id == 98864) {
          return { ...c, name: "Plume Testnet" };
        } else if (c.id == 98865) {
          return { ...c, name: "Plume" };
        } else {
          return c;
        }
      }),
  };
};

export const ChainContainer = createContainer(ChainState);
