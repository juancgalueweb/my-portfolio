import { I18NProvider } from '@/context/i18n'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  NProgress.configure({ showSpinner: false })

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      //check if there is any key for theme in local storage and if the system color theme is dark
      document.documentElement.classList.remove('light') //OPTIONAL - remove light from the html document if any
      document.documentElement.classList.add('dark') // add dark to the <html></html> itself as <html class='dark'></html>
    } else {
      document.documentElement.classList.remove('dark') // remove dark from the html document if any
      document.documentElement.classList.add('light') //OPTIONAL - add light to the <html></html> itself as <html class='light'></html>
    }
  }, [])

  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      NProgress.start()
    })
    Router.events.on('routeChangeComplete', () => {
      NProgress.done()
    })
  }, [])

  return (
    <I18NProvider>
      <AnimatePresence mode='wait' initial={true}>
        <Component {...pageProps} />
      </AnimatePresence>
    </I18NProvider>
  )
}
