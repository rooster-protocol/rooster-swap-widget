import { PaginationReq } from '../../../types';
export declare const usePools: ({ chainId, pagination, }?: {
    chainId?: number;
    pagination?: PaginationReq;
}) => {
    pools: any[];
    count: number;
    isFetched: boolean;
    query: import('@tanstack/react-query').UseQueryResult<{
        pools: any[] | undefined;
        message: string;
        count?: number;
    }, Error>;
};
export declare const useSwapPools: (userToken1Address: string | undefined, userToken2Address: string | undefined) => {
    pools: any[];
    isFetched: boolean;
};
