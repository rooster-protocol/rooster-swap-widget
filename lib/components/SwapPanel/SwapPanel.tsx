import { useEffect, useState } from "react";
import { CheckCircleOutline, Close as CloseIcon } from "@mui/icons-material";
import {
  Box,
  CardHeader,
  CircularProgress,
  Divider,
  IconButton,
  SxProps,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { ModalStep, Token } from "../../types";
import { floatToFixed } from "../../utils";
import { useDebounce } from "react-use";

import AssetInputCard from "../SwapPanel/AssetInputCard";
import ConfirmSwapCards from "./ConfirmSwapCards";

import SlippageSettingsPanel from "./SlippageSettingsPanel";

import { useGetUserTokenBalance } from "../../hooks/blockchain/useGetUserTokenBalance";
import { usePools } from "../../hooks/api/Rooster/usePools";
import { Address } from "viem";
import { Icon } from "../Icon/Icon";
import SwapDetails from "./SwapDetails";
import SwapVerify from "./SwapVerify";
import CommonCard from "../Common/CommonCard";
import CommonButton from "../Common/CommonButton";
import { CTAButton } from "../Modals/Steps/CTAButton";
import { ApproveTokenStep } from "../Modals/Steps/ApprovalStep";
import { StepperModalFrame } from "../Modals/Steps/StepperModalFrame";
import ConfirmSwapStep from "../Modals/Steps/ConfirmSwapStep";
import { useTokenPrice } from "../../hooks/useTokenPrice";
import { ChainContainer } from "../../containers";
import usePoolTokens from "../../hooks/api/Rooster/usePoolTokens";
import { useGasTokens } from "../../hooks/api/Rooster/useGasTokens";
import ConnectWalletButton from "../ConnectWalletButton";
import { useFindSwapPaths } from "../../hooks/api/Rooster/useFindSwapPaths";

type TokenName = "tokenA" | "tokenB";

interface SwapPanelProps {
  stylesCard?: SxProps<Theme>;
  tokenAId?: Address | "ETH";
  tokenBId?: Address | "ETH";
  handleConnectWallet: () => void;
}

export default function SwapPanel({
  stylesCard,
  tokenAId,
  tokenBId,
  handleConnectWallet,
}: SwapPanelProps) {
  const theme = useTheme();

  const { chainId, address } = ChainContainer.useContainer();

  const [tokenA, setTokenA] = useState<Token | undefined>();
  const [tokenB, setTokenB] = useState<Token | undefined>();

  const { tokens, isFetched: poolTokensFetched } = usePoolTokens();
  const tokensLoading = !poolTokensFetched;

  const GAS_SYMBOL = "ETH";

  const { tokens: gasTokens } = useGasTokens();

  // Default tokenA to the gas token
  useEffect(() => {
    const gasToken = gasTokens.find((t) => t.isGasToken);
    if (gasToken && !tokenA && !tokenB && !tokenAId) {
      setTokenA(gasToken);
    }
  }, [gasTokens]);

  // Whenever the chain or tokenBId changes, get the new token
  useEffect(() => {
    let token = tokens.find((e) => e?.isGasToken && tokenBId == GAS_SYMBOL);
    token =
      token ||
      tokens
        .filter((t) => t.symbol != GAS_SYMBOL)
        .find(
          (e) =>
            e?.address?.toLowerCase() === tokenBId?.toLowerCase() &&
            e?.chainId === chainId
        );
    if (
      token?.address.toLowerCase() != tokenB?.address.toLowerCase() ||
      token?.symbol != tokenB?.symbol
    ) {
      setTokenB(token);
    }
  }, [chainId, tokenBId, poolTokensFetched]);

  // Whenever the chain or tokenAId changes, get the new token
  useEffect(() => {
    let token = tokens.find((e) => e?.isGasToken && tokenAId == GAS_SYMBOL);
    token =
      token ||
      tokens
        .filter((t) => t.symbol != GAS_SYMBOL)
        .find((e) => e?.address === tokenAId && e?.chainId === chainId);

    if (token?.address != tokenA?.address || token?.symbol != tokenA?.symbol) {
      setTokenA(token);
    }
    //
  }, [chainId, tokenAId, poolTokensFetched]);

  // One variable to store the user's input and one to convert it to a number
  const [tokenAAmount, setTokenAAmount] = useState<number>(0);
  const [debouncedTokenAAmount, setDebouncedTokenAAmount] = useState<number>(0);
  const [isReady] = useDebounce(
    () => {
      setDebouncedTokenAAmount(tokenAAmount);
    },
    tokenAAmount == 0 ||
      (tokenA?.isGasToken && tokenB?.isWrappedGasToken) ||
      (tokenA?.isWrappedGasToken && tokenB?.isGasToken)
      ? 0
      : 600,
    [tokenAAmount]
  );

  const [tokenAInput, setTokenAInput] = useState<string>("");
  const [isTokenAMax, setIsTokenAMax] = useState<boolean>(false);
  const [inverted, setInverted] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState(0);
  const next = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    } else {
      console.log("No more steps!");
    }
  };
  const [priceImpact, setPriceImpact] = useState<number>(0);
  const [price, setPrice] = useState<number>(1);
  const [slippage, setSlippage] = useState<number>(1);

  const reserveAQuery = useGetUserTokenBalance(tokenA);

  const reserveA = reserveAQuery.balance;
  const reserveABN = reserveAQuery.balanceBN;

  const [buttonText, setButtonText] = useState<string>("");

  const { pools } = usePools({ chainId });

  const findSwapPathQuery = useFindSwapPaths(
    tokenA,
    tokenB,
    debouncedTokenAAmount
  );

  const verifying = false;
  const verified = false;
  const swapLoading =
    findSwapPathQuery.loading || (!isReady() && tokenAAmount > 0);
  const priceFound = !swapLoading && findSwapPathQuery.outputAmount > 0;
  const tokenBAmount = findSwapPathQuery.outputAmount;
  const path = findSwapPathQuery.path;
  const [confirmedPath, setConfirmedPath] =
    useState<(Address | boolean)[]>(path);
  const [confirmedTokenBAmount, setConfirmedTokenBAmount] =
    useState<number>(tokenBAmount);

  const [confirmedPrice, setConfirmedPrice] = useState<number>(price);

  const tokenAAmountBN = isTokenAMax
    ? reserveABN
    : floatToFixed(tokenAAmount, tokenA?.decimals);

  const onTxSuccess = () => {
    setIsLoading(false);
  };

  const onTxError = () => {
    setActiveStep(0);
    setIsLoading(false);
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { price: marketTokenAPrice } = useTokenPrice(tokenA);
  const { price: marketTokenBPrice } = useTokenPrice(tokenB);

  useEffect(() => {
    if (tokenA && tokenB) {
      if (BigInt(tokenA?.address) > BigInt(tokenB?.address)) {
        setInverted(true);
      } else {
        setInverted(false);
      }
    }
  }, [tokenA, tokenB]);

  // Reset amount values to 0 if you hit the swap button in the menu
  useEffect(() => {
    if (!tokenA) {
      setTokenAInput("");
    }
  }, [tokenA]);

  // Need to convert user input into a sanitized number for calculations
  useEffect(() => {
    if (!tokenAInput || tokenAInput == ".") {
      setTokenAAmount(0);
    } else {
      setTokenAAmount(parseFloat(tokenAInput));
    }
  }, [tokenAInput]);

  useEffect(() => {
    if (tokenA && tokenB && path.length > 0) {
      const _price =
        tokenAAmount && tokenBAmount && tokenBAmount != 0
          ? tokenAAmount / tokenBAmount
          : buttonText == "Wrap" || buttonText == "Unwrap"
          ? 1
          : 0;

      const marketPrice =
        marketTokenAPrice && marketTokenAPrice != 0
          ? (marketTokenBPrice || 0) / marketTokenAPrice
          : 0;

      setPrice(_price);

      const _priceImpact =
        marketPrice != 0 ? (_price - marketPrice) / marketPrice : -0;

      setPriceImpact(-_priceImpact);
    }
  }, [tokenAAmount, tokenBAmount, tokenA, tokenB, pools, path]);

  // Set button text
  useEffect(() => {
    const tokenARequiredBN = isTokenAMax
      ? reserveABN
      : floatToFixed(tokenAAmount, tokenA?.decimals);

    if (!tokenA || !tokenB) {
      setButtonText("Select a Pair");
    } else if (swapLoading) {
      setButtonText("loading");
    } else if (tokenAAmount == 0) {
      setButtonText("Enter an amount to swap");
    } else if (reserveABN < tokenARequiredBN) {
      setButtonText(`Insufficient ${tokenA?.symbol} Balance`);
    } else if (tokenA?.isGasToken && tokenB?.isWrappedGasToken) {
      setButtonText("Wrap");
    } else if (tokenA?.isWrappedGasToken && tokenB?.isGasToken) {
      setButtonText("Unwrap");
    } else if (path.length == 0 || tokenBAmount == 0) {
      setButtonText("Swap Not Available");
    } else {
      setButtonText(`Swap ${tokenA?.symbol}-${tokenB?.symbol}  `);
    }
  }, [
    tokenA,
    tokenB,
    tokenBAmount,
    tokenAAmount,
    reserveA,
    inverted,
    swapLoading,
    path.length,
    activeStep,
  ]);

  const resetValues = () => {
    setTokenAInput("");
    setActiveStep(0);
    setIsTokenAMax(false);
    setConfirmedPath([]);
  };

  const handleChangeAssetToken = (
    token: Token,
    fromTokenName: TokenName,
    fromToken: Token | undefined,
    toToken: Token | undefined
  ) => {
    if (fromTokenName == "tokenB") {
      setTokenB(token);
    } else {
      setTokenA(token);
    }
    if (
      token.address.toLowerCase() === (toToken && toToken.address.toLowerCase())
    ) {
      if (fromTokenName == "tokenB") {
        setTokenA(fromToken);
      } else {
        setTokenB(fromToken);
      }
    }
  };

  const swapCardUI = (
    <ConfirmSwapCards
      tokenB={tokenB}
      tokenA={tokenA as Token}
      tokenBAmount={confirmedTokenBAmount}
      tokenAAmount={tokenAAmount}
      onInputSelect={() => {
        if (!isLoading) {
          setActiveStep(0);
        }
      }}
    />
  );

  const swapDetailsUI = (
    <SwapDetails
      tokenA={tokenA}
      tokenB={tokenB}
      tokenAAmount={tokenAAmount}
      tokenBAmount={activeStep == 0 ? tokenBAmount : confirmedTokenBAmount}
      price={activeStep == 0 ? price : confirmedPrice}
      priceImpact={priceImpact}
      slippage={slippage}
      swapLoading={swapLoading}
      priceFound={priceFound}
    />
  );
  const steps: ModalStep[] = [
    {
      stepText: "Swap",
      hideStepper: true,
      body: (
        <Box display="flex" flexDirection="column" gap={1}>
          <AssetInputCard
            token={tokenA}
            tokens={tokens}
            loading={tokensLoading}
            amount={tokenAInput}
            balance={reserveA}
            onAmountChange={(newAmount: string) => {
              setTokenAInput(newAmount);
            }}
            onAssetChange={(token) => {
              handleChangeAssetToken(token, "tokenA", tokenA, tokenB);
            }}
            setMax={setIsTokenAMax}
            showPrice={true}
          />
          <Box position="relative">
            <Divider sx={{ my: 2.75 }} />
            <Box
              position="absolute"
              top="50%"
              left="50%"
              sx={{ transform: "translate(-50%, -50%)" }}>
              <CommonButton
                buttonType="neutral"
                styles={{
                  minWidth: "unset",
                  padding: 1,
                  "&:hover, &.Mui-disabled": {
                    background: "#131B28",
                  },
                }}
                disabled={tokenA === undefined && tokenB === undefined}
                onClick={() => {
                  setTokenAInput("");
                }}>
                <Icon type="switchVertical" size={20} />
              </CommonButton>
            </Box>
          </Box>
          <AssetInputCard
            token={tokenB}
            tokens={tokens}
            loading={tokensLoading}
            amount={
              !(tokenBAmount > 0) || !isReady() ? "-" : tokenBAmount.toString()
            }
            onAssetChange={(token) =>
              handleChangeAssetToken(token, "tokenB", tokenB, tokenA)
            }
            showPrice={true}
          />
        </Box>
      ),

      ctaButton: address ? (
        <CTAButton
          isLoading={isLoading || swapLoading}
          disabled={
            tokenAAmount == 0 ||
            tokenBAmount == 0 ||
            !(
              buttonText == "Wrap" ||
              buttonText == "Unwrap" ||
              buttonText.slice(0, 4) == "Swap"
            )
          }
          onClick={() => {
            setConfirmedPath(findSwapPathQuery.path);
            setConfirmedTokenBAmount(findSwapPathQuery.outputAmount);
            setConfirmedPrice(price);
            next();
          }}
          text={buttonText}
        />
      ) : (
        <ConnectWalletButton handleConnectWallet={handleConnectWallet} />
      ),
      footer: swapDetailsUI,
      iconAction: (
        <SlippageSettingsPanel
          slippage={slippage}
          onSlippageChange={(newSlippage) => {
            setSlippage(
              typeof newSlippage == "string"
                ? parseFloat(newSlippage)
                : newSlippage
            );
          }}
        />
      ),
    },
    ApproveTokenStep({
      body: swapCardUI,
      footer: swapDetailsUI,
      amount: tokenAAmount,
      approvalAddress: findSwapPathQuery.routerAddress,
      token: tokenA,
      isActive: activeStep == 1,
      onApproval: next,
      onTxError: () => setActiveStep(0),
    }),
    ...ConfirmSwapStep({
      tokenA,
      tokenB,
      path: activeStep == 0 ? path : confirmedPath,
      amountIn: isTokenAMax
        ? tokenAAmountBN
        : floatToFixed(tokenAAmount, tokenA?.decimals),
      amountOutMinimum:
        activeStep == 0
          ? floatToFixed(tokenBAmount / (1 + slippage / 100), tokenB?.decimals)
          : floatToFixed(
              confirmedTokenBAmount / (1 + slippage / 100),
              tokenB?.decimals
            ),
      body: swapCardUI,
      footer: swapDetailsUI,
      isActive: activeStep > 1,
      next,
      onTxSuccess,
      onTxError,
      onTxFinalized: resetValues,
    }),
  ];

  const currentStep = steps[activeStep];

  console.log("STEPS", activeStep, currentStep);

  return (
    <>
      <CommonCard
        styles={{
          pt: { xs: 0, md: 3 },
          pb: 4,
          px: { xs: 0, md: 4 },
          border: {
            xs: "none",
            md: `1px solid ${theme.borders.secondary}`,
          },
          ...stylesCard,
        }}>
        <CardHeader
          sx={{ pt: 0, pb: 0.75, px: 0 }}
          title={
            currentStep.iconAction ? (
              <Box display="flex" gap={0.5} alignItems="center">
                <Typography variant="caption">
                  {currentStep.stepText}
                </Typography>
                {currentStep.iconAction}
              </Box>
            ) : (
              currentStep.stepText
            )
          }
          titleTypographyProps={{ variant: "caption" }}
          action={
            !currentStep.iconAction && (
              <IconButton
                aria-label="close"
                sx={{ p: 0.5 }}
                onClick={() => {
                  if (!isLoading) {
                    setActiveStep(0);
                  }
                }}>
                <CloseIcon sx={{ width: 20, height: 20 }} />
              </IconButton>
            )
          }
        />
        {verifying || verified ? (
          <SwapVerify
            icon={
              verifying ? (
                <CircularProgress size={"128px"} sx={{ color: "#D9D9D9" }} />
              ) : (
                <CheckCircleOutline
                  sx={{
                    width: "128px",
                    height: "128px",
                    color: "rgba(38, 189, 0, 1)",
                  }}
                />
              )
            }
            text={verifying ? "Verifying..." : "Verified!"}
          />
        ) : (
          <Box display="grid" gridTemplateRows="auto" rowGap={1}>
            <StepperModalFrame steps={steps} activeStep={activeStep} />
          </Box>
        )}
      </CommonCard>
    </>
  );
}
