import { Global } from "@emotion/react";
import { AppProps } from "next/app";

import { globalStyles, ThemeProvider, theme } from "@styles";

interface Props extends AppProps {}

const App = ({ Component, pageProps }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
