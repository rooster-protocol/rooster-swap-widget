import { useQuery } from "@tanstack/react-query";
import { ChainContainer } from "../../../containers";
import fetchWithError from "../../services/fetchWithError";
import { Token } from "../../../types";

export const useGasTokens = () => {
  const { chainId, supportedChain, roosterApiUrl } =
    ChainContainer.useContainer();

  const apiGasTokensQuery = useQuery({
    queryKey: ["getApiGasTokens", chainId],
    queryFn: () => fetchWithError(`${roosterApiUrl}/tokens/gas`),
    enabled: supportedChain,
  });

  const tokens: Token[] = apiGasTokensQuery.data?.tokens ?? [];

  return {
    tokens,
    isFetched: apiGasTokensQuery.isFetched,
    query: apiGasTokensQuery,
  };
};
