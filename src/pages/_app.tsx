import "../styles/Home.css"
import "../styles/Header.css"
import "../styles/StackCards.css"
import "../styles/AboutMe.css"
import "../styles/Footer.css"
import "../styles/LanguageSwitcher.css"
import "../styles/contactForm.css"
import "../styles/ThankYou.css"
import '@/styles/globals.css'
import '@/styles/Fonts.css'
import type { AppProps } from 'next/app'
import { Layout } from "@/components"
import { LanguageProvider } from '../contexts/LenguageContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <Layout>
    //   <Component {...pageProps} />
    // </Layout>
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  )
}
