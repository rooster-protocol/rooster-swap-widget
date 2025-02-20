import { chains } from "../containers/ChainContainer";

export const getChain = (chainId: number) => {
  return chains.find((item) => item.id === chainId);
};
