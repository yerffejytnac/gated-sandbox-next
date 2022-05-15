import { SystemStyleObject } from "@chakra-ui/react";
import { ComponentStyleConfig } from "@chakra-ui/theme";

import { Colors } from "./colors";
import {
  FontFamilies,
  FontSizes,
  FontWeights,
  LineHeights,
} from "./typography";

export interface Theme {
  colors: Colors;
  components: {
    [key: string]: ComponentStyleConfig;
  };
  fonts: FontFamilies;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  lineHeights: LineHeights;
  textStyles: {
    [key: string]: SystemStyleObject;
  };
}
