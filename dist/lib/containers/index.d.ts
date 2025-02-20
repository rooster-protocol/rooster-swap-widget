import { default as React } from 'react';
import { ChainContainer } from './ChainContainer';
import { StateContainer } from './StateContainer';
interface Props {
    children: React.ReactNode;
    handleToast: ({ title, type, message, }: {
        title: string;
        type: "error" | "success" | "warning";
        message: string;
    }) => void;
}
declare const Container: ({ children, handleToast }: Props) => JSX.Element;
export { ChainContainer, StateContainer };
export default Container;
