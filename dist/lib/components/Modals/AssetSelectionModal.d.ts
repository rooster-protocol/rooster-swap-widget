import { Token } from '../../types';
import { BaseModalProps } from './BaseModal';
interface AssetSelectionModalProps extends BaseModalProps {
    onClose: (asset?: Token) => void;
    tokens: Token[];
    loading: boolean;
}
export declare const AssetSelectionModal: ({ onClose, open, tokens, loading, }: AssetSelectionModalProps) => import("react/jsx-runtime").JSX.Element;
export {};
