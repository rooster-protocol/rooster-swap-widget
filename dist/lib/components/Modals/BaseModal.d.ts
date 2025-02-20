import { default as React } from 'react';
import { DialogProps } from '@mui/material';
export interface BaseModalProps extends Omit<DialogProps, "onClose"> {
    open: boolean;
    onClose: (arg0?: any) => void;
    render?: (CloseButton: JSX.Element) => React.ReactNode;
}
export default function BaseModal({ render, onClose, ...props }: BaseModalProps): import("react/jsx-runtime").JSX.Element;
export declare const CloseButton: ({ onClose }: {
    onClose: () => void;
}) => import("react/jsx-runtime").JSX.Element;
