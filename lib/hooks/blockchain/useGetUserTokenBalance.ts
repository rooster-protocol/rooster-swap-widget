import { Address, erc20Abi } from "viem";
import { useBalance, useReadContracts } from "wagmi";
import { Token } from "../../types";
import { ChainContainer } from "../../containers";
import { fixedToFloat } from "../../utils";

export const useGetUserTokenBalance = (token: Token | undefined) => {
  const { address } = ChainContainer.useContainer();

  const gasBalanceQuery = useBalance({ address });
  const tokenBalance = useGetUserTokenAddressBalance(token?.address);

  return token?.isGasToken
    ? {
        isFetched: gasBalanceQuery.isFetched,
        isLoading: gasBalanceQuery.isLoading,
        balance: fixedToFloat(
          gasBalanceQuery.data?.value ?? BigInt(0),
          gasBalanceQuery.data?.decimals
        ),
        balanceBN: gasBalanceQuery.data?.value ?? BigInt(0),
      }
    : tokenBalance;
};

export const useGetUserTokenAddressBalance = (
  tokenAddress: Address | undefined
) => {
  const { address } = ChainContainer.useContainer();

  return useGetTokenAddressBalance(tokenAddress, address);
};

export const useGetTokenAddressBalance = (
  tokenAddress: Address | undefined,
  walletAddress: Address | undefined
) => {
  const { chainId, supportedChain } = ChainContainer.useContainer();

  const enabled = !!walletAddress && !!tokenAddress && supportedChain;
  const { data, isFetched, isLoading } = useReadContracts({
    allowFailure: false,
    contracts: [
      {
        address: tokenAddress,
        abi: erc20Abi,
        functionName: "balanceOf",
        args: [walletAddress as Address],
        chainId,
      },
      {
        address: tokenAddress,
        abi: erc20Abi,
        functionName: "decimals",
        args: [],
        chainId,
      },
    ],
    query: { enabled },
  });

  const balanceBN = data ? data[0] : BigInt(0);
  const decimals = data ? data[1] : 0;

  const balance = fixedToFloat(balanceBN, decimals);

  return {
    isFetched,
    isLoading,
    balance,
    balanceBN,
  };
};
