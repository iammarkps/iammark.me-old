import React from 'react'

import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'

class NextSite extends Document {
  public static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  public render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/assets/favicon.png" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, user-scalable=yes"
          />
          <meta name="theme-color" content="black" />
          <meta property="og:title" content="I AM MARK" />
          <meta
            property="og:image"
            content="https://iammark.me/assets/og.png"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://iammark.me" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="https://iammark.me/assets/og.png"
          />
          <meta name="twitter:site" content="@iammarkps" />
          <meta name="twitter:creator" content="@iammarkps" />
          <meta name="twitter:title" content="iammark" />
          <meta name="twitter:description" content="IAMMARK" />
          <meta name="description" content="IAMMARK" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default NextSite
