import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import { Global, css } from '@emotion/core'
import { CSSReset, ThemeProvider } from '@chakra-ui/core'

export default class CustomApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider>
        <Head>
          <title>MARK</title>
        </Head>
        <CSSReset />
        <Component {...pageProps} />
        <Global
          styles={css`
            html,
            body,
            #__next {
              height: 100%;
              margin: 0;
            }
          `}
        />
      </ThemeProvider>
    )
  }
}
