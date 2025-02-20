import { Box, SxProps, Theme } from "@mui/material";
import CommonTooltip from "../../Common/CommonTooltip";
import CommonButton from "../../Common/CommonButton";
import Sine from "../../SineWaveTwo";

export const CTAButton = ({
  onClick,
  isLoading,
  disabled,
  text,
  tooltip,
  styles,
}: {
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  text: string;
  tooltip?: string;
  styles?: SxProps<Theme>;
}) => {
  return (
    <CommonTooltip title={tooltip}>
      <Box>
        <CommonButton
          buttonType="secondary"
          onClick={onClick}
          disabled={disabled || isLoading}
          styles={styles}>
          {isLoading ? (
            <Box width="50px" height="100%">
              <Sine />
            </Box>
          ) : (
            text
          )}
        </CommonButton>
      </Box>
    </CommonTooltip>
  );
};
