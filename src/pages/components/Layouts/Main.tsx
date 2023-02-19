import React from 'react'
import Footer from '../Footer'
import Nav from '../Nav'

type MainProps = {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainProps) => {
  return (
    <>
      <main className='bg-white dark:bg-[#101827]'>
        <Nav />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
