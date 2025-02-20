import { TxType } from "../types";

export const txIsLoading = (txState: TxType) => {
  const txIsIdle =
    txState == "preInit" || txState == "simulating" || txState == "simulated";

  return !txIsIdle;
};

export const getTxButtonText = (
  txState: TxType,
  buttonTextValues:
    | {
        initialText: string;
        confirmingText: string;
        confirmedText: string;
      }
    | undefined
) => {
  const txPending = txState == "signing";
  const txAwaitingConfirmation = txState == "signed" || txState == "submitted";

  const initialText = buttonTextValues
    ? buttonTextValues.initialText
    : "Confirm";

  const confirmingText = buttonTextValues
    ? `${buttonTextValues.confirmingText}...`
    : "Confirming...";

  const confirmedText = buttonTextValues
    ? `${buttonTextValues.confirmedText}!`
    : "Confirmed!";

  if (!txIsLoading(txState)) {
    return initialText;
  } else if (txPending || txAwaitingConfirmation) {
    return confirmingText;
  } else {
    return confirmedText;
  }
};
