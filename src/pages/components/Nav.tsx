import { useTranslation } from '@/context/i18n'
import LanguageSwitch from '@/services/LanguageSwitch'
import ThemeSwitch from '@/services/ThemeSwitch'
import styles from '@/styles/Navbar.module.css'
import { Navbar } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import myLogo from 'public/logo-color.png'
import { FC } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FcDocument } from 'react-icons/fc'

const Nav: FC = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const { pathname } = router

  return (
    <Navbar
      fluid={true}
      rounded={true}
      className='sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-slate-100 border-b dark:bg-[#1F2937] dark:border-gray-600 dark:bg-opacity-30'
    >
      <Link href='/' scroll={false}>
        <Image
          src={myLogo}
          alt='Imagen de mi logo'
          className='w-10 h-10 rounded-full mr-2 inline'
        />
        <span className='self-center font-ruslan whitespace-nowrap text-xl font-semibold dark:text-slate-200 cursor-pointer p-1'>
          J. Galu&eacute;
        </span>
      </Link>
      <div className='flex items-center md:order-2'>
        <LanguageSwitch />
        <ThemeSwitch />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link
          href='/technologies'
          scroll={false}
          className={
            pathname === '/technologies'
              ? `text-base ${styles['active-link']} cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 dark:bg-[#88ccca] dark:hover:${styles['active-link']} dark:text-[#111827] dark:hover:${styles['dark-active-link']}`
              : `text-base dark:text-slate-200 cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 ${styles['extra-padding']} dark:hover:text-white`
          }
        >
          {t('NAVBAR_LINK_1')}
        </Link>
        <Link
          href='/myprojects'
          scroll={false}
          className={
            pathname === '/myprojects'
              ? `text-base ${styles['active-link']} cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 dark:bg-[#88ccca] dark:hover:${styles['active-link']} dark:text-[#111827] dark:hover:${styles['dark-active-link']}`
              : `text-base dark:text-slate-200 cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 ${styles['extra-padding']} dark:hover:text-white`
          }
        >
          {t('NAVBAR_LINK_2')}
        </Link>
        <Link
          href='/diplomas'
          scroll={false}
          className={
            pathname === '/diplomas'
              ? `text-base ${styles['active-link']} cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 dark:bg-[#88ccca] dark:hover:${styles['active-link']} dark:text-[#111827] dark:hover:${styles['dark-active-link']}`
              : `text-base dark:text-slate-200 cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 ${styles['extra-padding']} dark:hover:text-white`
          }
        >
          {t('NAVBAR_LINK_3')}
        </Link>
        <a
          href='https://github.com/juancgalueweb/my-portfolio'
          target='_blank'
          rel='noopener noreferrer'
          className={`text-base dark:text-slate-200 ${styles['desired-text-color']} hover:underline hover:underline-offset-4 ${styles['extra-padding']} dark:hover:text-white`}
        >
          <AiFillGithub className='dark:text-white inline mr-1 mb-1 text-base' />
          {t('NAVBAR_LINK_4')}
        </a>
        <a
          href='https://certifications-and-courses.s3.sa-east-1.amazonaws.com/CV/CV+Juan+Galue%CC%81+wd+(2022)_Esp.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className={`text-base dark:text-slate-200 ${styles['desired-text-color']} hover:underline hover:underline-offset-4 ${styles['extra-padding']} dark:hover:text-white`}
        >
          <FcDocument className='inline mr-1 mb-1 text-base' />
          {t('NAVBAR_RESUME_BUTTON')}
        </a>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Nav
