import {
  Burger,
  Button,
  createEmotionCache,
  createStyles,
  MantineProvider
} from "@mantine/core";
import { AppProps } from "next/app";
import Head from "next/head";

const cache = createEmotionCache({ key: "mantine" });

const useStyles = createStyles((theme) => ({ button: { width: "" } }));

export default function App(props: AppProps) {
  const { classes } = useStyles();
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider emotionCache={cache} withGlobalStyles withNormalizeCSS>
        <Button>TEST</Button>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
