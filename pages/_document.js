import { Html, Head, Main, NextScript } from 'next/document';

// This file is used to add Google Font stylesheets to the document and to avoid possible errors/warnings. Referenced from 'https://nextjs.org/docs/messages/no-stylesheets-in-head-component'. Favicon will be stored here as well. 

export default function Document() {
  return (
    <Html>
      <Head>
        {/* The link tags below are for/from Google Fonts for the body text */}
        
        {/* Favicon */}
        <link rel='icon' href='/icons/favicon.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}