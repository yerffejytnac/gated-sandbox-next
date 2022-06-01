import React, { FC, memo } from "react";
import {
  ChakraProvider,
  ColorModeScript,
  ConfigColorMode,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

import { theme as defaultTheme } from ".";
import { Theme } from "./types";

interface ThemeProviderProps {
  colorMode?: ConfigColorMode;
  children: React.ReactNode;
  resetCSS?: boolean;
  theme?: Partial<Theme>;
}

export const ThemeProvider: FC<ThemeProviderProps> = memo(
  ({ children, colorMode, theme = {}, resetCSS = true }) => {
    const extendedTheme = extendTheme(
      Object.assign(defaultTheme, {
        config: {
          useSystemColorMode: !colorMode,
        },
      }),
      withDefaultColorScheme({ colorScheme: "primary" }),
      theme
    );

    return (
      <ChakraProvider theme={extendedTheme} resetCSS={resetCSS}>
        <ColorModeScript initialColorMode={colorMode} />
        {children}
      </ChakraProvider>
    );
  }
);
