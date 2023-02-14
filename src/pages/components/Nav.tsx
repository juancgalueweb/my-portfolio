import { useTranslation } from '@/context/i18n'
import ThemeSwitch from '@/services/ThemeSwitch'
import styles from '@/styles/Navbar.module.css'
import { Button, Navbar } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import myLogo from 'public/logo-color.png'
import { FC } from 'react'
import { AiFillGithub } from 'react-icons/ai'

const Nav: FC = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const currentRoute = router.pathname

  const locale = router.locale
  const locales = router.locales

  const restOfLocales = locales && locales.filter(l => l !== locale)

  return (
    <Navbar
      fluid={true}
      rounded={true}
      className='sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-slate-100 border-b dark:bg-[#1F2937] dark:border-gray-600 dark:bg-opacity-30'
    >
      <Navbar.Brand onClick={() => router.push('/')}>
        <Image
          src={myLogo}
          alt='Imagen de mi logo'
          className='w-10 h-10 rounded-full mr-2'
        />
        <span className='self-center font-ruslan whitespace-nowrap text-xl font-semibold dark:text-slate-200 cursor-pointer p-1'>
          J. Galu&eacute;
        </span>
      </Navbar.Brand>
      <div className='flex items-center md:order-2'>
        <Button outline={true} gradientDuoTone='greenToBlue'>
          <a
            href='https://certifications-and-courses.s3.sa-east-1.amazonaws.com/CV/CV+Juan+Galue%CC%81+wd+(2022)_Esp.pdf'
            target='_blank'
            rel='noreferrer'
          >
            {t('NAVBAR_RESUME_BUTTON')}
          </a>
        </Button>
        <Link
          href={
            currentRoute === '/technologies'
              ? '/technologies'
              : currentRoute === '/myprojects'
              ? '/myprojects'
              : currentRoute === '/diplomas'
              ? '/diplomas'
              : '/'
          }
          locale={restOfLocales && restOfLocales[0]}
        >
          {restOfLocales && restOfLocales[0] === 'en' ? (
            <div className='flex justify-center items-center ml-1.5'>
              <p className='inline text-gray-900 dark:text-white'>en</p>
              <span className='text-2xl ml-1'>🇺🇸</span>
            </div>
          ) : (
            <div className='flex justify-center items-center ml-1.5'>
              <p className='inline text-gray-900 dark:text-white'>es</p>
              <span className='text-2xl ml-1'>🇨🇱</span>
            </div>
          )}
        </Link>

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
          {t('NAVBAR_LINK_1')}
        </Navbar.Link>
        <Navbar.Link
          onClick={() => router.push('/myprojects')}
          className={
            currentRoute === '/myprojects'
              ? `text-base ${styles['active-link']} cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 dark:bg-[#88ccca] dark:hover:${styles['active-link']} dark:text-[#111827] dark:hover:${styles['dark-active-link']}`
              : `text-base dark:text-slate-200 cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 ${styles['extra-padding']}`
          }
        >
          {t('NAVBAR_LINK_2')}
        </Navbar.Link>
        <Navbar.Link
          onClick={() => router.push('/diplomas')}
          className={
            currentRoute === '/diplomas'
              ? `text-base ${styles['active-link']} cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 dark:bg-[#88ccca] dark:hover:${styles['active-link']} dark:text-[#111827] dark:hover:${styles['dark-active-link']}`
              : `text-base dark:text-slate-200 cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 ${styles['extra-padding']}`
          }
        >
          {t('NAVBAR_LINK_3')}
        </Navbar.Link>
        <Navbar.Link
          href='https://github.com/juancgalueweb/my-portfolio'
          target='_blank'
          rel='noopener noreferrer'
          className={`text-base dark:text-slate-200 ${styles['desired-text-color']} hover:underline hover:underline-offset-4 ${styles['extra-padding']}`}
        >
          <AiFillGithub className='dark:text-white inline-block mr-1 mb-1 text-base' />
          {t('NAVBAR_LINK_4')}
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Nav
