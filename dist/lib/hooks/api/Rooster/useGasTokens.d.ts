import { Token } from '../../../types';
export declare const useGasTokens: () => {
    tokens: Token[];
    isFetched: boolean;
    query: import('@tanstack/react-query').UseQueryResult<any, Error>;
};
