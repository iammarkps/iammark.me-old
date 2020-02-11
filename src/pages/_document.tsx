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
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <meta name="theme-color" content="black" />
          <meta property="og:title" content="I AM MARK" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://iammark.me" />
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
