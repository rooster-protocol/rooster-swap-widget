import {
  Step as MuiStep,
  StepLabel as MuiStepLabel,
  styled,
} from "@mui/material";
import { Icon } from "../../Icon/Icon";

const StepIcon = ({
  active,
  completed,
  size = 24,
}: {
  active?: boolean;
  completed?: boolean;
  size?: number;
}) => {
  if (completed) {
    return <Icon size={size} type="checkCompleted" />;
  } else if (active) {
    return <Icon size={size} type="checkActive" />;
  } else {
    return <Icon size={size} type="checkNonActive" />;
  }
};

const Step = styled(MuiStep)(
  ({ theme }) => `
  & {
    padding-left: 13px;
    padding-right: 13px;
  }

  & .MuiStepConnector-root {
    left: calc(-50% + 12px);
    right: calc(50% + 12px);
  }

  & .MuiStepConnector-line {
    border-color: rgba(255, 255, 255, 0.16);
  }

  & .MuiStepConnector-line.MuiStepConnector-lineHorizontal {
    border-top-width: 2px;
  }

  & .Mui-active {
    & .MuiStepConnector-line.MuiStepConnector-lineHorizontal {
      border-color: ${theme.palette.primary.main};
    }
  }

  & .MuiStepLabel-root {
    & .MuiStepLabel-label {
      margin-top: 5px;
    }
  }
`
);

const StepLabel = styled(MuiStepLabel)``;

export { Step, StepIcon, StepLabel };
