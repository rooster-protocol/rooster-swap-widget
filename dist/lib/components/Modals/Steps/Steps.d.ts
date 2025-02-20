declare const StepIcon: ({ active, completed, size, }: {
    active?: boolean;
    completed?: boolean;
    size?: number;
}) => import("react/jsx-runtime").JSX.Element;
declare const Step: import('@emotion/styled').StyledComponent<import('@mui/material').StepOwnProps & import('@mui/material/OverridableComponent').CommonProps & Omit<Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | import('react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('react').RefObject<HTMLDivElement> | null | undefined;
}, "style" | "className" | "classes" | "children" | "sx" | "disabled" | "expanded" | "last" | "active" | "index" | "completed"> & import('@mui/system').MUIStyledCommonProps<import('@mui/material').Theme>, {}, {}>;
declare const StepLabel: import('@emotion/styled').StyledComponent<import('@mui/material').StepLabelProps & import('@mui/system').MUIStyledCommonProps<import('@mui/material').Theme>, {}, {}>;
export { Step, StepIcon, StepLabel };
