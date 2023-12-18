import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Montserrat } from "next/font/google"
import Head from 'next/head'
import Footer from '@/components/Footer'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

//  initialize montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
}) // more about , nextjs.org  => https://nextjs.org/docs/pages/building-your-application/optimizing/fonts

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <Navbar />
        <AnimatePresence mode='wait'>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}
