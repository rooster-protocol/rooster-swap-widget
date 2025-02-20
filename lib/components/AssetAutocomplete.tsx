import { Search as SearchIcon } from "@mui/icons-material";
import {
  Box,
  InputAdornment,
  Typography,
  Stack,
  UseAutocompleteProps,
  useAutocomplete,
  TextField,
} from "@mui/material";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import { styled, useTheme } from "@mui/material/styles";
import { Token, TokenBalance } from "../types";
import { TokenIcon } from "./Icon/TokenIcon";
import TokensSkeleton from "./Skeleton/TokenSkeleton";
import TokenBalanceNumber from "./TokenBalanceNumber";

const Root = styled("div")(
  ({ theme }) => `
  color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,.85)"
  };
  font-size: 14px;
`
);

const Listbox = styled("ul")(
  ({ theme }) => `
  margin: 8px 0 0;
  padding: 0;
  // position: absolute;
  list-style: none;
  // background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  overflow: auto;
  max-height: 285px;
  border-radius: 4px;
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.borders.primary};
    border-radius: 9999px;
  }

  & li {
    padding: 12px 16px 12px 8px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === "dark" ? "#2b2b2b" : "#fafafa"};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`
);

const StyledImported = styled("span")`
  padding: 4px 6px;
  border-radius: 4px;
  border: 1px solid #9000ff;
  font-size: 12px;
  line-height: 120%;
  color: #fff;
  height: 22px;
  display: flex;
  align-items: center;
`;

export interface AssetAutocompleteProps
  extends Omit<UseAutocompleteProps<Token, false, true, true>, "options"> {
  tokens: Token[];
  loading: boolean;
}

export default function AssetAutocomplete({
  tokens,
  loading,
  onChange,
}: AssetAutocompleteProps) {
  const theme = useTheme();
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "customized-hook-demo",
    open: true,
    options: tokens.filter((t) => !t.unlisted || t.isLocal),
    getOptionLabel: (token) =>
      typeof token == "string" ? token : token.address,
    freeSolo: true,
    onChange: (e, value, reason) => {
      e.preventDefault();
      if (onChange && value) {
        onChange(e, value, reason);
      }
    },
    filterOptions: (options, state) => {
      const { inputValue } = state;

      if (inputValue.length < 3) {
        return options.filter(
          (o) =>
            (!o.isLocal || (o.isLocal && o.isImported)) &&
            (o.address.toLowerCase() == inputValue.toLowerCase() ||
              o.symbol.match(new RegExp(inputValue, "i")))
        );
      }

      return options.filter((o) => {
        let matches =
          o.address.toLowerCase() == inputValue.toLowerCase() ||
          !!o.symbol.match(new RegExp(inputValue, "i"));
        matches =
          matches &&
          (!o.isLocal ||
            (!!o.isLocal && !!o.isImported) ||
            (!!o.isLocal &&
              o.address.toLowerCase() == inputValue.toLowerCase()));
        return matches;
      });
    },
  });

  return (
    <Root>
      <div {...getRootProps()}>
        <TextField
          placeholder="Symbol or address..."
          inputProps={{ ...getInputProps() }}
          sx={{
            width: "100%",
            ".MuiInputBase-root": { height: "44px" },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "rgba(255, 255, 255, 0.64)" }} />
              </InputAdornment>
            ),
          }}
        />
      </div>
      {!loading ? (
        <Listbox {...getListboxProps()}>
          {(groupedOptions as TokenBalance[]).map((option, index) => {
            const address = option.address;
            return (
              <Box
                component={"li"}
                {...getOptionProps({ option, index })}
                key={index}
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                justifyContent="space-between"
                alignItems="center">
                <Stack alignItems="center" direction="row" spacing={1}>
                  <TokenIcon token={option} size={40} />
                  <Stack direction="column" spacing={0}>
                    <Box display="flex" alignItems="center" gap="7px">
                      <Typography
                        variant="body1"
                        fontWeight={600}
                        color={theme.palette.text.primary}
                        textAlign="left">
                        {option.symbol}
                      </Typography>
                      {option.isImported && (
                        <StyledImported>Imported</StyledImported>
                      )}
                    </Box>
                    <Typography
                      variant="subtitle2"
                      fontWeight={400}
                      textTransform="capitalize"
                      textAlign="left">
                      {option.name}{" "}
                    </Typography>
                    {option.isGasToken ? (
                      <></>
                    ) : (
                      <Typography
                        variant="subtitle2"
                        fontWeight={400}
                        textTransform="uppercase"
                        textAlign="left">
                        {`${address.substring(0, 5)}...${address.substring(
                          37,
                          42
                        )}`}
                      </Typography>
                    )}
                  </Stack>
                </Stack>

                <Stack direction="column" spacing={0}>
                  <Typography
                    variant="subtitle2"
                    fontWeight={400}
                    textTransform="uppercase"
                    textAlign="right">
                    <TokenBalanceNumber token={option} />
                  </Typography>
                </Stack>
              </Box>
            );
          })}
        </Listbox>
      ) : (
        <TokensSkeleton />
      )}
    </Root>
  );
}
