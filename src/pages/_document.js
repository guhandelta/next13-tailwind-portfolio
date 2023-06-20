import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

/*This file is almost same as _app.js, it's a custom doc that can be used to update the HTML and body text that is use dto render a page*/

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script 
          id="theme-switcher"
          strategy='beforeInteractive'
        >
        {/*
          On page load or when changing themes, best to add inline in 'head' to avoid FOUC

          When the page is reloaded in the dark mode, it can be observed that the content first loads in the light theme(dark text) and then changes the styling to suit the config in the local storage. This effect is called 'Flash Of Unstyled Content(FOUC)', where the webpage apprears briefly for a very shorter duration, in the browser's default settings and then the user preferred styling is applied after checking the local storage.

          This can be avoided by adding this script, for Next13 apps
         */ }
          {`
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
