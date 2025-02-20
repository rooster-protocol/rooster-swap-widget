export type TxType = "preInit" | "simulating" | "simulated" | "signing" | "signed" | "submitted" | "confirmed";
export interface ModalStep {
    stepText: string;
    ctaButton?: JSX.Element;
    body?: JSX.Element;
    footer?: JSX.Element;
    iconAction?: JSX.Element;
    hideStepper?: boolean;
}
