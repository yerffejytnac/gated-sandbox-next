import "@emotion/react";
import { Theme as CustomTheme } from "./types";

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}
