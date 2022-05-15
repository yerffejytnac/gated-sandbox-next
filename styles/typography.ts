// import { systemFonts } from "./fonts";
const systemFonts = `serif`;

const fonts = {
  heading: `"Epilogue", ${systemFonts}`,
  body: `"Epilogue", ${systemFonts}`,
};

const fontSizes = {
  xs: "0.8125rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "2rem",
  "4xl": "2.5rem",
  "5xl": "3rem",
};

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const lineHeights = {
  none: 1,
  normal: "normal",

  // Named
  short: 1.375,
  shorter: 1.25,
  base: 1.5,
  tall: 1.625,
  taller: 2,

  // Numeric
  3: ".75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  13: "3.25rem",
  14: "3.5rem",
  15: "3.75rem",
  16: "4rem",
};

const textStyles = {};

export { fonts, fontSizes, fontWeights, lineHeights, textStyles };

export type LineHeights = typeof lineHeights;
export type FontWeights = typeof fontWeights;
export type FontSizes = typeof fontSizes;

export interface FontFamilies {
  heading: string;
  body: string;
}
