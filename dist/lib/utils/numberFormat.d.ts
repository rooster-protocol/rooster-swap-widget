export declare const displayDate: (inputVal: number, locale?: string | undefined) => string;
export type preset = "input" | "tooltip" | "percent" | "currency" | "number" | "full" | "fullPercent";
export declare const numberPresets: (val: number, preset?: preset) => Intl.NumberFormatOptions;
export declare const displayNumber: (val: number, preset?: preset, currency?: string, locale?: string) => string;
export declare const fixedToFloat: (num: bigint, decimals?: number) => number;
export declare const floatToFixed: (num: number | undefined, decimals?: number) => bigint;
export declare const makeStringNumeric: (str: string) => string;
export declare const allowanceScaleCheck: (num: number) => number;
