import { default as React } from 'react';
import { SxProps, Theme } from '@mui/material';
import { Token } from '../../types';
interface AssetInputCardProps {
    token: Token | undefined;
    tokens?: Token[];
    loading: boolean;
    amount?: string;
    balance?: number;
    onAssetChange?: (asset: Token) => void;
    onAmountChange?: (value: string) => void;
    isMax?: boolean;
    isInput?: boolean;
    per?: Token;
    setMax?: React.Dispatch<React.SetStateAction<boolean>>;
    ve?: boolean;
    stylesCard?: SxProps<Theme>;
    showPrice?: boolean;
}
export default function AssetInputCard({ token, tokens, loading, amount, balance, onAssetChange, onAmountChange, isMax, isInput, per, setMax, ve, stylesCard, showPrice, }: AssetInputCardProps): import("react/jsx-runtime").JSX.Element;
export {};
