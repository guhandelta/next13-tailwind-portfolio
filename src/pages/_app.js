import Head from "next/head"

import { Montserrat } from "next/font/google"
import "@/styles/globals.css"
import { Footer, Navbar } from "@/components"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-sans bg-light w-full min-h-screen dark:bg-dark`}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}

export default App;