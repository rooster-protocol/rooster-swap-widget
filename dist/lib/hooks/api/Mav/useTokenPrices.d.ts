declare const useTokenPrices: (targetChainId?: number) => {
    prices: Record<string, {
        usd: number;
    }>;
    isFetched: boolean;
};
export default useTokenPrices;
