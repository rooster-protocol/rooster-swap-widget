import { noop } from "lodash";
import { createContainer } from "unstated-next";

const ConfigState = (
  initialState: {
    handleToast: ({
      title,
      type,
      message,
    }: {
      title: string;
      type: "error" | "success" | "warning";
      message: string;
    }) => void;
  } = { handleToast: noop }
) => {
  return initialState;
};

export const StateContainer = createContainer(ConfigState);
