import React, { useState } from "react";
import { Close as CloseIcon } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Fade,
  IconButton,
  InputAdornment,
  Popper,
  Typography,
} from "@mui/material";
import { TooltipIcon } from "../Icon/TooltipIcon";

import { displayNumber, makeStringNumeric } from "../../utils";
import CommonButton from "../Common/CommonButton";
import CommonInput from "../Common/CommonInput";
import { Icon } from "../Icon/Icon";

interface SettingsPanelProps {
  slippage: number | string;
  onSlippageChange: (value: number) => void;
  deadline?: number | string;
  onDeadlineChange?: (value: number) => void;
}

export default function SlippageSettingsPanel({
  slippage,
  onSlippageChange,
  deadline,
  onDeadlineChange,
}: SettingsPanelProps) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const defaultSlippage =
    typeof slippage == "number" ? displayNumber(slippage, "input") : slippage;

  const [tempSlippage, setTempSlippage] = useState<string>(defaultSlippage);
  const [slippageError, setSlippageError] = useState<boolean>(false);
  const [slippageHelperText, setSlippageHelperText] = useState<string>("");

  const defaultDeadline = deadline
    ? typeof deadline == "number"
      ? deadline.toString()
      : deadline
    : "30";

  const [tempDeadline, setTempDeadline] = useState<string>(defaultDeadline);
  const [deadlineError, setDeadlineError] = useState<boolean>(false);
  const [deadlineHelperText, setDeadlineHelperText] = useState<string>("");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setTempDeadline(defaultDeadline);
    setTempSlippage(defaultSlippage);
    setOpen((previousOpen) => !previousOpen);
    setSlippageError(false);
    setSlippageHelperText("");
    setDeadlineError(false);
    setDeadlineHelperText("");
  };

  const handleSettingSave = () => {
    if (parseFloat(tempSlippage) > 0 && parseFloat(tempDeadline) >= 1) {
      setSlippageError(false);
      setDeadlineError(false);
      onSlippageChange(parseFloat(tempSlippage));
      onDeadlineChange && onDeadlineChange(parseFloat(tempDeadline));
      setOpen(false);
    } else if (!(parseFloat(tempSlippage) > 0)) {
      setSlippageError(true);
      setDeadlineError(false);
    } else {
      setSlippageError(false);
      setDeadlineError(true);
    }
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <div>
      <IconButton
        sx={{ padding: 0.5 }}
        aria-label="settings"
        aria-describedby={id}
        onClick={handleClick}>
        <Icon type="tune" size={20} />
      </IconButton>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        placement="auto-start"
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [10, 30],
              },
            },
          ],
        }}>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Card
              sx={{
                width: 275,
                border: "1px solid rgba(255, 255, 255, 0.16)",
                p: 0,
              }}>
              <CardHeader
                title="Transaction Settings"
                titleTypographyProps={{ variant: "h3" }}
                action={
                  <IconButton
                    onClick={() => setOpen((previousOpen) => !previousOpen)}>
                    <CloseIcon />
                  </IconButton>
                }
                sx={{ pl: 2.75, pr: 2.75, pt: 3, pb: 2 }}
              />
              <CardContent sx={{ padding: "0 22px 24px" }}>
                <CommonInput
                  value={tempSlippage}
                  onChange={(
                    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
                  ) => {
                    const out = makeStringNumeric(e.target.value);
                    setTempSlippage(out);

                    if (parseFloat(out) > 0) {
                      setSlippageHelperText("");
                      setSlippageError(false);
                    } else {
                      setSlippageHelperText("Slippage must be greater than 0");
                    }
                  }}
                  error={slippageError}
                  helperText={slippageHelperText}
                  sx={{ mb: 1.875 }}
                  label={
                    <Box display="flex" alignItems="center" gap={0.5}>
                      <Typography fontSize={14} fontWeight={400}>
                        Transaction Slippage
                      </Typography>
                      <TooltipIcon title="Your transaction will be cancelled if the price changes unfavorably by more than this percentage after you submit it." />
                    </Box>
                  }
                  InputProps={{
                    sx: {
                      "& input": {
                        textAlign: "right",
                      },
                    },
                    notched: false,
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ pointerEvents: "none" }}>
                        %
                      </InputAdornment>
                    ),
                  }}
                />
                {deadline && (
                  <CommonInput
                    value={tempDeadline}
                    onChange={(
                      e: React.ChangeEvent<
                        HTMLTextAreaElement | HTMLInputElement
                      >
                    ) => {
                      const out = makeStringNumeric(e.target.value);
                      setTempDeadline(out);

                      if (parseFloat(out) >= 1) {
                        setDeadlineHelperText("");
                        setDeadlineError(false);
                      } else {
                        setDeadlineHelperText(
                          "Deadline must be at least 1 minute."
                        );
                      }
                    }}
                    error={deadlineError}
                    helperText={deadlineHelperText}
                    sx={{ mb: 3 }}
                    label={
                      <Box display="flex" alignItems="center" gap={0.5}>
                        <Typography fontSize={14} fontWeight={400}>
                          Transaction Deadline
                        </Typography>
                        <TooltipIcon title="Your transaction will be cancelled if it's not confirmed within the deadline." />
                      </Box>
                    }
                    InputProps={{
                      notched: false,
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          style={{ pointerEvents: "none" }}>
                          minutes
                        </InputAdornment>
                      ),
                      sx: {
                        "& input": {
                          textAlign: "right",
                        },
                      },
                    }}
                    InputLabelProps={{
                      shrink: true,
                      sx: {
                        position: "inherit",
                        transform: "none",
                        fontSize: "body2.fontSize",
                        color: "text.primary",
                        mb: 1,
                      },
                    }}
                  />
                )}

                <CommonButton
                  text="Save"
                  buttonType="secondary"
                  onClick={handleSettingSave}
                />
              </CardContent>
            </Card>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
