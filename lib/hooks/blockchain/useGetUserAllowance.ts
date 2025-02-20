import { Address, erc20Abi, maxUint256 } from "viem";
import { useReadContracts } from "wagmi";
import { Token } from "../../types";
import { fixedToFloat } from "../../utils";
import { ChainContainer } from "../../containers";

export const useGetUserTokenAllowance = (
  token: Token | undefined,
  poolAddress: Address | undefined
) => {
  const tokenAllowanceQuery = useGetUserTokenAddressAllowance(
    token?.address,
    poolAddress
  );
  return token?.isGasToken
    ? {
        isFetched: true,
        isLoading: false,
        allowanceBN: maxUint256,
        allowance: fixedToFloat(maxUint256),
        approved: true,
      }
    : tokenAllowanceQuery;
};

export const useGetUserTokenAddressAllowance = (
  tokenAddress: Address | undefined,
  poolAddress: Address | undefined
) => {
  const { address, chainId, supportedChain } = ChainContainer.useContainer();

  const enabled =
    !!address && !!poolAddress && !!tokenAddress && supportedChain;

  const { data, isFetched, isLoading } = useReadContracts({
    allowFailure: false,
    contracts: [
      {
        address: tokenAddress,
        abi: erc20Abi,
        functionName: "allowance",
        args: [address as Address, poolAddress as Address],
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

  const allowanceBN = data ? data[0] : BigInt(0);
  const decimals = data ? data[1] : 0;

  const allowance = fixedToFloat(allowanceBN, decimals);

  return {
    isFetched,
    isLoading,
    allowance,
    allowanceBN,
    approved: allowance > 0,
  };
};
