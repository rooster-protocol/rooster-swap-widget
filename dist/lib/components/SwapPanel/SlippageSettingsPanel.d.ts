interface SettingsPanelProps {
    slippage: number | string;
    onSlippageChange: (value: number) => void;
    deadline?: number | string;
    onDeadlineChange?: (value: number) => void;
}
export default function SlippageSettingsPanel({ slippage, onSlippageChange, deadline, onDeadlineChange, }: SettingsPanelProps): import("react/jsx-runtime").JSX.Element;
export {};
