import styles from '@/styles/ScrollToTop.module.css'
import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import { HiArrowUp } from 'react-icons/hi'
import ScrollToTop from 'react-scroll-to-top'

type LayoutProps = {
  title: string
  children: React.ReactNode
  description: string
}

const SectionLayout = ({ title, children, description }: LayoutProps) => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 }
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name='description' content={description} />}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href='favicon1.png' type='image/x-icon' />
      </Head>
      <ScrollToTop
        smooth
        component={<HiArrowUp className='text-2xl text-[#111827]' />}
        className={`flex justify-center items-center mb-8 ${styles['custom-bg']}`}
      />
      <motion.section
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        transition={{ duration: 0.6, ease: 'backInOut' }}
        className='max-w-3xl mx-auto py-10 min-h-screen'
      >
        {children}
      </motion.section>
    </>
  )
}

export default SectionLayout
