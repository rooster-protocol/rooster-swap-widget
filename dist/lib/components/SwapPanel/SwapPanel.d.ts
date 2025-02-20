import { SxProps, Theme } from '@mui/material';
import { Address } from 'viem';
interface SwapPanelProps {
    stylesCard?: SxProps<Theme>;
    tokenAId?: Address | "ETH";
    tokenBId?: Address | "ETH";
    handleConnectWallet: () => void;
}
export default function SwapPanel({ stylesCard, tokenAId, tokenBId, handleConnectWallet, }: SwapPanelProps): import("react/jsx-runtime").JSX.Element;
export {};
