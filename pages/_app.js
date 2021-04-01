/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import Home from '../components/Home';
import Usage from '../components/Usage';

export default function MyApp(props) {
  // eslint-disable-next-line react/prop-types
  const { Component, pageProps } = props;
  console.log(props.router.pathname);

  const isCache = ['/home', '/usage'].includes(props.router.pathname);
  const isHome = props.router.pathname === '/home';
  const isUsage = props.router.pathname === '/usage';
  console.log(props.router.pathname);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
        <div style={isHome ? {} : { display: 'none' }}>
          <Home />
        </div>
        <div style={isUsage ? {} : { display: 'none' }}>
          {/* {shouldLoadUage && <Usage />} */}
        </div>
      </ThemeProvider>
    </>
  );
}
