import { Stepper } from "@mui/material";
import { Step, StepIcon, StepLabel } from "./Steps";
import { ModalStep } from "../../../types";

export const StepperModalFrame = ({
  steps,
  activeStep,
}: {
  steps: ModalStep[];
  activeStep: number;
}) => {
  const currentStep = steps[activeStep];

  const stepperSteps = steps.filter((step) => !step.hideStepper);
  const numberNoStepperSteps = steps.length - stepperSteps.length;
  const relativeStepNumber = activeStep - numberNoStepperSteps;

  return (
    <>
      {!currentStep?.hideStepper && (
        <Stepper activeStep={relativeStepNumber} alternativeLabel>
          {steps
            .filter((step) => !step.hideStepper)
            .map((step) => {
              return (
                <Step key={step.stepText}>
                  <StepLabel StepIconComponent={StepIcon}>
                    {step.stepText}
                  </StepLabel>
                </Step>
              );
            })}
        </Stepper>
      )}

      {currentStep.body}

      {currentStep.ctaButton}

      {currentStep.footer}
    </>
  );
};
