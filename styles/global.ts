import { css } from "@emotion/react";

import { localFonts } from "./fonts";
import { reset } from "./reset";
import { theme } from "./theme";

export const globalStyles = css`
  ${localFonts};
  ${reset};

  :root {
    box-sizing: border-box;
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }

  body {
    min-height: 100vh;
    min-height: -webkit-fill-available;

    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.light};
    line-height: ${theme.lineHeights.base};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.bold};
    line-height: ${theme.lineHeights.shorter};
  }

  h1 {
    font-size: ${theme.fontSizes["4xl"]};
  }

  h2 {
    font-size: ${theme.fontSizes["3xl"]};
  }

  h3 {
    font-size: ${theme.fontSizes["2xl"]};
  }

  h4 {
    font-size: ${theme.fontSizes["xl"]};
  }

  h5 {
    font-size: ${theme.fontSizes["lg"]};
  }

  h6 {
    font-size: ${theme.fontSizes["md"]};
  }
`;
