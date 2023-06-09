import { type ReactChildren } from '@/types.d'
import Footer from '../Footer'
import NavBar from '../NavBar'

const MainLayout = ({ children }: ReactChildren) => {
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
