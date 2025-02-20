import { useQueryClient } from "@tanstack/react-query";
import { ChainContainer, StateContainer } from "../../containers";
import { useGasTokens } from "../api/Rooster/useGasTokens";
import { iweth9Abi } from "../../contracts/generated";
import { useSimulateContract } from "wagmi";
import { useContractWriteWithState } from "../blockchain/services/useContractWriteWithState";
import { TransactionReceipt } from "viem";

export const useDepositWETH = (
  ethToSendBN: bigint,
  enabled: boolean,
  onTxSuccess?: (txReceipt: TransactionReceipt) => void,
  onTxError?: (error: Error) => void
) => {
  const { chainId, supportedChain } = ChainContainer.useContainer();
  const { handleToast } = StateContainer.useContainer();

  const { tokens: gasTokens } = useGasTokens();

  const queryClient = useQueryClient();

  const wrappedToken = gasTokens.find((t) => t.isWrappedGasToken);
  const gasToken = gasTokens.find((t) => t.isGasToken);

  const simulate = useSimulateContract({
    chainId,
    address: wrappedToken?.address,
    abi: iweth9Abi,
    functionName: "deposit",
    value: ethToSendBN,
    query: {
      enabled: !!wrappedToken && supportedChain && ethToSendBN > 0 && enabled,
      retry: false,
    },
  });

  const handleSuccess = (txReceipt: TransactionReceipt) => {
    onTxSuccess?.(txReceipt);

    queryClient.invalidateQueries({
      queryKey: [
        "readContracts",
        { chainId, contracts: [{ functionName: "balanceOf" }] },
      ],
    });

    handleToast({
      title: "Swap Successful!",
      type: "success",
      message: `${gasToken?.symbol} successfully wrapped to ${wrappedToken?.symbol}.`,
    });
  };

  return useContractWriteWithState(
    simulate,
    handleSuccess,
    onTxError,
    onTxError
  );
};

export const useWithdrawWETH = (
  ethToWithdrawBN: bigint,
  enabled: boolean,
  onTxSuccess?: (txReceipt: TransactionReceipt) => void,
  onTxError?: (error: Error) => void
) => {
  const { chainId, supportedChain } = ChainContainer.useContainer();
  const { handleToast } = StateContainer.useContainer();

  const { tokens: gasTokens } = useGasTokens();

  const queryClient = useQueryClient();

  const wrappedToken = gasTokens.find((t) => t.isWrappedGasToken);
  const gasToken = gasTokens.find((t) => t.isGasToken);

  const simulate = useSimulateContract({
    chainId,
    address: wrappedToken?.address,
    abi: iweth9Abi,
    functionName: "withdraw",
    args: [ethToWithdrawBN],
    query: {
      enabled:
        !!wrappedToken && supportedChain && ethToWithdrawBN > 0 && enabled,
      retry: false,
    },
  });

  const handleSuccess = (txReceipt: TransactionReceipt) => {
    onTxSuccess?.(txReceipt);

    queryClient.invalidateQueries({
      queryKey: [
        "readContracts",
        { chainId, contracts: [{ functionName: "balanceOf" }] },
      ],
    });
    queryClient.invalidateQueries({
      queryKey: [
        "readContracts",
        { chainId, contracts: [{ functionName: "allowance" }] },
      ],
    });

    handleToast({
      title: "Swap Successful!",
      type: "success",
      message: `${wrappedToken?.symbol} successfully unwrapped to ${gasToken?.symbol}.`,
    });
  };

  return useContractWriteWithState(
    simulate,
    handleSuccess,
    onTxError,
    onTxError
  );
};
