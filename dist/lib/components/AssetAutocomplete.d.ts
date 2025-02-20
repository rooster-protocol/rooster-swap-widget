import { UseAutocompleteProps } from '@mui/material';
import { Token } from '../types';
export interface AssetAutocompleteProps extends Omit<UseAutocompleteProps<Token, false, true, true>, "options"> {
    tokens: Token[];
    loading: boolean;
}
export default function AssetAutocomplete({ tokens, loading, onChange, }: AssetAutocompleteProps): import("react/jsx-runtime").JSX.Element;
