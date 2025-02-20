import useTokenPrices from "./api/Mav/useTokenPrices";
import { Token } from "../types";
import { getTokenPriceWithPool } from "../utils/token";
import { usePool } from "./api/Rooster/usePool";
import { usePools } from "./api/Rooster/usePools";

export const useTokenPrice = (token: Token | undefined, chainId?: number) => {
  const { prices, isFetched } = useTokenPrices(chainId);
  const { pool, isFetched: poolFetched } = usePool(token?.poolId);

  return {
    price: getTokenPriceWithPool(token, prices, pool),
    isFetched: isFetched && (!token?.poolId || poolFetched),
  };
};

export const useTokenPriceArray = (tokens: Token[], chainId?: number) => {
  const { prices, isFetched } = useTokenPrices(chainId);
  const { pools, isFetched: poolsFetched } = usePools({ chainId });

  return {
    prices: tokens.map((t) => {
      if (!isFetched) {
        return undefined;
      }

      const pool = pools.find(
        (p) => p.address.toLowerCase() == t.poolId?.toLowerCase()
      );

      return getTokenPriceWithPool(t, prices, pool);
    }),

    isFetched: isFetched && poolsFetched,
  };
};
