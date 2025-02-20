import CommonButton from "./Common/CommonButton";
interface ConnectWalletButtonProps {
  size?: "large";
  fullWidth?: boolean;
  handleConnectWallet: () => void;
}

export default function ConnectWalletButton({
  size,
  fullWidth,
  handleConnectWallet,
}: ConnectWalletButtonProps) {
  return (
    <CommonButton
      buttonType="secondary"
      fullWidth={fullWidth}
      text={"Connect wallet"}
      onClick={handleConnectWallet}
      size={size}
    />
  );
}
