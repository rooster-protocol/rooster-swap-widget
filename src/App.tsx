import { SwapWidget } from "@rooster-protocol/rooster-swap";
import { useQueryClient } from "@tanstack/react-query";
import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";
import { AppBar, Toolbar } from "@mui/material";
import { useConfig } from "wagmi";
import { enqueueSnackbar } from "notistack";

function App() {
  const queryClient = useQueryClient();
  const { openConnectModal } = useConnectModal();
  const config = useConfig();

  const handleToast = ({
    message,
    type,
    title,
  }: {
    title: string;
    type: "error" | "success" | "warning";
    message: string;
  }) =>
    enqueueSnackbar(message, {
      anchorOrigin: { horizontal: "center", vertical: "bottom" },
      variant: "alert",
      type,
      title,
    });

  return (
    <div className="App">
      <AppBar style={{ backgroundColor: "#00DAB5" }}>
        <Toolbar>
          <ConnectButton />
        </Toolbar>
      </AppBar>

      <SwapWidget
        wagmiConfig={config}
        queryClient={queryClient}
        handleConnectWallet={openConnectModal}
        handleToast={handleToast}
      />
    </div>
  );
}

export default App;
