import { WriteContractErrorType } from '@wagmi/core';
import { BaseError } from 'wagmi';
export declare const USER_REJECTED_ERROR_TEXT = "You rejected this transaction in your wallet.  You must confirm it in order for it to be sent to the blockchain.";
export declare const isUserRejectedTransactionError: (error: WriteContractErrorType | BaseError) => boolean;
