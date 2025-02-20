import { PaginationReq, Token } from '../../../types';
export declare const usePoolTokens: ({ pagination, }?: {
    pagination?: PaginationReq;
}) => {
    tokens: Token[];
    count: any;
    isFetched: boolean;
    query: import('@tanstack/react-query').UseQueryResult<any, Error>;
};
export default usePoolTokens;
