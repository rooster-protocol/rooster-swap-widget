import { useQuery } from "@tanstack/react-query";
import { ChainContainer } from "../../../containers";
import { Pool } from "../../../types";
import fetchWithError from "../../services/fetchWithError";

export const usePool = (address: string | undefined) => {
  const { chainId, supportedChain, roosterApiUrl } =
    ChainContainer.useContainer();

  const apiPoolQuery = useQuery<{
    pool: Pool | undefined;
    message: string;
  }>({
    queryKey: ["getApiPool", chainId, address],
    queryFn: () => fetchWithError(`${roosterApiUrl}/pools/${address}`),
    enabled: !!address && supportedChain,
  });

  if (!apiPoolQuery.data?.pool) {
    return { isFetched: false, query: apiPoolQuery };
  }

  const pool = apiPoolQuery.data.pool;

  return {
    pool: pool,
    isFetched: apiPoolQuery.isFetched,
    query: apiPoolQuery,
  };
};
