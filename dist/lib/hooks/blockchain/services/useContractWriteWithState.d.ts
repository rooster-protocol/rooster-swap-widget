import { ContractFunctionArgs, ContractFunctionName, TransactionReceipt } from 'viem';
import { UseSimulateContractReturnType, Config } from 'wagmi';
import { Abi } from 'abitype';
import { ContractWriteQuery } from '../../../types';
export declare function useContractWriteWithState<TAbi extends Abi | readonly unknown[], TFunctionName extends ContractFunctionName<TAbi, "nonpayable" | "payable">, TArgs extends ContractFunctionArgs<TAbi, "nonpayable" | "payable", TFunctionName>, TConfig extends Config, TChainId extends TConfig["chains"][number]["id"] | undefined>(simulate: UseSimulateContractReturnType<TAbi, TFunctionName, TArgs, TConfig, TChainId>, onTxSuccess?: (receipt: TransactionReceipt) => void, onTxError?: (error: Error) => void, onSignError?: (error: Error) => void, otherError?: Error | null, buttonTextValues?: {
    initialText: string;
    confirmingText: string;
    confirmedText: string;
}): ContractWriteQuery<TAbi, TFunctionName, TArgs, TConfig, TChainId>;
