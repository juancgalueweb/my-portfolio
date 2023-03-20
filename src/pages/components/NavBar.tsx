import { useTranslation } from '@/context/i18n'
import LanguageSwitch from '@/services/LanguageSwitch'
import ThemeSwitch from '@/services/ThemeSwitch'
import styles from '@/styles/Navbar.module.css'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import myLogo from 'public/logo-color.png'
import { AiFillGithub } from 'react-icons/ai'
import { FcDocument } from 'react-icons/fc'

const NavBar = () => {
  const { t } = useTranslation()
  const { pathname, locale } = useRouter()

  type NavigationProps = {
    name: string
    href: string
    current: boolean
  }

  const navigation: NavigationProps[] = [
    {
      name: `${t('NAVBAR_LINK_1')}`,
      href: '/technologies',
      current: pathname === '/technologies'
    },
    {
      name: `${t('NAVBAR_LINK_2')}`,
      href: '/myprojects',
      current: pathname === '/myprojects'
    },
    {
      name: `${t('NAVBAR_LINK_3')}`,
      href: '/diplomas',
      current: pathname === '/diplomas'
    }
  ]

  const activeLink = `text-base ${styles['active-link']} cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 dark:bg-[#88ccca] dark:hover:${styles['active-link']} dark:text-[#111827] dark:hover:${styles['dark-active-link']}`
  const nonActiveLink = `text-base dark:text-slate-200 cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 ${styles['extra-padding']} dark:hover:text-white`
  const disclosureButtonActiveLink = `text-base ${styles['active-link']} cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 dark:bg-[#88ccca] dark:hover:${styles['active-link']} dark:text-[#111827] dark:hover:${styles['dark-active-link']} block`
  const disclosureButtonNonActiveLink = `text-base dark:text-slate-200 cursor-pointer ${styles['desired-text-color']} hover:underline hover:underline-offset-4 ${styles['extra-padding']} dark:hover:text-white block`

  return (
    <Disclosure
      as='nav'
      className='sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-60 bg-slate-100 border-b dark:bg-[#1F2937] dark:border-gray-600 dark:bg-opacity-30'
    >
      {({ open }) => (
        <>
          <div className='mx-auto w-full px-2 sm:px-6 lg:px-4'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  <Link href='/' scroll={false}>
                    <Image
                      src={myLogo}
                      alt='Imagen de mi logo'
                      className='w-10 h-10 rounded-full mx-2 inline'
                    />
                  </Link>
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-6'>
                    {navigation?.map(item => (
                      <Link
                        key={item.name}
                        href={item.href}
                        scroll={false}
                        className={item.current ? activeLink : nonActiveLink}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <a
                      href='https://github.com/juancgalueweb/my-portfolio'
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`text-base dark:text-slate-200 ${styles['desired-text-color']} hover:underline hover:underline-offset-4 ${styles['extra-padding']} dark:hover:text-white`}
                      aria-label='Link so you can check the code of this portfolio in Github'
                    >
                      <AiFillGithub className='dark:text-white inline mr-1 mb-1 text-base' />
                      {t('NAVBAR_LINK_4')}
                    </a>
                    <a
                      href={
                        locale === 'es'
                          ? 'https://certifications-and-courses.s3.sa-east-1.amazonaws.com/CV/CV+Juan+Galue%CC%81+wd+(2023)_Esp.pdf'
                          : 'https://certifications-and-courses.s3.sa-east-1.amazonaws.com/CV/CV+Juan+Galue%CC%81+wd+(2023)_Eng.pdf'
                      }
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`text-base dark:text-slate-200 ${styles['desired-text-color']} hover:underline hover:underline-offset-4 ${styles['extra-padding']} dark:hover:text-white`}
                      aria-label='Link to my resume in pdf format'
                    >
                      <FcDocument className='inline mr-1 mb-1 text-base' />
                      {t('NAVBAR_RESUME_BUTTON')}
                    </a>
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <LanguageSwitch />
                <ThemeSwitch />
              </div>
            </div>
          </div>
          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              {navigation?.map(item => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  scroll={false}
                  className={
                    item.current
                      ? disclosureButtonActiveLink
                      : disclosureButtonNonActiveLink
                  }
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <a
                href='https://github.com/juancgalueweb/my-portfolio'
                target='_blank'
                rel='noopener noreferrer'
                className={`text-base dark:text-slate-200 ${styles['desired-text-color']} hover:underline hover:underline-offset-4 ${styles['extra-padding']} dark:hover:text-white block`}
                aria-label='Link so you can check the code of this portfolio in Github'
              >
                <AiFillGithub className='dark:text-white inline mr-1 mb-1 text-base' />
                {t('NAVBAR_LINK_4')}
              </a>
              <a
                href={
                  locale === 'es'
                    ? 'https://certifications-and-courses.s3.sa-east-1.amazonaws.com/CV/CV+Juan+Galue%CC%81+wd+(2023)_Esp.pdf'
                    : 'https://certifications-and-courses.s3.sa-east-1.amazonaws.com/CV/CV+Juan+Galue%CC%81+wd+(2023)_Eng.pdf'
                }
                target='_blank'
                rel='noopener noreferrer'
                className={`text-base dark:text-slate-200 ${styles['desired-text-color']} hover:underline hover:underline-offset-4 ${styles['extra-padding']} dark:hover:text-white block`}
                aria-label='Link to my resume in pdf format'
              >
                <FcDocument className='inline mr-1 mb-1 text-base' />
                {t('NAVBAR_RESUME_BUTTON')}
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBar
