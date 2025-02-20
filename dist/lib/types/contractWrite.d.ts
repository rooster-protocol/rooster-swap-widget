import { ContractFunctionArgs, ContractFunctionName, TransactionReceipt, Address } from 'viem';
import { Abi } from 'abitype';
import { Config, UseSimulateContractReturnType } from 'wagmi';
export type TxType = "preInit" | "simulating" | "simulated" | "signing" | "signed" | "submitted" | "confirmed";
export interface ContractWriteQuery<TAbi extends Abi | readonly unknown[], TFunctionName extends ContractFunctionName<TAbi, "nonpayable" | "payable">, TArgs extends ContractFunctionArgs<TAbi, "nonpayable" | "payable", TFunctionName>, TConfig extends Config, TChainId extends TConfig["chains"][number]["id"] | undefined> {
    buttonText: string;
    executeAsync: (() => Promise<`0x${string}` | void>) | undefined;
    isLoading: boolean;
    simulateError: Error | null;
    txHash: Address | undefined;
    txReceipt: TransactionReceipt | undefined;
    txState: TxType;
    txActive: boolean;
    paymentETH: number;
    refundETH: number;
    resetWriteQuery: () => void;
    simulate: UseSimulateContractReturnType<TAbi, TFunctionName, TArgs, TConfig, TChainId>;
}
