import { MoneyValue } from "./utils";
import { Token } from "./index";
import { Address } from "viem";

export interface RawPool {
  apiVersion: number;
  chainId: number;
  id: Address;
  address: Address;
  tickSpacing: number;
  lookback: number;
  feeAIn: number;
  feeBIn: number;
  kinds: number;
  width: number;
  numberOfBins: number;
  activeTick: number;
  tokenAAddress: Address;
  tokenBAddress: Address;
}

export interface Pool extends Omit<RawPool, "tokenAAddress" | "tokenBAddress"> {
  name: string;
  tokenA: Token;
  tokenB: Token;
  tvl: MoneyValue;
  price: number;
  subgraphPrice: number;
  reserveA: number;
  reserveB: number;
  twa: number;
  twaPrice: number;
}
