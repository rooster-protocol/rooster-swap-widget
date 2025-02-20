import { useQuery } from "@tanstack/react-query";
import { PaginationReq } from "../../../types";
import fetchWithError from "../../services/fetchWithError";
import { ChainContainer } from "../../../containers";

export const usePools = ({
  chainId,
  pagination = {
    page: 1,
    perPage: 100,
    sortBy: "tvl",
    order: "desc",
    search: "",
  },
}: { chainId?: number; pagination?: PaginationReq } = {}) => {
  const { page, perPage, sortBy, order, search } = pagination;
  const { roosterApiUrl } = ChainContainer.useContainer();

  const apiPoolsQuery = useQuery<{
    pools: any[] | undefined;
    message: string;
    count?: number;
  }>({
    queryKey: chainId
      ? ["getApiPools", chainId, page, sortBy, order, search]
      : ["getApiPools", page, sortBy, order, search],
    queryFn: () =>
      fetchWithError(
        `${roosterApiUrl}/pools?page=${page}&per_page=${perPage}&sort_by=${sortBy}&order=${order}&search=${search}&include_token=true&include_ticks=true`
      ),
    staleTime: 60000,
    enabled: chainId != 0,
  });

  const pools = apiPoolsQuery.data?.pools ?? [];
  const count = apiPoolsQuery.data?.count ?? 0;

  const filteredPools = pools;

  return {
    pools: filteredPools,
    count: count,
    isFetched: apiPoolsQuery.isFetched || apiPoolsQuery.isSuccess,
    query: apiPoolsQuery,
  };
};

export const useSwapPools = (
  userToken1Address: string | undefined,
  userToken2Address: string | undefined
) => {
  const { chainId } = ChainContainer.useContainer();
  // To prevent unnecessary queries, only run the query in the correct order
  let tokenAAddress = userToken1Address;
  let tokenBAddress = userToken2Address;
  if (
    userToken1Address &&
    userToken2Address &&
    BigInt(userToken1Address) > BigInt(userToken2Address)
  ) {
    tokenAAddress = userToken2Address;
    tokenBAddress = userToken1Address;
  }

  const { pools, query } = usePools({ chainId });

  const filteredPools = pools.filter(
    (p) =>
      p.tokenA.address?.toLowerCase() == tokenAAddress?.toLowerCase() &&
      p.tokenB.address?.toLowerCase() == tokenBAddress?.toLowerCase()
  );

  return {
    pools: filteredPools.filter((p) => p.tokenA.address != p.tokenB.address),
    isFetched: query.isFetched,
  };
};
