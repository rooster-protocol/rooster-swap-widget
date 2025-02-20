import { Pool } from '../../../types';
export declare const usePool: (address: string | undefined) => {
    isFetched: boolean;
    query: import('@tanstack/react-query').UseQueryResult<{
        pool: Pool | undefined;
        message: string;
    }, Error>;
    pool?: undefined;
} | {
    pool: Pool;
    isFetched: boolean;
    query: import('@tanstack/query-core').DefinedQueryObserverResult<{
        pool: Pool | undefined;
        message: string;
    }, Error> | import('@tanstack/query-core').QueryObserverPlaceholderResult<{
        pool: Pool | undefined;
        message: string;
    }, Error>;
};
