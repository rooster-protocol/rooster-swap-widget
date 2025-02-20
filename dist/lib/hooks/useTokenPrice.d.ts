import { Token } from '../types';
export declare const useTokenPrice: (token: Token | undefined, chainId?: number) => {
    price: number | undefined;
    isFetched: boolean;
};
export declare const useTokenPriceArray: (tokens: Token[], chainId?: number) => {
    prices: (number | undefined)[];
    isFetched: boolean;
};
