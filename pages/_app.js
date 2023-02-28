import '@/styles/globals.css';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { useState } from 'react';

export default function App({ Component, pageProps }) {

   const [colorScheme, setColorScheme] = useState({
      key: 'mantine-color-scheme',
      defaultValue: 'light',
      getInitialValueInEffect: true,
   });

   const toggleColorScheme = (value) =>
      setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');

   return (
      <>
         <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
               withGlobalStyles
               withNormalizeCSS
               theme={{ colorScheme }}
            >
               <Component {...pageProps} />
            </MantineProvider>
         </ColorSchemeProvider>
      </>
   )
}
