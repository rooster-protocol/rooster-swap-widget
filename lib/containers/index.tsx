import React from "react";
import { ChainContainer } from "./ChainContainer";
import { StateContainer } from "./StateContainer";

interface Props {
  children: React.ReactNode;
  handleToast: ({
    title,
    type,
    message,
  }: {
    title: string;
    type: "error" | "success" | "warning";
    message: string;
  }) => void;
}

const Container = ({ children, handleToast }: Props): JSX.Element => {
  return (
    <ChainContainer.Provider>
      <StateContainer.Provider initialState={{ handleToast }}>
        {children}
      </StateContainer.Provider>
    </ChainContainer.Provider>
  );
};

export { ChainContainer, StateContainer };

export default Container;
