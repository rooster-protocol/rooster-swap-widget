import { BoxProps } from '@mui/material';
import { preset } from '../../utils/numberFormat';
export interface NumberProps extends Omit<BoxProps, "style"> {
    value: number;
    fontSize?: "large" | "medium" | string;
    classes?: any;
    format?: Intl.NumberFormatOptions;
    locale?: string;
    type?: "limit" | "default" | "exact";
    preset?: preset;
    showToolTip?: boolean;
}
export default function Number({ value, format, locale, type, preset, showToolTip, ...rest }: NumberProps): JSX.Element;
