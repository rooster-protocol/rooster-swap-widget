import { Config, WagmiProvider } from "wagmi";
import SwapPanel from "../components/SwapPanel/SwapPanel";
import Container from "../containers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material";
import darkMainTheme, { lightMainTheme } from "../theme/themeConfig";
import { noop } from "lodash";

export const SwapWidget = ({
  wagmiConfig,
  queryClient,
  handleConnectWallet = noop,
  handleToast = noop,
  lightMode,
}: {
  wagmiConfig: Config;
  queryClient: QueryClient;
  handleConnectWallet?: () => void;
  handleToast?: ({
    title,
    type,
    message,
  }: {
    title: string;
    type: "error" | "success" | "warning";
    message: string;
  }) => void;
  lightMode?: boolean;
}) => {
  const theme = lightMode ? lightMainTheme : darkMainTheme;

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Container handleToast={handleToast}>
            <SwapPanel handleConnectWallet={handleConnectWallet} />
          </Container>
        </ThemeProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default SwapWidget;
