import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  walletConnectWallet,
  trustWallet,
  coinbaseWallet,
  metaMaskWallet,
  okxWallet,
  ledgerWallet,
  safeWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { createConfig, http } from "wagmi";
import { plumeDevnet, plume } from "wagmi/chains";

export const chains = [plumeDevnet, plume] as const;
export type chainType = 98864 | 98865;
const projectId = "88aeb30155f000515421ec733e830fdf";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [
        metaMaskWallet,
        okxWallet,
        coinbaseWallet,
        trustWallet,
        safeWallet,
      ],
    },
    {
      groupName: "Others",
      wallets: [injectedWallet, walletConnectWallet, ledgerWallet],
    },
  ],
  {
    projectId,
    appName: "Rooster Protocol",
    appUrl: "https://www.rooster-protocol.xyz",
  }
);

export const wagmiConfig = createConfig({
  connectors,
  chains,
  transports: {
    [plumeDevnet.id]: http(`https://test-rpc.plumenetwork.xyz`),
    [plume.id]: http(`https://rpc.plumenetwork.xyz`),
  },
});
