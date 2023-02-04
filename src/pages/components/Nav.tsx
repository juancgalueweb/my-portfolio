import ThemeSwitch from '@/services/ThemeSwitch'
import styles from '@/styles/Underline.module.css'
import { Button, Navbar } from 'flowbite-react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { AiFillGithub } from 'react-icons/ai'

const Nav: FC = () => {
  const router = useRouter()

  return (
    <Navbar
      fluid={true}
      rounded={true}
      className='sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-slate-100 border-b dark:bg-[#1F2937] dark:border-gray-600 dark:bg-opacity-30'
    >
      <Navbar.Brand onClick={() => router.push('/')}>
        <span className='self-center font-ruslan whitespace-nowrap text-xl font-semibold dark:text-slate-200 cursor-pointer'>
          Desarrollado por JCG
        </span>
      </Navbar.Brand>
      <div className='flex items-center md:order-2'>
        <Button outline={true} gradientDuoTone='greenToBlue'>
          Mi CV
        </Button>
        <ThemeSwitch />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          onClick={() => router.push('/proyectos')}
          className={`text-base dark:text-slate-200 cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4`}
        >
          Proyectos
        </Navbar.Link>
        <Navbar.Link
          href='#'
          className={`text-base dark:text-slate-200 ${styles['desired-text-color']} hover:underline hover:underline-offset-4`}
        >
          Diplomas
        </Navbar.Link>
        <Navbar.Link
          href='https://github.com/juancgalueweb/my-portfolio'
          target='_blank'
          rel='noopener noreferrer'
          className={`text-base dark:text-slate-200 ${styles['desired-text-color']} hover:underline hover:underline-offset-4`}
        >
          <AiFillGithub className='dark:text-white inline-block mr-1 mb-1 text-base' />
          C&oacute;digo
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Nav
