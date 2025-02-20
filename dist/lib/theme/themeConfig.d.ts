declare module "@mui/material/styles" {
    interface Theme {
        borders: {
            secondary: string;
            primary: string;
            teal: string;
        };
        button: {
            secondary: string;
            outlined: string;
        };
    }
    interface ThemeOptions {
        borders?: {
            secondary?: string;
            primary?: string;
            teal?: string;
        };
        button?: {
            secondary?: string;
            outlined?: string;
        };
    }
}
declare module "@mui/material/styles" {
    interface TypeText {
        tertiary?: string;
        teal?: string;
    }
    interface Palette {
        text: TypeText;
        neutral: {
            main: string;
            dark: string;
            contrastText: string;
        };
    }
    interface PaletteOptions {
        text?: Partial<TypeText>;
        neutral: {
            main: string;
            dark: string;
            contrastText: string;
        };
    }
}
declare module "@mui/material/styles" {
    interface TypeBackground {
        teal?: string;
        secondary?: string;
    }
}
declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        neutral: true;
    }
}
export declare const lightMainTheme: import('@mui/material').Theme;
export declare const darkMainTheme: import('@mui/material').Theme;
export default darkMainTheme;
