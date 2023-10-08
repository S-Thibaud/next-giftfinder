import '@/styles/globals.css';
import isPropValid from '@emotion/is-prop-valid';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import { StyleSheetManager } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyleSheetManager shouldForwardProp={isPropValid} enableVendorPrefixes>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StyleSheetManager>
    </>
  );
}
