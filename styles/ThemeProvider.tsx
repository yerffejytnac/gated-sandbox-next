import React, { FC } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { theme as defaultTheme } from ".";
import { Theme } from "./types";

interface ThemeProviderProps {
  theme?: Partial<Theme>;
  children: React.ReactNode;
  resetCSS?: boolean;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme = {},
  resetCSS = true,
}) => {
  const extendedTheme = extendTheme(defaultTheme, theme);

  return (
    <ChakraProvider theme={extendedTheme} resetCSS={resetCSS}>
      {children}
    </ChakraProvider>
  );
};
