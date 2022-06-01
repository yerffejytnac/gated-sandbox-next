import { createBreakpoints } from "@chakra-ui/theme-tools";

export const breakpoints = createBreakpoints({
  sm: "25em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

export type Breakpoints = typeof breakpoints;
