interface AlertProp {
    message: string;
    onClose?: () => void;
    type: string;
    title: string;
}
declare const Alert: import('react').ForwardRefExoticComponent<AlertProp & import('react').RefAttributes<HTMLDivElement>>;
export default Alert;
