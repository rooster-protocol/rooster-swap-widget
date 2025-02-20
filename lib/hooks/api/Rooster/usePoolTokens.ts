import { useQuery } from "@tanstack/react-query";
import { PaginationReq, Token } from "../../../types";
import { ChainContainer } from "../../../containers";
import fetchWithError from "../../services/fetchWithError";
import { sortTokensWithPUSDFirst } from "../../../utils/token";

export const usePoolTokens = ({
  pagination = {
    page: 1,
    perPage: 10,
    sortBy: "price",
    order: "desc",
    search: "",
  },
}: { pagination?: PaginationReq } = {}) => {
  const { chainId, supportedChain, roosterApiUrl } =
    ChainContainer.useContainer();
  const { page, perPage, sortBy, order, search } = pagination;

  const apiPoolTokensQuery = useQuery({
    queryKey: ["getApiPoolTokens", chainId, page, sortBy, order, search],
    queryFn: () =>
      fetchWithError(
        `${roosterApiUrl}/tokens/pool?page=${page}&per_page=${perPage}&sort_by=${sortBy}&order=${order}&search=${search}`
      ),
    enabled: supportedChain,
  });

  const tokens: Token[] = apiPoolTokensQuery.data?.tokens ?? [];
  const sortedTokens = sortTokensWithPUSDFirst(tokens, chainId);

  const count = apiPoolTokensQuery.data?.count || 0;

  const filteredTokens = sortedTokens.filter((t) => !t.disabled);

  return {
    tokens: filteredTokens,
    count: count,
    isFetched: apiPoolTokensQuery.isFetched,
    query: apiPoolTokensQuery,
  };
};

export default usePoolTokens;
