import { useQuery } from "@tanstack/react-query";
import { ChainContainer } from "../../../containers";
import fetchWithError from "../../services/fetchWithError";
import { Token } from "../../../types";
import { Address } from "viem";
import { maverickV2QuoterAbi } from "../../../contracts/generated";
import { encodePath, fixedToFloat, floatToFixed } from "../../../utils";
import { useContractAddress } from "./useContracts";
import { CONTRACTS_TYPE } from "../../../contracts/types";
import { useReadContracts } from "wagmi";

export const useFindSwapPaths = (
  inputToken: Token | undefined,
  outputToken: Token | undefined,
  amountIn: number
) => {
  const { chainId, supportedChain, roosterApiUrl } =
    ChainContainer.useContainer();

  const apiQuery = useQuery<{ paths: (Address | boolean)[][]; status: number }>(
    {
      queryKey: [
        "getSwapPath",
        chainId,
        inputToken?.address,
        outputToken?.address,
        amountIn,
      ],
      queryFn: () =>
        fetchWithError(`${roosterApiUrl}/swap`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputTokenAddress: inputToken?.address,
            outputTokenAddress: outputToken?.address,
            amount: amountIn,
          }),
        }),
      enabled: supportedChain && !!inputToken && !!outputToken && amountIn > 0,
      staleTime: 120 * 1000,
    }
  );

  const paths = apiQuery.data?.paths ?? [];

  const quoter = useContractAddress(chainId, CONTRACTS_TYPE.QUOTER);

  // Prepare contracts array for all paths
  const swapCalls =
    paths.map((path) => ({
      address: quoter as Address,
      abi: maverickV2QuoterAbi,
      functionName: "calculateMultiHopSwap",
      chainId: chainId,
      args: [
        encodePath(path),
        floatToFixed(amountIn || 0, inputToken?.decimals),
        false,
      ] as const,
    })) || [];

  const swapDataQuery = useReadContracts({
    contracts: swapCalls,
    allowFailure: true,
    query: {
      enabled: Boolean(
        chainId && supportedChain && amountIn > 0 && paths.length > 0 && quoter
      ),
      retry: false,
      staleTime: 120 * 1000,
    },
  });

  const { data: swapData, isSuccess: swapDataFetched } = swapDataQuery;

  const successfulSwaps =
    swapData
      ?.filter((swap) => swap.status === "success")
      ?.map((swap) => ({
        outputAmount: fixedToFloat(swap.result[0], outputToken?.decimals),
        outputAmountBN: swap.result[0],
        gas: swap.result[1],
      })) || [];

  const bestSwap =
    successfulSwaps.length > 0
      ? successfulSwaps.reduce((best, current) => {
          if (!best || current.outputAmountBN > best.outputAmountBN)
            return current;
          return best;
        })
      : undefined;

  const bestPathIndex = bestSwap ? successfulSwaps.indexOf(bestSwap) : -1;

  const routerAddress = useContractAddress(chainId, CONTRACTS_TYPE.ROUTER);

  return {
    paths,
    outputAmount: bestSwap ? Number(bestSwap.outputAmount) : 0,
    gas: bestSwap ? Number(bestSwap.gas) : 0,
    path: bestPathIndex >= 0 ? paths[bestPathIndex] : [],
    routerAddress,
    swapData,
    isFetched: apiQuery.isFetched && swapDataFetched,
    loading:
      !(apiQuery.fetchStatus == "idle" || apiQuery.status == "success") ||
      !(
        swapDataQuery.fetchStatus == "idle" || swapDataQuery.status == "success"
      ),
    query: apiQuery,
  };
};
