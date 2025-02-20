import { Token } from '../../types';
interface TProps {
    price?: number;
    swapLoading?: boolean;
    tokenA?: Token;
    tokenB?: Token;
    tokenAAmount: number;
    tokenBAmount: number;
    slippage: number;
    priceFound: boolean;
    priceImpact: number;
}
declare function SwapDetails(props: TProps): import("react/jsx-runtime").JSX.Element;
export default SwapDetails;
