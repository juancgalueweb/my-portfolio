import React from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'

type MainProps = {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainProps) => {
  return (
    <>
      <main className='bg-slate-50 dark:bg-gray-dark-mode-900'>
        <NavBar />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
