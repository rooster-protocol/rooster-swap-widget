import { Token } from '../../../types';
import { Address } from 'viem';
export declare const useFindSwapPaths: (inputToken: Token | undefined, outputToken: Token | undefined, amountIn: number) => {
    paths: (boolean | `0x${string}`)[][];
    outputAmount: number;
    gas: number;
    path: (boolean | `0x${string}`)[];
    routerAddress: `0x${string}` | undefined;
    swapData: ({
        error?: undefined;
        result: never;
        status: "success";
    } | {
        error: Error;
        result?: undefined;
        status: "failure";
    })[] | undefined;
    isFetched: boolean;
    loading: boolean;
    query: import('@tanstack/react-query').UseQueryResult<{
        paths: (Address | boolean)[][];
        status: number;
    }, Error>;
};
