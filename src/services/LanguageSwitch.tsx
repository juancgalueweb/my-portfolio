import { CheckValidPath } from '@/services/CheckValidPaths'
import { Tooltip } from 'flowbite-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HiTranslate } from 'react-icons/hi'

const LanguageSwitch = () => {
  const router = useRouter()
  const { locale, locales, pathname } = router

  const restOfLocales = locales && locales.filter(l => l !== locale)

  return (
    <Link
      href={CheckValidPath(pathname)}
      locale={restOfLocales && restOfLocales[0]}
    >
      {locale === 'es' ? (
        <Tooltip content='es → en' placement='bottom'>
          <div className='rounded-md hover:rounded-md hover:border-gray-200 hover:bg-gray-200 dark:border-slate-200 dark:bg-slate-200 dark:hover:bg-white dark:hover:border-white p-2 transform transition duration-300 hover:cursor-pointer mx-1'>
            <motion.div key='es' whileTap={{ rotate: 45 }}>
              <HiTranslate className='text-2xl cursor-pointer text-gray-800' />
            </motion.div>
          </div>
        </Tooltip>
      ) : (
        <Tooltip content='en → es' placement='bottom'>
          <div className='rounded-md hover:rounded-md hover:border-gray-200 hover:bg-gray-200 dark:border-slate-200 dark:bg-slate-200 dark:hover:bg-white dark:hover:border-white p-2 transform transition duration-300 hover:cursor-pointer mx-1'>
            <motion.div key='en' whileTap={{ rotate: 45 }}>
              <HiTranslate className='text-2xl cursor-pointer text-gray-800' />
            </motion.div>
          </div>
        </Tooltip>
      )}
    </Link>
  )
}

export default LanguageSwitch
