import { CTAButton } from "./CTAButton";
import { useEffect, useState } from "react";
import { TransactionReceipt } from "viem";
import { Token } from "../../../types";
import TxState from "./TxState";
import { ViewOnExplorerButton } from "./ViewOnExplorerButton";
import { useSwap } from "../../../hooks/blockchain/useSwap";

interface TProps {
  tokenA: Token | undefined;
  tokenB: Token | undefined;
  path: (boolean | `0x${string}`)[];
  amountIn: bigint;
  amountOutMinimum: bigint;
  isActive: boolean;
  body: JSX.Element;
  footer: JSX.Element;
  next: () => void;
  onTxError: () => void;
  onTxSuccess: (txReceipt: TransactionReceipt) => void;
  onTxFinalized: () => void;
}

const ConfirmSwapStep = ({
  tokenA,
  tokenB,
  path,
  amountIn,
  amountOutMinimum,
  body,
  footer,
  isActive,
  next,
  onTxError,
  onTxSuccess,
  onTxFinalized,
}: TProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const [confirmText, setConfirmText] = useState<string>("");

  const handleSuccess = (txReceipt: TransactionReceipt) => {
    next();
    setIsLoading(false);
    onTxSuccess(txReceipt);
  };

  const { executeAsync, txHash, txState, type, resetWriteQuery } = useSwap(
    tokenA,
    tokenB,
    path,
    amountIn,
    amountOutMinimum,
    handleSuccess,
    onTxError
  );

  //Set confirm text
  useEffect(() => {
    if (type == "deposit") {
      setConfirmText("Confirm Wrap");
    } else if (type == "withdraw") {
      setConfirmText("Confirm Unwrap");
    } else {
      setConfirmText("Confirm Swap");
    }
  }, [type]);

  useEffect(() => {
    if (!isActive) {
      setIsLoading(false);
      resetWriteQuery();
    }
  }, [isActive]);

  return [
    {
      stepText: `Confirm`,
      body,
      footer,
      ctaButton: (
        <CTAButton
          isLoading={isLoading}
          onClick={async () => {
            setIsLoading(true);
            try {
              await executeAsync?.();
            } catch {
              console.log("Tx Execution Error");
            }
          }}
          text={confirmText}
        />
      ),
    },
    {
      stepText: "Complete",
      body: <TxState txState={txState} />,
      ctaButton: (
        <CTAButton
          onClick={() => {
            onTxFinalized();
          }}
          isLoading={isLoading}
          text="Done"
        />
      ),
      footer: (
        <>
          <ViewOnExplorerButton txHash={txHash} />
        </>
      ),
    },
  ];
};

export default ConfirmSwapStep;
