import { CacheProvider } from '@emotion/react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from '../redux';
import createEmotionCache from '../utility/createEmotionCache';
import theme from '../utility/theme';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props: AppProps) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>Who's that Scrum Master!?</title>
                <link rel="icon" href="/pikachu.webp" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Container>
                        <Component {...pageProps} />
                    </Container>
                </Provider>
            </ThemeProvider>
        </CacheProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};
