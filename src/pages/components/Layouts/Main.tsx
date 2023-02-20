import React from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'

type MainProps = {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainProps) => {
  return (
    <>
      <main className='bg-white dark:bg-[#101827]'>
        <NavBar />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
