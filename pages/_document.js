import { Html, Head, Main, NextScript } from 'next/document';

// This file is used to add Google Font stylesheets to the document and to avoid possible errors/warnings. Referenced from 'https://nextjs.org/docs/messages/no-stylesheets-in-head-component'. Favicon will be stored here as well. 

export default function Document() {
  return (
    <Html>
      <Head>
        {/* The link tags below are for/from Google Fonts for the body text */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet" />
        {/* The link tags below are for/from Google Fonts for the title text */}

        {/* The link tags below are for/from Google Fonts for the header text */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet" />

        
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