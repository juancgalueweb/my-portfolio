import useTranslation from '@/hooks/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import harryPotterQuiz from 'public/harry-potter-quiz-preview.jpg'
import { type FC } from 'react'
import { BsFillCalendar2CheckFill } from 'react-icons/bs'
import MaterialUIBadge from '../Badges/MaterialUIBadge'
import ReactBadge from '../Badges/ReactBadge'
import TypescriptBadge from '../Badges/TypescriptBadge'
import ViteBadge from '../Badges/ViteBadge'
import ZustandBadge from '../Badges/ZustandBadge'

const HarryPotterQuiz: FC = () => {
  const { t } = useTranslation()

  return (
    <div className='basis-1/3 flex-1 mx-3 my-5 hover:scale-[1.01] transform transition duration-300 relative'>
      <div className='absolute -top-7 left-2 w-full flex gap-2'>
        <ReactBadge />
        <ViteBadge />
        <TypescriptBadge />
        <ZustandBadge />
        <MaterialUIBadge />
      </div>
      <Link
        href='/myprojects/harry-potter-quiz'
        scroll={false}
        className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-dark-mode-700 dark:border-gray-dark-mode-500 dark:hover:bg-gray-dark-mode-500'
      >
        <Image
          src={harryPotterQuiz}
          alt='Harry Potter Quiz home screen image'
          placeholder='blur'
          className='rounded'
          priority
        />
        <h3 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-4'>
          {t('PORTFOLIO_P9_TITLE')}
        </h3>
        <p className='font-normal text-gray-700 dark:text-gray-400'>
          {t('PORTFOLIO_P9_CONTENT')}
        </p>
        <p className='font-bold text-gray-900 dark:text-white mt-4 flex items-center'>
          <BsFillCalendar2CheckFill className='inline-block text-xl mr-2' />{' '}
          <span>{t('HPQ_APP_H3_SPAN_2')}</span>
        </p>
      </Link>
    </div>
  )
}

export default HarryPotterQuiz
