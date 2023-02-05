import ThemeSwitch from '@/services/ThemeSwitch'
import styles from '@/styles/Navbar.module.css'
import { Button, Navbar } from 'flowbite-react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { AiFillGithub } from 'react-icons/ai'

const Nav: FC = () => {
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <Navbar
      fluid={true}
      rounded={true}
      className='sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-slate-100 border-b dark:bg-[#1F2937] dark:border-gray-600 dark:bg-opacity-30'
    >
      <Navbar.Brand onClick={() => router.push('/')}>
        <span className='self-center font-ruslan whitespace-nowrap text-xl font-semibold dark:text-slate-200 cursor-pointer p-1'>
          Desarrollado por JCG
        </span>
      </Navbar.Brand>
      <div className='flex items-center md:order-2'>
        <Button outline={true} gradientDuoTone='greenToBlue'>
          <a
            href='https://certifications-and-courses.s3.sa-east-1.amazonaws.com/CV/CV+Juan+Galue%CC%81+wd+(2022)_Esp.pdf'
            target='_blank'
            rel='noreferrer'
          >
            Mi CV
          </a>
        </Button>
        <ThemeSwitch />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          onClick={() => router.push('/technologies')}
          className={
            currentRoute === '/technologies'
              ? `text-base ${styles['active-link']} cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 dark:bg-[#88ccca] dark:hover:${styles['active-link']} dark:text-[#111827] dark:hover:${styles['dark-active-link']}`
              : `text-base dark:text-slate-200 cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 ${styles['extra-padding']}`
          }
        >
          Tecnolog&iacute;as
        </Navbar.Link>
        <Navbar.Link
          onClick={() => router.push('/myprojects')}
          className={
            currentRoute === '/myprojects'
              ? `text-base ${styles['active-link']} cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 dark:bg-[#88ccca] dark:hover:${styles['active-link']} dark:text-[#111827] dark:hover:${styles['dark-active-link']}`
              : `text-base dark:text-slate-200 cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 ${styles['extra-padding']}`
          }
        >
          Proyectos
        </Navbar.Link>
        <Navbar.Link
          onClick={() => router.push('/diplomas')}
          className={
            currentRoute === '/diplomas'
              ? `text-base ${styles['active-link']} cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 dark:bg-[#88ccca] dark:hover:${styles['active-link']} dark:text-[#111827] dark:hover:${styles['dark-active-link']}`
              : `text-base dark:text-slate-200 cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 ${styles['extra-padding']}`
          }
        >
          Diplomas
        </Navbar.Link>
        <Navbar.Link
          href='https://github.com/juancgalueweb/my-portfolio'
          target='_blank'
          rel='noopener noreferrer'
          className={`text-base dark:text-slate-200 ${styles['desired-text-color']} hover:underline hover:underline-offset-4 ${styles['extra-padding']}`}
        >
          <AiFillGithub className='dark:text-white inline-block mr-1 mb-1 text-base' />
          C&oacute;digo
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Nav
