import { ChainContainer } from "../../../containers";
import { useQuery } from "@tanstack/react-query";

import fetchWithError from "../../services/fetchWithError";

const useTokenPrices = (targetChainId?: number) => {
  const { chainId, mavApiUrl } = ChainContainer.useContainer();

  const priceQuery = useQuery({
    queryKey: ["getApiTokenPrices", targetChainId ?? chainId],
    queryFn: () =>
      fetchWithError(`${mavApiUrl}/tokenPrices/${targetChainId ?? chainId}`),
    enabled: false,
  });

  const prices: Record<string, { usd: number }> = priceQuery.data?.prices ?? {};

  return { prices: prices, isFetched: priceQuery.isFetched };
};

export default useTokenPrices;
