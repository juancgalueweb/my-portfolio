import styles from '@/styles/ScrollToTop.module.css'
import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'
import { HiArrowUp } from 'react-icons/hi'
import ScrollToTop from 'react-scroll-to-top'
import Footer from './Footer'
import Nav from './Nav'

interface TProps {
  title: string
  description?: string
}

const AppWrapper: FC<PropsWithChildren<TProps>> = ({
  title,
  description,
  children
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name='description' content={description} />}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href='favicon.png' type='image/x-icon' />
      </Head>
      <main className='bg-white dark:bg-[#101827]'>
        <Nav />
        <ScrollToTop
          smooth
          component={<HiArrowUp className='text-2xl text-[#111827]' />}
          className={`flex justify-center items-center mb-8 ${styles['custom-bg']}`}
        />
        <section className='max-w-4xl mx-auto pt-10 min-h-screen'>
          {children}
        </section>
        <Footer />
      </main>
    </>
  )
}

export default AppWrapper
