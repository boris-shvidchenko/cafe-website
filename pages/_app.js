// Components
import Head from 'next/head';

// Hooks 
import { useState, createContext } from 'react';

// Styles
import '../styles/globals.css';

// Context for state
export const Context = createContext(); 

export default function MyApp({ Component, pageProps }) {

  // State
  const [modal, setModal] = useState(false);

  return (
    <Context.Provider value={{modal, setModal}}>
      <Head>
        <meta charSet='utf-8' />
        <meta name="description" content="Cafe website" />
        <meta name="keywords" content="Boris Shvidchenko, Portfolio, Cafe, Website" />
        <meta name="author" content="Boris Shvidchenko" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>West Oceanside Coffee</title>
      </Head>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

