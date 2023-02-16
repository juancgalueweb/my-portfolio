import { useTranslation } from '@/context/i18n'
import { CheckValidPath } from '@/services/CheckValidPaths'
import ThemeSwitch from '@/services/ThemeSwitch'
import styles from '@/styles/Navbar.module.css'
import { Navbar, Tooltip } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import myLogo from 'public/logo-color.png'
import { FC } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FcDocument } from 'react-icons/fc'
import { HiTranslate } from 'react-icons/hi'

const Nav: FC = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const { locale, locales, push, pathname } = router

  const restOfLocales = locales && locales.filter(l => l !== locale)

  return (
    <Navbar
      fluid={true}
      rounded={true}
      className='sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-slate-100 border-b dark:bg-[#1F2937] dark:border-gray-600 dark:bg-opacity-30'
    >
      <Navbar.Brand onClick={() => push('/')}>
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
        <Link
          href={CheckValidPath(pathname)}
          locale={restOfLocales && restOfLocales[0]}
        >
          {locale === 'es' ? (
            <Tooltip content='es → en' placement='bottom'>
              <div className='rounded-md hover:rounded-md hover:border-gray-200 hover:bg-gray-200 dark:border-slate-200 dark:bg-slate-200 dark:hover:bg-white dark:hover:border-white p-2 transform transition duration-300 hover:cursor-pointer mx-1'>
                <HiTranslate className='text-2xl cursor-pointer text-gray-800' />
              </div>
            </Tooltip>
          ) : (
            <Tooltip content='en → es' placement='bottom'>
              <div className='rounded-md hover:rounded-md hover:border-gray-200 hover:bg-gray-200 dark:border-slate-200 dark:bg-slate-200 dark:hover:bg-white dark:hover:border-white p-2 transform transition duration-300 hover:cursor-pointer mx-1'>
                <HiTranslate className='text-2xl cursor-pointer text-gray-800' />
              </div>
            </Tooltip>
          )}
        </Link>
        <ThemeSwitch />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          onClick={() => push('/technologies')}
          className={
            pathname === '/technologies'
              ? `text-base ${styles['active-link']} cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 dark:bg-[#88ccca] dark:hover:${styles['active-link']} dark:text-[#111827] dark:hover:${styles['dark-active-link']}`
              : `text-base dark:text-slate-200 cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 ${styles['extra-padding']}`
          }
        >
          {t('NAVBAR_LINK_1')}
        </Navbar.Link>
        <Navbar.Link
          onClick={() => push('/myprojects')}
          className={
            pathname === '/myprojects'
              ? `text-base ${styles['active-link']} cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 dark:bg-[#88ccca] dark:hover:${styles['active-link']} dark:text-[#111827] dark:hover:${styles['dark-active-link']}`
              : `text-base dark:text-slate-200 cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 ${styles['extra-padding']}`
          }
        >
          {t('NAVBAR_LINK_2')}
        </Navbar.Link>
        <Navbar.Link
          onClick={() => push('/diplomas')}
          className={
            pathname === '/diplomas'
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
          <AiFillGithub className='dark:text-white inline mr-1 mb-1 text-base' />
          {t('NAVBAR_LINK_4')}
        </Navbar.Link>

        <Navbar.Link
          href='https://certifications-and-courses.s3.sa-east-1.amazonaws.com/CV/CV+Juan+Galue%CC%81+wd+(2022)_Esp.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className={`text-base dark:text-slate-200 ${styles['desired-text-color']} hover:underline hover:underline-offset-4 ${styles['extra-padding']}`}
        >
          <FcDocument className='inline mr-1 mb-1 text-base' />
          {t('NAVBAR_RESUME_BUTTON')}
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Nav
