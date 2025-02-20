import { Config } from 'wagmi';
import { QueryClient } from '@tanstack/react-query';
export declare const SwapWidget: ({ wagmiConfig, queryClient, handleConnectWallet, handleToast, lightMode, }: {
    wagmiConfig: Config;
    queryClient: QueryClient;
    handleConnectWallet?: () => void;
    handleToast?: ({ title, type, message, }: {
        title: string;
        type: "error" | "success" | "warning";
        message: string;
    }) => void;
    lightMode?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export default SwapWidget;
