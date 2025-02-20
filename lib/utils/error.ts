import { WriteContractErrorType } from "@wagmi/core";
import { ContractFunctionExecutionError, UserRejectedRequestError } from "viem";
import { BaseError } from "wagmi";

export const USER_REJECTED_ERROR_TEXT =
  "You rejected this transaction in your wallet.  You must confirm it in order for it to be sent to the blockchain.";

export const isUserRejectedTransactionError = (
  error: WriteContractErrorType | BaseError
) => {
  if (error instanceof ContractFunctionExecutionError) {
    const isUserRejectedRequestError =
      error.walk((e) => e instanceof UserRejectedRequestError) instanceof
      UserRejectedRequestError;

    return isUserRejectedRequestError;
  } else {
    return false;
  }
};
