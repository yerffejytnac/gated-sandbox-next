import { css } from "@emotion/react";

export const localFonts = css`
  @font-face {
    font-family: "Epilogue";
    font-weight: 100 900;
    font-style: normal;
    src: url(/fonts/Epilogue/Variable.woff2) format("woff2-variations");
  }

  @font-face {
    font-family: "Epilogue";
    font-weight: normal;
    font-style: italic;
    src: url(/fonts/Epilogue/VariableItalic.woff2) format("woff2-variations");
  }
`;

export const systemFonts = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`;
export const monoFonts = `ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace`;
