import { ButtonProps, SxProps, Theme } from '@mui/material';
interface TProps extends ButtonProps {
    text?: string;
    buttonType: "secondary" | "outlined" | "neutral" | "tertiary" | "text";
    styles?: SxProps<Theme>;
}
declare const CommonButton: ({ text, buttonType, styles, children, size, fullWidth, ...props }: TProps) => import("react/jsx-runtime").JSX.Element;
export default CommonButton;
