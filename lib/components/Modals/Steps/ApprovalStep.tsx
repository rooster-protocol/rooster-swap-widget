import { useEffect, useState } from "react";
import { Token } from "../../../types";
import { allowanceScaleCheck, floatToFixed } from "../../../utils";
import { Address } from "viem";
import { CTAButton } from "./CTAButton";
import { useGetUserTokenAllowance } from "../../../hooks/blockchain/useGetUserAllowance";
import { useGetUserTokenBalance } from "../../../hooks/blockchain/useGetUserTokenBalance";
import { useGetUserApproval } from "../../../hooks/blockchain/useGetUserApproval";
import Allowance from "../../Formatters/Allowance";

interface TProps {
  amount: number;
  token: Token | undefined;
  isActive: boolean;
  body: JSX.Element;
  footer?: JSX.Element;
  approvalAddress: Address | undefined;
  onTxError: () => void;
  onApproval: () => void;
  disabled?: boolean;
}

export const ApproveTokenStep = ({
  amount,
  token,
  isActive,
  body,
  footer,
  approvalAddress,
  onTxError,
  onApproval,
  disabled,
}: TProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const tokenAllowanceQuery = useGetUserTokenAllowance(token, approvalAddress);

  const { balanceBN: tokenBalanceBN } = useGetUserTokenBalance(token);

  const tokenApprovalQuery = useGetUserApproval(
    disabled ? undefined : approvalAddress,
    token,
    () => {
      setTimeout(() => setIsLoading(false), 500);
    },
    onTxError
  );

  useEffect(() => {
    if (isActive) {
      const tokenAScaleBN = floatToFixed(
        allowanceScaleCheck(amount),
        token?.decimals
      );

      const minABalance =
        tokenAScaleBN >= tokenBalanceBN ? tokenBalanceBN : tokenAScaleBN;

      if (tokenAllowanceQuery.allowanceBN >= minABalance) {
        onApproval();
      }
    }
  }, [
    tokenAllowanceQuery.isFetched,
    tokenAllowanceQuery.allowanceBN,
    token,
    amount,
    tokenBalanceBN,
    isActive,
  ]);

  return {
    stepText: `Approve ${token?.symbol}`,
    body: (
      <>
        {body}
        <Allowance
          allowance={tokenAllowanceQuery.allowance}
          amount={amount}
          symbol={token?.symbol}
        />
      </>
    ),
    footer,
    ctaButton: (
      <CTAButton
        isLoading={isLoading}
        onClick={async () => {
          setIsLoading(true);
          try {
            await tokenApprovalQuery.executeAsync?.();
          } catch {
            console.log("Approval Execution Error");
            setIsLoading(false);
          }
        }}
        text={`Approve ${token?.symbol}`}
      />
    ),
  };
};
