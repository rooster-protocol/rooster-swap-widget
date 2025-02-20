import { default as React } from 'react';
import { Token } from '../../types';
interface ConfirmSwapCardsProps {
    tokenB?: Token;
    tokenA: Token | undefined;
    tokenBAmount?: number;
    tokenAAmount: number;
    onInputSelect?: any;
    hideIcon?: boolean;
}
declare const ConfirmSwapCards: React.NamedExoticComponent<ConfirmSwapCardsProps>;
export default ConfirmSwapCards;
