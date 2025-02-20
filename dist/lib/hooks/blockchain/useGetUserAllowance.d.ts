import { Address } from 'viem';
import { Token } from '../../types';
export declare const useGetUserTokenAllowance: (token: Token | undefined, poolAddress: Address | undefined) => {
    isFetched: boolean;
    isLoading: boolean;
    allowanceBN: bigint;
    allowance: number;
    approved: boolean;
};
export declare const useGetUserTokenAddressAllowance: (tokenAddress: Address | undefined, poolAddress: Address | undefined) => {
    isFetched: boolean;
    isLoading: boolean;
    allowance: number;
    allowanceBN: bigint;
    approved: boolean;
};
