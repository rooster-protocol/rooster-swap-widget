import { TransactionReceipt } from 'viem';
import { Token } from '../../../types';
interface TProps {
    tokenA: Token | undefined;
    tokenB: Token | undefined;
    path: (boolean | `0x${string}`)[];
    amountIn: bigint;
    amountOutMinimum: bigint;
    isActive: boolean;
    body: JSX.Element;
    footer: JSX.Element;
    next: () => void;
    onTxError: () => void;
    onTxSuccess: (txReceipt: TransactionReceipt) => void;
    onTxFinalized: () => void;
}
declare const ConfirmSwapStep: ({ tokenA, tokenB, path, amountIn, amountOutMinimum, body, footer, isActive, next, onTxError, onTxSuccess, onTxFinalized, }: TProps) => {
    stepText: string;
    body: JSX.Element;
    footer: JSX.Element;
    ctaButton: import("react/jsx-runtime").JSX.Element;
}[];
export default ConfirmSwapStep;
