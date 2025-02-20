import { formatUnits, parseUnits } from "viem";

export const displayDate = (
  inputVal: number,
  locale: string | undefined = "en-us"
) => {
  const date: Date = new Date(inputVal * 1000);

  return date.toLocaleString(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export type preset =
  | "input"
  | "tooltip"
  | "percent"
  | "currency"
  | "number"
  | "full"
  | "fullPercent";

export const numberPresets = (
  val: number,
  preset?: preset
): Intl.NumberFormatOptions => {
  switch (preset) {
    case "input":
      return {
        notation: "standard",
        minimumSignificantDigits: 5,
        maximumSignificantDigits: 10,
        useGrouping: false,
      };
    case "number":
      if (Math.abs(val) < 1) {
        return {
          maximumSignificantDigits: 2,
          minimumSignificantDigits: 2,
          notation: "compact",
        };
      } else {
        return {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
          notation: "compact",
        };
      }
    case "full":
      if (Math.abs(val) < 1) {
        return {
          maximumSignificantDigits: 10,
          minimumSignificantDigits: 2,
          notation: "compact",
        };
      } else if (Math.abs(val) < 1000000) {
        return {
          maximumSignificantDigits: 8,
          minimumSignificantDigits: 2,
          useGrouping: true,
        };
      } else {
        return {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          useGrouping: true,
        };
      }
    case "fullPercent":
      if (Math.abs(val) < 1000) {
        return {
          maximumSignificantDigits: 8,
          minimumSignificantDigits: 2,
          style: "percent",
        };
      } else {
        return {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          useGrouping: true,
          style: "percent",
        };
      }
    case "tooltip":
      if (Math.abs(val) > 2) {
        return {
          notation: "compact",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        };
      } else {
        return {
          notation: "compact",
          minimumSignificantDigits: 5,
          maximumSignificantDigits: 5,
        };
      }
    case "currency":
      return {
        notation: "compact",
        style: "currency",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      };
    case "percent":
      if (Math.abs(val) < 0.0001 && val != 0) {
        return {
          style: "percent",
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        };
      } else {
        return {
          style: "percent",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        };
      }
    default:
      if (Math.abs(val) < 2) {
        return {
          notation: "compact",
          minimumSignificantDigits: 3,
          maximumSignificantDigits: 3,
        };
      } else {
        return { maximumFractionDigits: 2 };
      }
  }
};

export const displayNumber = (
  val: number,
  preset?: preset,
  currency?: string,
  locale = "en-US"
) => {
  const MIN_VAL = 0.0000000001;
  const MIN_PERCENT = 0.00001;

  if (val == 0) {
    switch (preset) {
      case "currency":
        return "$0.00";
      case "fullPercent":
      case "percent":
        return "0.0%";
      default:
        return "0.0";
    }
  } else if (preset == "input" && val < MIN_VAL) {
    return `<${MIN_VAL.toLocaleString(locale, {
      useGrouping: true,
      maximumSignificantDigits: 3,
    })}`;
  } else if (preset == "percent" && val < MIN_PERCENT) {
    return `<${MIN_PERCENT.toLocaleString(locale, {
      useGrouping: true,
      maximumSignificantDigits: 3,
      style: "percent",
    })}`;
  }

  const numberParts = new Intl.NumberFormat(locale, {
    ...numberPresets(val, preset),
    currency: currency,
  }).formatToParts(val);

  const output = numberParts
    .map(({ type, value }) => {
      switch (type) {
        case "fraction":
          if (preset == "input") {
            // Remove trailing zeros if there are more than 2
            while (value.charAt(value.length - 1) == "0" && value.length > 2) {
              value = value.slice(0, value.length - 1);
            }
            return value;
          } else {
            return value;
          }
        default:
          return value;
      }
    })
    .reduce((string, part) => string + part);

  return output;
};

export const fixedToFloat = (num: bigint, decimals = 18) => {
  return parseFloat(formatUnits(num, decimals));
};

export const floatToFixed = (num: number | undefined, decimals = 18) => {
  if (num == undefined) {
    return BigInt(0);
  }
  return parseUnits(num.toFixed(decimals).toString(), decimals);
};

export const makeStringNumeric = (str: string): string => {
  return str
    .replace(/[^.\d]/gi, "") // replace anything that's not a digit or a dot
    .replace(/\.\./gi, ".") // replace any double dots
    .replace(/(\.\d+)(\.)/gi, "$1"); // replace any time a dot appears after a previous dot
};

export const allowanceScaleCheck = (num: number): number => {
  return 1.00001 * num;
};
