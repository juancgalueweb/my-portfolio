import { I18NProvider } from '@/context/i18n'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect } from 'react'
import Layout from './components/Layouts/Main'

export default function App({ Component, pageProps, router }: AppProps) {
  NProgress.configure({ showSpinner: false })

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      //check if there is any key for theme in local storage and if the system color theme is dark
      //OPTIONAL - remove light from the html document if any
      document.documentElement.classList.remove('light')
      // add dark to the <html></html> itself as <html class='dark'></html>
      document.documentElement.classList.add('dark')
    } else {
      // remove dark from the html document if any
      document.documentElement.classList.remove('dark')
      //OPTIONAL - add light to the <html></html> itself as <html class='light'></html>
      document.documentElement.classList.add('light')
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
      <Layout>
        <AnimatePresence
          mode='wait'
          onExitComplete={() => window.scrollTo(0, 0)}
          initial={false}
        >
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </Layout>
    </I18NProvider>
  )
}
