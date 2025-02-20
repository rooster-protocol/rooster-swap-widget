import {
  ContractFunctionArgs,
  ContractFunctionName,
  TransactionReceipt,
  Address,
} from "viem";
import {
  UseSimulateContractReturnType,
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
  type Config,
} from "wagmi";
import SafeAppsSDK, { TransactionStatus } from "@safe-global/safe-apps-sdk";

import type { Abi } from "abitype";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  isUserRejectedTransactionError,
  USER_REJECTED_ERROR_TEXT,
} from "../../../utils/error";

import { useLatest } from "react-use";
import { ChainContainer, StateContainer } from "../../../containers";
import { ContractWriteQuery, TxType } from "../../../types";
import { getTxButtonText, txIsLoading } from "../../../utils/tx";

export function useContractWriteWithState<
  TAbi extends Abi | readonly unknown[],
  TFunctionName extends ContractFunctionName<TAbi, "nonpayable" | "payable">,
  TArgs extends ContractFunctionArgs<
    TAbi,
    "nonpayable" | "payable",
    TFunctionName
  >,
  TConfig extends Config,
  TChainId extends TConfig["chains"][number]["id"] | undefined
>(
  simulate: UseSimulateContractReturnType<
    TAbi,
    TFunctionName,
    TArgs,
    TConfig,
    TChainId
  >,
  onTxSuccess?: (receipt: TransactionReceipt) => void,
  onTxError?: (error: Error) => void,
  onSignError?: (error: Error) => void,
  otherError?: Error | null,
  buttonTextValues?: {
    initialText: string;
    confirmingText: string;
    confirmedText: string;
  }
): ContractWriteQuery<TAbi, TFunctionName, TArgs, TConfig, TChainId> {
  const config: UseSimulateContractReturnType<
    TAbi,
    TFunctionName,
    TArgs,
    TConfig,
    TChainId
  >["data"] = simulate.data;
  const error = simulate.error;

  const { connector } = useAccount();
  const isSafe = connector?.id === "safe";

  const { chainId } = ChainContainer.useContainer();
  const { handleToast } = StateContainer.useContainer();

  const [txState, setTxState] = useState<TxType>("preInit");
  const latestTxState = useLatest(txState);
  const [txHash, setTxHash] = useState<Address | undefined>();

  const isLoading = txIsLoading(txState);

  const [txReceipt, setTxReceipt] = useState<TransactionReceipt | undefined>();

  const queryClient = useQueryClient();

  const resetState = () => {
    console.log("reset");
    setTxState("preInit");
    setTxHash(undefined);
    setTxReceipt(undefined);
    queryClient.removeQueries({
      queryKey: [
        "simulateContract",
        { functionName: simulate.data?.request.functionName },
      ],
    });
  };

  useEffect(() => {
    if (!isLoading) {
      if (simulate.status == "success" && simulate.data.request) {
        setTxState("simulated");
      } else if (simulate.status == "pending") {
        setTxState("simulating");
      } else {
        setTxState("preInit");
      }
    }
  }, [simulate.status, simulate.data, txState]);

  const { writeContractAsync, reset: resetWriteQuery } = useWriteContract({
    mutation: {
      onMutate: () => {
        setTxState("signing");
      },
      onSuccess: async (hash) => {
        setTxState("signed");
        setTxHash(hash);

        try {
          setTxState("submitted");
          if (isSafe) {
            const sdk = new SafeAppsSDK();

            while (true) {
              const queued = await sdk.txs.getBySafeTxHash(hash);

              if (
                queued.txStatus === TransactionStatus.AWAITING_CONFIRMATIONS ||
                queued.txStatus === TransactionStatus.AWAITING_EXECUTION
              ) {
                await new Promise((r) => setTimeout(r, 2000));
              } else {
                break;
              }
            }
          }
        } catch (txError: any) {
          handleToast({
            type: "error",
            title: "Transaction Error",
            message: txError?.message as string,
          });
          onTxError?.(txError as Error);
          resetState();
          resetWriteQuery();
        } finally {
          queryClient.invalidateQueries({
            queryKey: ["balance", { chainId }],
          });
        }
      },
    },
  });

  const result = useWaitForTransactionReceipt({
    chainId,
    hash: isSafe ? txReceipt?.transactionHash : txHash,
  });

  useEffect(() => {
    if (!result.failureReason && !result.error && result.data) {
      const receipt = result.data;
      setTxReceipt(receipt);
      if (receipt.status == "success") {
        setTxState("confirmed");
        onTxSuccess?.(receipt);
      } else {
        console.log("TX REVERTED", receipt);
      }
    }
  }, [result]);

  let refundETH = 0;
  let paymentETH = 0;

  const initialRequest: any | undefined = config?.request;
  const latestRequest = useLatest(initialRequest);

  const latestSimulateError = useLatest(simulate.error);

  const buttonText = getTxButtonText(txState, buttonTextValues);

  return {
    buttonText,
    executeAsync: async () => {
      let retryCount = 0;
      while (
        (latestTxState.current == "simulating" ||
          latestTxState.current == "preInit") &&
        !latestSimulateError.current &&
        !otherError
      ) {
        if (retryCount == 20) {
          break;
        }
        await new Promise((r) => setTimeout(r, 250));
        retryCount++;
        console.log("simulating", retryCount, txState, latestTxState.current);
      }

      return writeContractAsync(latestRequest.current).catch((signError) => {
        if (!latestRequest.current || otherError || signError) {
          const error =
            otherError ??
            latestSimulateError.current ??
            (latestRequest.current
              ? signError
              : Error(
                  simulate.status == "pending"
                    ? `Transaction simulation failed to ${
                        latestTxState.current == "preInit"
                          ? "start"
                          : "complete"
                      }.`
                    : "Simulate Tx Failed"
                ));

          if (isUserRejectedTransactionError(signError)) {
            handleToast({
              type: "warning",
              title: "Transaction Rejected",
              message: USER_REJECTED_ERROR_TEXT,
            });
          } else {
            handleToast({
              type: "error",
              title: "Transaction Error",
              message: error.message,
            });

            console.log("Simulate Tx failed", error);
          }

          setTxState(
            simulate.isSuccess && simulate.data ? "simulated" : "preInit"
          );

          onSignError?.(error);
        }
      });
    },
    isLoading,
    simulateError: error,
    txHash: isSafe ? txReceipt?.transactionHash : txHash,
    txReceipt,
    txState,
    txActive:
      txState == "signing" || txState == "signed" || txState == "submitted",
    refundETH,
    paymentETH,
    simulate,
    resetWriteQuery: () => {
      resetState();
      resetWriteQuery();
    },
  };
}
