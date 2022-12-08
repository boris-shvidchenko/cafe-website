// Components
import Head from 'next/head';

// Hooks 
import { useState, createContext, useEffect } from 'react';

// Styles
import '../styles/globals.css';

// Context for state
export const Context = createContext(); 

export default function MyApp({ Component, pageProps }) {

  // State
  const [modal, setModal] = useState(false);
  const [inputData, setInputData] = useState({name:'', email:'', msg:'',});
  const [mobileView, setMobileView] = useState({width: ''});

  // Sets the mobileView state width property to the current browser width. This is used in order to render components based on whether mobile view is used or not.
  // The code in the useEffect hook was referenced from the following source: https://stackoverflow.com/questions/63406435/how-to-detect-window-size-in-next-js-ssr-using-react-hook
  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setMobileView({
          width: window.innerWidth
        });
      }
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); 
  console.log(mobileView.width)
  return (
    <Context.Provider value={{modal, setModal, inputData, setInputData, mobileView}}>
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

