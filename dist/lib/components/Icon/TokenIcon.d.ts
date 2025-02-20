import { SxProps, Theme } from '@mui/material';
import { Token } from '../../types';
interface TokenIconProps {
    token: Token;
    className?: string;
    size?: number;
    sx?: SxProps<Theme>;
    hideChain?: boolean;
}
export declare const TokenIcon: ({ token, sx, size, hideChain, ...rest }: TokenIconProps) => import("react/jsx-runtime").JSX.Element;
export {};
