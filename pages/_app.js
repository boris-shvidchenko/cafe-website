// Components
import Head from 'next/head';

// Styles
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name="description" content="Cafe website" />
        <meta name="keywords" content="Boris Shvidchenko, Portfolio, Cafe, Website" />
        <meta name="author" content="Boris Shvidchenko" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Cafe</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

