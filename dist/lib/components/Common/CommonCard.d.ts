import { CardProps, SxProps, Theme } from '@mui/material';
interface TProps extends CardProps {
    styles?: SxProps<Theme>;
}
declare function CommonCard(props: TProps): import("react/jsx-runtime").JSX.Element;
export default CommonCard;
