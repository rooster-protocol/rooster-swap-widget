import { FormControlProps, SxProps, Theme } from '@mui/material';
import { Token } from '../../types';
interface AssetSelectProps extends Omit<FormControlProps, "onChange"> {
    value?: Token;
    tokens?: Token[];
    loading: boolean;
    styles?: SxProps<Theme>;
    onChange: (asset: Token) => void;
    ve?: boolean;
    text?: string;
}
export declare const AssetSelect: ({ value, tokens, loading, styles, onChange, ve, text, }: AssetSelectProps) => import("react/jsx-runtime").JSX.Element;
export {};
