import { DarkModeContext } from '@/context/DarkModeContext'
import Head from 'next/head'
import { FC, PropsWithChildren, useContext } from 'react'
import Navbar from './Navbar'

interface TProps {
  title: string
  description?: string
}

const AppWrapper: FC<PropsWithChildren<TProps>> = ({
  title,
  description,
  children
}) => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <>
      <div className={darkMode ? 'dark' : ''}>
        <Head>
          <title>{title}</title>
          {description && <meta name='description' content={description} />}
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        </Head>
        <main className='bg-white dark:bg-[#101827] min-h-screen relative'>
          <Navbar />
          {children}
        </main>
      </div>
    </>
  )
}

export default AppWrapper
