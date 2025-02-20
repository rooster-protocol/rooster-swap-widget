import { Pool, Token } from '../types';
export declare const stringToColor: (str: string) => string;
/**
 * Retrieves the price of the token.  If the token contains a price id, then that is used to determine the price.
 * Otherwise, the token's address is used.
 *
 * @param token The token for which the price is to be fetched.
 * @param prices An object holding token prices in usd.  The keys are token addresses or price ids.
 */
export declare const getTokenPrice: (token: Token | undefined, prices: Record<string, {
    usd: number;
}>) => number | undefined;
export declare const getTokenPriceWithPool: (token: Token | undefined, prices: Record<string, {
    usd: number;
}>, pool: Pool | undefined) => number | undefined;
export declare const PUSD_ADDRESSES: {
    readonly 98865: "0xdddD73F5Df1F0DC31373357beAC77545dC5A6f3F";
    readonly default: "0xe644f07b1316f28a7f134998e021ea9f7135f351";
};
export declare const sortTokensWithPUSDFirst: (tokens: Token[], chainId: number) => Token[];
