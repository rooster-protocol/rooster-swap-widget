import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@rainbow-me/rainbowkit/styles.css";
import App from "./App.tsx";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "./config/wallet.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import Alert from "./components/Alert.tsx";

const queryClient = new QueryClient();

// Snackbar
declare module "notistack" {
  interface VariantOverrides {
    alert: {
      type: "success" | "warning" | "error";
      title: string;
      onClose?: () => void;
    };
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SnackbarProvider maxSnack={1} Components={{ alert: Alert }}>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <App />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </SnackbarProvider>
  </StrictMode>
);
