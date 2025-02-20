import { Token } from "../types";
import Number from "./Formatters/Number";
import { useBalance } from "wagmi";
import { getAddress } from "viem";
import { fixedToFloat } from "../utils";
import { ChainContainer } from "../containers";

interface TokenBalanceNumberProps {
  token: Token;
}

export default function TokenBalanceNumber({ token }: TokenBalanceNumberProps) {
  const { address, chainId } = ChainContainer.useContainer();

  const result = useBalance({
    chainId: chainId,
    address: address,
    token: token.isGasToken ? undefined : getAddress(token.address),
  });

  if (result.data) {
    return (
      <Number
        value={fixedToFloat(result.data.value, token.decimals)}
        preset="tooltip"
        type="limit"
        display="inline-flex"
      />
    );
  }
}
