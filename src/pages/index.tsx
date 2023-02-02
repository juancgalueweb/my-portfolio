import { DarkModeContext } from '@/context/DarkModeContext'
import Head from 'next/head'
import { useContext } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Technologies from './components/Technologies'

export default function Home() {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Juan Galué portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-white dark:bg-[#101827] min-h-screen relative'>
        <Navbar />
        <Hero />
        <Technologies />
        <Portfolio />
      </main>
    </div>
  )
}
