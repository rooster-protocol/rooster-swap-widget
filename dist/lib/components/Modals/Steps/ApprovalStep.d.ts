import { Token } from '../../../types';
import { Address } from 'viem';
interface TProps {
    amount: number;
    token: Token | undefined;
    isActive: boolean;
    body: JSX.Element;
    footer?: JSX.Element;
    approvalAddress: Address | undefined;
    onTxError: () => void;
    onApproval: () => void;
    disabled?: boolean;
}
export declare const ApproveTokenStep: ({ amount, token, isActive, body, footer, approvalAddress, onTxError, onApproval, disabled, }: TProps) => {
    stepText: string;
    body: import("react/jsx-runtime").JSX.Element;
    footer: JSX.Element | undefined;
    ctaButton: import("react/jsx-runtime").JSX.Element;
};
export {};
