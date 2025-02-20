import { createTheme, PaletteOptions } from "@mui/material";

import { fontFaces } from "../fonts";

const fontFamily = "'BaselGrotesk', 'Arial', sans-serif";

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

// Dark mode base palette
const darkPalette: PaletteOptions = {
  mode: "dark",
  background: {
    default: "#09111F",
    paper: "#09111F",
    teal: "#002B26",
    secondary: "#1C2431",
  },
  primary: {
    main: "#F5F5F6",
    dark: "#5000c9",
  },
  secondary: {
    main: "#94969E",
    dark: "#5000c9",
  },
  error: {
    main: "#FF0E0E",
  },
  success: {
    main: "#00BA62",
  },
  warning: {
    main: "#F7941A",
    contrastText: "#FFFFFF",
  },
  text: {
    primary: "#F5F5F6",
    secondary: "#CECFD2",
    tertiary: "#94969E",
    teal: "#00DAB5",
  },
  neutral: {
    main: "rgba(255, 255, 255, 0.05)",
    dark: "rgba(255, 255, 255, 0.13)",
    contrastText: "#fff",
  },
};

// Light mode base palette
const lightPalette: PaletteOptions = {
  mode: "light",
  background: {
    default: "#FFFFFF",
    paper: "#F7F7F7",
    teal: "#F2FEFC",
    secondary: "#EAECF0",
  },
  primary: {
    main: "#09111F",
    dark: "#3C4043",
  },
  secondary: {
    main: "#757575",
    dark: "#616161",
  },
  error: {
    main: "#D32F2F",
  },
  success: {
    main: "#388E3C",
  },
  warning: {
    main: "#FFA000",
    contrastText: "#000000",
  },
  text: {
    primary: "#0B182A",
    secondary: "#2D4158",
    tertiary: "#40556B",
    teal: "#00DAB5",
  },
  neutral: {
    main: "rgba(0, 0, 0, 0.05)",
    dark: "rgba(0, 0, 0, 0.13)",
    contrastText: "#000",
  },
};

const darkTheme = createTheme({
  palette: darkPalette,
  typography: {
    fontFamily,
  },
  borders: {
    primary: "#313743",
    secondary: "#1C2431",
    teal: "#005148",
  },
  button: {
    secondary: "#00BD9D",
    outlined: "#131B28",
  },
});

const lightTheme = createTheme({
  palette: lightPalette,
  typography: {
    fontFamily,
  },
  borders: {
    primary: "#CED5DF",
    secondary: "#EAECF0",
    teal: "#CED5DF",
  },
  button: {
    secondary: "#00BD9D",
    outlined: "#FFF",
  },
});

const createMainTheme = (mode: "light" | "dark") => {
  const baseTheme = mode === "dark" ? darkTheme : lightTheme;
  return createTheme(baseTheme, {
    typography: {
      h1: {
        fontSize: "36px",
        fontWeight: 600,
        lineHeight: "44px",
        color: baseTheme.palette.text.primary,
      },
      h2: {
        fontSize: "30px",
        fontWeight: 600,
        lineHeight: "38px",
        color: baseTheme.palette.text.primary,
      },
      h3: {
        fontWeight: 600,
        fontSize: "20px",
        lineHeight: "30px",
        color: baseTheme.palette.text.primary,
      },
      h4: {
        fontWeight: 600,
        fontSize: "18px",
        lineHeight: "28px",
        color: baseTheme.palette.text.primary,
      },
      h5: {
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "28px",
        color: baseTheme.palette.text.tertiary,
      },
      h6: {
        fontWeight: 450,
        fontSize: "1rem",
        lineHeight: "1.1875rem",
      },
      subtitle1: {
        fontSize: "18px",
        fontWeight: 400,
        lineHeight: "28px",
        color: baseTheme.palette.text.secondary,
      },
      subtitle2: {
        fontSize: "12px",
        fontWeight: 600,
        lineHeight: "18px",
        color: baseTheme.palette.text.secondary,
      },
      body1: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "24px",
        color: baseTheme.palette.text.secondary,
      },
      body2: {
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "20px",
        color: baseTheme.palette.text.tertiary,
      },
      caption: {
        fontSize: "14px",
        color: baseTheme.palette.text.secondary,
        fontWeight: 600,
        lineHeight: "20px",
      },
      overline: {
        fontSize: "12px",
        fontWeight: 500,
        lineHeight: "18px",
        color: baseTheme.palette.text.tertiary,
      },
      button: {
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: "1.0625rem",
        textTransform: "capitalize",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          ${fontFaces.join("\n")}
  
          body {
            font-family: ${fontFamily};
          }
        `,
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            padding: "12px",
            fontSize: "18px",
            fontWeight: 600,
            color: baseTheme.palette.text.secondary,
            backgroundColor: baseTheme.borders.secondary,
            backdropFilter: "blur(25px)",
            borderRadius: "8px",
            maxWidth: "330px",
            boxShadow:
              "0px 12px 16px -4px rgba(14, 24, 41, 0.08), 0px 4px 6px -2px rgba(14, 24, 41, 0.03)",
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          formControl: {
            height: "100%",
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            border: `1px solid ${baseTheme.borders.secondary}`,
            borderRadius: "12px",
            backgroundImage: "unset",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            borderRadius: "8px !important",
            padding: "8px 12px !important",
            input: {
              padding: 0,
            },
            "& .MuiSelect-select": {
              padding: "8px 12px",
              margin: "-8px -32px -8px -12px",
            },
            fieldset: {
              border: `1px solid ${baseTheme.borders.primary} !important`,
              borderRadius: "8px",
            },
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            margin: "6px 0 0 0",
            fontSize: "14px",
            fontWeight: 400,
            color: baseTheme.palette.text.tertiary,
          },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          determinate: {
            height: 10,
            borderRadius: 5,
          },
          barColorPrimary: {
            background: "linear-gradient(90deg,#780EFF,#FF32C9)",
          },
          root: {
            backgroundColor: "rgba(255, 255, 255, 0.29)",
          },
        },
      },
      MuiButton: {
        variants: [
          {
            props: { variant: "contained", color: "primary" },
            style: {
              background:
                "linear-gradient(270deg, #780EFF 0.08%, #FF32C9 100.08%), linear-gradient(270deg, #F7941A 0.08%, #01A578 100.08%), #780EFF;",
            },
          },
        ],
        styleOverrides: {
          root: {
            borderRadius: "0.625rem",
            textTransform: "capitalize",
            padding: "12px 18px",
          },
          sizeMedium: {
            minWidth: "126px",
          },
          sizeLarge: {
            fontWeight: "700",
            fontSize: "1rem",
          },
          outlined: {
            border: "1px solid",
            borderColor: "#00DAB5",
            color: baseTheme.palette.text.primary,
            // borderImageSource:
            //   'linear-gradient(270deg, #780EFF 0.08%, #FF32C9 100.08%)',
          },
          text: {
            color: baseTheme.palette.text.secondary,
          },
        },
      },
      MuiCard: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            borderRadius: 20,
            border: "1px solid rgba(255, 255, 255, 0.1)",
          },
        },
      },
      MuiPopover: {
        styleOverrides: {
          paper: {
            border: `1px solid rgba(255, 255, 255, 0.16)`,
            borderRadius: "10px",
            backgroundImage: "unset",
          },
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            background: "#121425",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            height: "initial",
            borderRadius: 6,
            padding: "2px 6px",
            border: `1px solid ${baseTheme.borders.secondary}`,
            background: "unset",
          },
          label: {
            padding: 0,
            lineHeight: "12px",
          },
        },
      },
      MuiSwitch: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            width: 48,
            height: 24,
            padding: 0,
            "& .MuiSwitch-switchBase": {
              padding: 0,
              margin: 4,
              transitionDuration: "300ms",
              "&.Mui-checked": {
                transform: "translateX(24px)",
                color: "#fff",
                "& + .MuiSwitch-track": {
                  background: baseTheme.palette.primary.main,
                  // backgroundColor:
                  //   baseTheme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
                  opacity: 1,
                  border: 0,
                },
                "&.Mui-disabled + .MuiSwitch-track": {
                  opacity: 0.5,
                },
              },
              "&.Mui-focusVisible .MuiSwitch-thumb": {
                color: baseTheme.palette.primary.main,
                border: "6px solid #fff",
              },
              "&.Mui-disabled .MuiSwitch-thumb": {
                color:
                  baseTheme.palette.mode === "light"
                    ? baseTheme.palette.grey[100]
                    : baseTheme.palette.grey[600],
              },
              "&.Mui-disabled + .MuiSwitch-track": {
                opacity: baseTheme.palette.mode === "light" ? 0.7 : 0.3,
              },
            },
            "& .MuiSwitch-thumb": {
              boxSizing: "border-box",
              width: 16,
              height: 16,
            },
            "& .MuiSwitch-track": {
              borderRadius: 24 / 2,

              backgroundColor:
                baseTheme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
              opacity: 1,
              transition: baseTheme.transitions.create(["background-color"], {
                duration: 500,
              }),
            },
          },
        },
      },
      MuiAlert: {
        variants: [
          {
            props: { variant: "filled", severity: "info" },
            style: {
              height: baseTheme.spacing(8),
              background:
                "linear-gradient(270deg, rgba(120, 14, 255, 0.25) 0.08%, rgba(255, 50, 201, 0.25) 100.08%)",
            },
          },
        ],
        styleOverrides: {
          root: {
            borderRadius: 10,
            "&.MuiPaper-root": {
              height: "auto",
            },
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: baseTheme.borders.secondary,
          },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            margin: "0 !important",
            padding: "24px 0 32px 0",
            backgroundColor: "unset",
            backgroundImage: "unset",
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            padding: "0 0 8px 0",
            minHeight: "unset !important",
            alignItems: "start",
            gap: 24,
          },
          content: {
            margin: "0 !important",
          },
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: {
            padding: "0 40px 0 0",
          },
        },
      },
      MuiBreadcrumbs: {
        styleOverrides: {
          separator: {
            margin: "0 4px",
          },
        },
      },
      MuiSlider: {
        styleOverrides: {
          root: {
            height: 8,
          },
          track: {
            backgroundColor: baseTheme.palette.text.teal,
            border: "unset",
          },
          rail: {
            backgroundColor: baseTheme.borders.primary,
          },
          thumb: {
            backgroundColor: baseTheme.palette.text.teal,
            width: 24,
            height: 24,
            border: `2px solid ${baseTheme.palette.background.default}`,
            "&:hover, &.Mui-focusVisible, &.Mui-active": {
              boxShadow: "0px 0px 0px 8px rgba(0, 218, 181, 0.16)",
            },
          },
          markLabel: {
            fontSize: 12,
            fontWeight: 400,
            lineHeight: "18px",
            color: baseTheme.palette.text.secondary,
          },
          mark: {
            display: "none",
          },
        },
      },
    },
  });
};

export const lightMainTheme = createMainTheme("light");
export const darkMainTheme = createMainTheme("dark");

export default darkMainTheme;
