type FontDescription = Record<string, number>;

const fontPath = "./fonts";
const baseName = "BaselGrotesk";

// MUI only uses 300,400,500,700 font weights
// Source: https://mui.com/material-ui/react-typography/#install-with-npm
const variants: { normal: FontDescription; italic: FontDescription } = {
  normal: {
    // Hairline: 100,
    // Thin: 200,
    Light: 300,
    Regular: 400,
    Book: 500,
    // Medium: 600,
    Bold: 700,
    // Black: 800,
    // Super: 900,
  },
  italic: {
    // Hairline: 100,
    // Thin: 200,
    Light: 300,
    Italic: 400,
    Book: 500,
    // Medium: 600,
    Bold: 700,
    // Black: 800,
    // Super: 900,
  },
};

const normalFontFaces = buildFonts(variants.normal, false);
const italicFontFaces = buildFonts(variants.italic, true);

function buildFonts(fonts: FontDescription, isItalic: boolean): string[] {
  const fontFaces: string[] = [];
  for (const fontName in fonts) {
    const fontWeight = fonts[fontName];
    const suffix = isItalic && fontName !== "Italic" ? "Italic" : "";
    const fullFontName = `${baseName}-${fontName}${suffix}`;
    const url = `${fontPath}/${fullFontName}.otf`;

    const fontFace = buildFontFace(url, fullFontName, fontWeight, isItalic);

    fontFaces.push(fontFace);
  }

  return fontFaces;
}

function buildFontFace(
  url: string,
  fontName: string,
  fontWeight: number,
  isItalic: boolean
) {
  return `
    @font-face {
      font-family: ${baseName};
      font-style: ${isItalic ? "italic" : "normal"};
      font-display: swap;
      font-weight: ${fontWeight};
      src: local('BaselGrotesk'), local('${fontName}'), url(${url}) format('opentype');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
    }
  `;
}

const fontFaces = [...normalFontFaces, ...italicFontFaces];

export { fontFaces };
