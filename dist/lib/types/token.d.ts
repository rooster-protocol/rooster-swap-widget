import { Address } from 'viem';
import { MoneyValue } from './utils';
export interface Token {
    name: string;
    symbol: string;
    chainId: number;
    address: Address;
    logoURI?: string;
    decimals: number;
    isGasToken?: boolean;
    isWrappedGasToken?: boolean;
    isMavToken?: boolean;
    lstAPR?: number;
    color?: string;
    approved?: boolean;
    poolId?: Address;
    priceId?: string;
    price?: number;
    price_usd?: number;
    disabled?: boolean;
    unlisted?: boolean;
    minimumAmount?: number;
    inPool?: boolean;
    veTokenAddress?: Address;
    incentiveMatcher?: Address;
    isLocal?: boolean;
    isImported?: boolean;
}
export interface TokenBalance extends Token {
    tokenBalance: number;
    tokenValue: MoneyValue;
}
