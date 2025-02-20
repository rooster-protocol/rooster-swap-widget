import { Address } from 'viem';
import { CONTRACTS_TYPE } from '../../../contracts/types';
export declare const useContracts: (chainId: number) => {
    contracts: Record<string, `0x${string}`> | undefined;
    isFetched: boolean;
    query: import('@tanstack/react-query').UseQueryResult<{
        contracts: Record<string, Address>;
        message: string;
    }, Error>;
};
export declare const useContractAddress: (chainId: number, type: CONTRACTS_TYPE) => `0x${string}` | undefined;
