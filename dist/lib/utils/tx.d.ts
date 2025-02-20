import { TxType } from '../types';
export declare const txIsLoading: (txState: TxType) => txState is "signing" | "signed" | "submitted" | "confirmed";
export declare const getTxButtonText: (txState: TxType, buttonTextValues: {
    initialText: string;
    confirmingText: string;
    confirmedText: string;
} | undefined) => string;
