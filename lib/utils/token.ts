import { Pool, Token } from "../types";

export const stringToColor = (str: string) => {
  return stringToColorHash(stringToColorHash(stringToColorHash(str)));
};

const stringToColorHash = (str: string) => {
  let hash = 0;
  str
    .toLowerCase()
    .split("")
    .forEach((char) => {
      hash = char.charCodeAt(0) + ((hash << 5) - hash);
    });
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += value.toString(16).padStart(2, "0");
  }
  return colour;
};

/**
 * Retrieves the price of the token.  If the token contains a price id, then that is used to determine the price.
 * Otherwise, the token's address is used.
 *
 * @param token The token for which the price is to be fetched.
 * @param prices An object holding token prices in usd.  The keys are token addresses or price ids.
 */
export const getTokenPrice = (
  token: Token | undefined,
  prices: Record<
    string,
    {
      usd: number;
    }
  >
) => {
  if (!token) {
    return undefined;
  } else if (token.priceId && prices[token.priceId]) {
    return prices[token.priceId].usd;
  } else if (prices[token.address.toLowerCase()]) {
    return prices[token.address.toLowerCase()].usd;
  }
};

export const getTokenPriceWithPool = (
  token: Token | undefined,
  prices: Record<
    string,
    {
      usd: number;
    }
  >,
  pool: Pool | undefined
) => {
  const price = getTokenPrice(token, prices);

  if (price) {
    return price;
  } else if (pool && token) {
    const inverted =
      token.address.toLowerCase() === pool.tokenA.address.toLowerCase();
    const poolPrice = inverted ? 1 / pool.price : pool.price;
    const otherToken = inverted ? pool.tokenB : pool.tokenA;
    const otherTokenPrice = getTokenPrice(otherToken, prices);
    if (otherTokenPrice) {
      return poolPrice * otherTokenPrice;
    }
  }
};

export const PUSD_ADDRESSES = {
  98865: "0xdddD73F5Df1F0DC31373357beAC77545dC5A6f3F",
  // other chain ID: corresponding address
  default: "0xe644f07b1316f28a7f134998e021ea9f7135f351",
} as const;

export const sortTokensWithPUSDFirst = (tokens: Token[], chainId: number) => {
  const pUSDAddress = (
    PUSD_ADDRESSES[chainId as keyof typeof PUSD_ADDRESSES] ??
    PUSD_ADDRESSES.default
  ).toLowerCase();

  return (
    tokens
      // First sort alphabetically by symbol
      .sort((a, b) =>
        a.symbol.toLowerCase().localeCompare(b.symbol.toLowerCase())
      )
      // Then ensure PUSD is first
      .sort((a, b) => {
        if (a.address.toLowerCase() === pUSDAddress) return -1;
        if (b.address.toLowerCase() === pUSDAddress) return 1;
        return 0;
      })
  );
};
