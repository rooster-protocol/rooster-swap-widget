import { Address } from 'viem';
import { Token } from '../../types';
export declare const useGetUserTokenBalance: (token: Token | undefined) => {
    isFetched: boolean;
    isLoading: boolean;
    balance: number;
    balanceBN: bigint;
};
export declare const useGetUserTokenAddressBalance: (tokenAddress: Address | undefined) => {
    isFetched: boolean;
    isLoading: boolean;
    balance: number;
    balanceBN: bigint;
};
export declare const useGetTokenAddressBalance: (tokenAddress: Address | undefined, walletAddress: Address | undefined) => {
    isFetched: boolean;
    isLoading: boolean;
    balance: number;
    balanceBN: bigint;
};
