import { CheckCircleOutline, InfoOutlined } from "@mui/icons-material";
import { Box, CircularProgress, Typography, styled } from "@mui/material";
import CommonTooltip from "../Common/CommonTooltip";
import Number from "../Formatters/Number";
import { Token } from "../../types";

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

const StyledRow = styled(Box)(
  () => `
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`
);

const StyledText = styled(Typography)(
  () => `
  font-size: 14px;
`
);

function SwapDetails(props: TProps) {
  const {
    price,
    swapLoading = false,
    tokenA,
    tokenB,
    tokenAAmount,
    tokenBAmount,
    slippage,
    priceFound,
    priceImpact,
  } = props;

  if (!tokenA || !tokenB || tokenAAmount == 0 || tokenBAmount == 0) {
    return <></>;
  }

  return (
    <Box display="grid" gap={1.25}>
      <StyledRow>
        <StyledText>Price</StyledText>
        <StyledRow>
          <StyledText>
            {priceFound ? price : "-"} {tokenA?.symbol} per {tokenB?.symbol}
          </StyledText>
          <CommonTooltip
            title={
              swapLoading
                ? "Looking for the best price..."
                : "Best price found!"
            }>
            <Box height={20}>
              {swapLoading ? (
                <CircularProgress size={"14px"} sx={{ color: "#D9D9D9" }} />
              ) : (
                <CheckCircleOutline
                  sx={{
                    width: "20px",
                    height: "20px",
                    color: "rgba(38, 189, 0, 1)",
                  }}
                />
              )}
            </Box>
          </CommonTooltip>
        </StyledRow>
      </StyledRow>
      {!(
        (tokenA?.isGasToken && tokenB?.isWrappedGasToken) ||
        (tokenA?.isWrappedGasToken && tokenB?.isGasToken)
      ) && (
        <>
          <StyledRow>
            <StyledRow>
              <StyledText
                color={
                  !swapLoading && priceImpact < -0.25
                    ? "error.main"
                    : "text.primary"
                }>
                Price Impact
              </StyledText>
              <CommonTooltip title="The impact of your swap on the pool's price relative to the market price.">
                <InfoOutlined sx={{ height: "16px", width: "16px" }} />
              </CommonTooltip>
            </StyledRow>
            <StyledText
              color={
                !swapLoading && priceImpact < -0.25
                  ? "error.main"
                  : "text.primary"
              }>
              {!swapLoading ? (
                <Number
                  value={priceImpact}
                  preset="percent"
                  sx={{ display: "inline" }}
                />
              ) : (
                <Typography sx={{ display: "inline" }}>-</Typography>
              )}{" "}
            </StyledText>
          </StyledRow>
          <StyledRow>
            <StyledText>Minimum Received</StyledText>
            <StyledText>
              {tokenBAmount >= 0 ? (
                <Number
                  value={tokenBAmount / (1 + slippage / 100)}
                  preset="number"
                  sx={{ display: "inline" }}
                />
              ) : (
                <Typography sx={{ display: "inline" }}>-</Typography>
              )}{" "}
              {tokenB?.symbol}
            </StyledText>
          </StyledRow>
        </>
      )}
    </Box>
  );
}

export default SwapDetails;
