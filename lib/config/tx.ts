import { TxType } from "../types";

export const confirmMessages: Record<
  TxType,
  { title: string; subtext: string }
> = {
  preInit: {
    title: "Preparing Transaction",
    subtext: "Your transaction is being prepared.",
  },
  simulating: {
    title: "Simulating Transaction",
    subtext: "Your transaction is being checked for errors.",
  },
  simulated: {
    title: "Simulation Succesfful",
    subtext: "Your transaction has been successfully simulated.",
  },
  signing: {
    title: "Waiting for Confirmation",
    subtext: "Confirm this transaction in your wallet.",
  },
  signed: {
    title: "Transaction Signed",
    subtext:
      "Your transaction has been signed and is being submitted to the blockchain.",
  },
  submitted: {
    title: "Transaction Submitted",
    subtext: "Your transaction has been submitted to the blockchain.",
  },
  confirmed: {
    title: "Transaction Approved!",
    subtext: "Your transaction has been successfully approved.",
  },
};
