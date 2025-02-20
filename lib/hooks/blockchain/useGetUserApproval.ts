import { useSimulateContract } from "wagmi";
import { Address, erc20Abi, maxUint256, TransactionReceipt } from "viem";
import { useQueryClient } from "@tanstack/react-query";
import { ChainContainer, StateContainer } from "../../containers";
import { Token } from "../../types";
import { useContractWriteWithState } from "./services/useContractWriteWithState";

const APPROVAL_DELAY_MILLISECONDS = 100;

export const useGetUserApproval = (
  approvalAddress: string | undefined,
  token: Token | undefined,
  onTxSuccess?: (txReceipt: TransactionReceipt) => void,
  onTxError?: (error: Error) => void
) => {
  const { chainId, supportedChain } = ChainContainer.useContainer();
  const { handleToast } = StateContainer.useContainer();

  const queryClient = useQueryClient();

  const simulate = useSimulateContract({
    chainId,
    address: token?.address,
    abi: erc20Abi,
    functionName: "approve",
    args: [approvalAddress as Address, maxUint256], // This doesn't coerce because of enabled
    query: {
      enabled: !!approvalAddress && supportedChain,
      retry: false,
    },
  });

  const handleSuccess = (txReceipt: TransactionReceipt) => {
    // Use delay to avoid race condition with simulate
    setTimeout(() => {
      onTxSuccess?.(txReceipt);
      handleToast({
        title: `${token?.symbol} Approved`,
        type: "success",
        message: "The asset was approved successfully.",
      });

      queryClient.invalidateQueries({
        queryKey: [
          "readContracts",
          { chainId, contracts: [{ functionName: "allowance" }] },
        ],
      });
    }, APPROVAL_DELAY_MILLISECONDS);
  };

  return useContractWriteWithState(
    simulate,
    handleSuccess,
    onTxError,
    onTxError
  );
};

export const useGetUserAddressApproval = (
  approvalAddress: Address | undefined,
  tokenAddress: Address | undefined,
  onTxSuccess?: (txReceipt: TransactionReceipt) => void,
  onTxError?: (error: Error) => void
) => {
  const { chainId, supportedChain } = ChainContainer.useContainer();
  const { handleToast } = StateContainer.useContainer();

  const queryClient = useQueryClient();

  const simulate = useSimulateContract({
    chainId,
    address: tokenAddress,
    abi: erc20Abi,
    functionName: "approve",
    args: [approvalAddress as Address, maxUint256], // This doesn't coerce because of enabled
    query: {
      enabled: !!approvalAddress && supportedChain,
      retry: false,
    },
  });

  const handleSuccess = (txReceipt: TransactionReceipt) => {
    // Use delay to avoid race condition with simulate
    setTimeout(() => {
      onTxSuccess?.(txReceipt);
      handleToast({
        title: `Asset Approved`,
        type: "success",
        message: "The asset was approved successfully.",
      });
      queryClient.invalidateQueries({
        queryKey: [
          "readContracts",
          { chainId, contracts: [{ functionName: "allowance" }] },
        ],
      });
    }, APPROVAL_DELAY_MILLISECONDS);
  };

  return useContractWriteWithState(
    simulate,
    handleSuccess,
    onTxError,
    onTxError
  );
};
