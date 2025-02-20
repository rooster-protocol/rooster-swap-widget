import { Address } from "viem";
import { ChainContainer } from "../../../containers";
import CommonButton from "../../Common/CommonButton";
import { etherscan } from "../../../config/etherscan";

export const ViewOnExplorerButton = ({
  txHash,
}: {
  txHash: Address | undefined;
}) => {
  const { chainId } = ChainContainer.useContainer();

  return txHash ? (
    <CommonButton
      buttonType="tertiary"
      onClick={() => {
        window.open(`${etherscan[chainId]}/tx/${txHash}`);
      }}>
      View on Explorer
    </CommonButton>
  ) : (
    <></>
  );
};
