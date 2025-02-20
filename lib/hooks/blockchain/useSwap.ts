import { ChainContainer, StateContainer } from "../../containers";
import {
  maverickV2PoolAbi,
  maverickV2RouterAbi,
} from "../../contracts/generated";
import {
  TransactionReceipt,
  Address,
  decodeEventLog,
  Log,
  encodeFunctionData,
} from "viem";
import { useSimulateContract } from "wagmi";
import { useContractWriteWithState } from "../blockchain/services/useContractWriteWithState";
import { useDepositWETH, useWithdrawWETH } from "./useWETH";
import { Token } from "../../types";
import { useQueryClient } from "@tanstack/react-query";
import { useGetUserTokenAllowance } from "../blockchain/useGetUserAllowance";
import { useContractAddress } from "../api/Rooster/useContracts";
import { CONTRACTS_TYPE } from "../../contracts/types";
import { displayNumber, encodePath, fixedToFloat } from "../../utils";
import { usePools } from "../api/Rooster/usePools";

export const useSwapTx = (
  enabled: boolean,
  inputToken: Token | undefined,
  outputToken: Token | undefined,
  path: (Address | boolean)[],
  amountIn: bigint,
  amountOutMinimum: bigint,
  onTxSuccess?: (txReceipt: TransactionReceipt) => void,
  onTxError?: (error: Error) => void
) => {
  const { address, supportedChain, chainId } = ChainContainer.useContainer();
  const { handleToast } = StateContainer.useContainer();

  const queryClient = useQueryClient();

  const routerAddress = useContractAddress(chainId, CONTRACTS_TYPE.ROUTER);

  const { allowanceBN } = useGetUserTokenAllowance(inputToken, routerAddress);

  const poolAddress = path[0] as Address | undefined;
  const tokenAIn = path[1] as boolean | undefined;

  const { pools } = usePools();
  const pool = pools.find(
    (p) => p.address.toLowerCase() == poolAddress?.toLowerCase()
  );

  const activeTick = pool?.activeTick ?? 0;

  const tickLimit = tokenAIn ? activeTick + 1_000_000 : activeTick - 1_000_000;

  let oneCallData: any[] = [];
  let twoCallData: any[] = [];

  // Explicity define call data to avoid eth getting lost
  if (!!address && !!routerAddress && !!poolAddress) {
    const unwrapCallData = encodeFunctionData({
      abi: maverickV2RouterAbi,
      functionName: "unwrapWETH9",
      args: [amountOutMinimum, address as Address],
    });

    oneCallData = outputToken?.isGasToken
      ? [
          encodeFunctionData({
            abi: maverickV2RouterAbi,
            functionName: "inputSingleWithTickLimit",
            args: [
              routerAddress as Address,
              poolAddress as Address,
              tokenAIn as boolean,
              amountIn,
              tickLimit,
              amountOutMinimum,
            ],
          }),
          unwrapCallData,
        ]
      : [
          encodeFunctionData({
            abi: maverickV2RouterAbi,
            functionName: "inputSingleWithTickLimit",
            args: [
              address as Address,
              poolAddress as Address,
              tokenAIn as boolean,
              amountIn,
              tickLimit,
              amountOutMinimum,
            ],
          }),
        ];

    twoCallData = outputToken?.isGasToken
      ? [
          encodeFunctionData({
            abi: maverickV2RouterAbi,
            functionName: "exactInputMultiHop",
            args: [
              routerAddress as Address,
              encodePath(path),
              amountIn,
              amountOutMinimum,
            ],
          }),
          unwrapCallData,
        ]
      : [
          encodeFunctionData({
            abi: maverickV2RouterAbi,
            functionName: "exactInputMultiHop",
            args: [
              address as Address,
              encodePath(path),
              amountIn,
              amountOutMinimum,
            ],
          }),
        ];
  }

  const singleSimulate = useSimulateContract({
    chainId,
    address: routerAddress as Address,
    abi: maverickV2RouterAbi,
    functionName: "multicall",
    args: [oneCallData], // This doesn't coerce because of enabled
    query: {
      enabled:
        !!address &&
        supportedChain &&
        path.length > 0 &&
        !(path.length > 2) &&
        enabled &&
        allowanceBN >= amountIn &&
        !!pool,
      retry: false,
    },
    value: inputToken?.isGasToken ? amountIn : (0n as any),
  });

  const multiSimulate = useSimulateContract({
    chainId,
    address: routerAddress as Address,
    abi: maverickV2RouterAbi,
    functionName: "multicall",
    args: [twoCallData],
    query: {
      enabled:
        !!address &&
        supportedChain &&
        path.length > 2 &&
        enabled &&
        allowanceBN >= amountIn,
      retry: false,
    },
    value: inputToken?.isGasToken ? amountIn : (0n as any),
  });

  const handleSuccess = (txReceipt: TransactionReceipt) => {
    let log: Log<bigint, number, false> | undefined = undefined;

    let actualOutputAmount: number | undefined = undefined;

    try {
      log = txReceipt.logs.find(
        (l) =>
          typeof poolAddress == "string" &&
          l.address.toLowerCase() == poolAddress.toLowerCase()
      );

      const _decodedLog = decodeEventLog({
        abi: maverickV2PoolAbi,
        topics: log?.topics ?? [],
        data: log?.data,
      });
      if (_decodedLog.eventName == "PoolSwap") {
        actualOutputAmount = fixedToFloat(
          _decodedLog.args.amountOut,
          outputToken?.decimals
        );
      }
    } catch (error) {
      console.log("Decode failed", error);
    }

    const swapMessage = actualOutputAmount
      ? `${displayNumber(
          fixedToFloat(amountIn, inputToken?.decimals),
          "input"
        )} ${inputToken?.symbol} was 
      successfully swapped for ${displayNumber(actualOutputAmount, "input")} ${
          outputToken?.symbol
        }.`
      : `${inputToken?.symbol} was successfully swapped for ${outputToken?.symbol}.`;

    handleToast({
      title: `Swap Successful`,
      type: "success",
      message: swapMessage,
    });
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
  };

  const singleWrite = useContractWriteWithState(
    singleSimulate,
    handleSuccess,
    onTxError,
    onTxError
  );

  const multiWrite = useContractWriteWithState(
    multiSimulate,
    handleSuccess,
    onTxError,
    onTxError
  );

  return path.length > 2 ? multiWrite : singleWrite;
};

export const useSwap = (
  tokenA: Token | undefined,
  tokenB: Token | undefined,
  path: (Address | boolean)[],
  amountIn: bigint,
  amountOutMinimum: bigint,
  onTxSuccess?: (txReceipt: TransactionReceipt) => void,
  onTxError?: (error: Error) => void
) => {
  const type: "swap" | "deposit" | "withdraw" =
    tokenA?.isGasToken && tokenB?.isWrappedGasToken
      ? "deposit"
      : tokenA?.isWrappedGasToken && tokenB?.isGasToken
      ? "withdraw"
      : "swap";

  const swapQuery = useSwapTx(
    type == "swap",
    tokenA,
    tokenB,
    path,
    amountIn,
    amountOutMinimum,
    onTxSuccess,
    onTxError
  );

  const depositQuery = useDepositWETH(
    amountIn,
    type == "deposit",
    onTxSuccess,
    onTxError
  );

  const withdrawQuery = useWithdrawWETH(
    amountIn,
    type == "withdraw",
    onTxSuccess,
    onTxError
  );

  switch (type) {
    case "deposit":
      return { ...depositQuery, type };
    case "withdraw":
      return { ...withdrawQuery, type };
    case "swap":
    default:
      return { ...swapQuery, type };
  }
};
