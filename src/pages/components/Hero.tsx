import { useTranslation } from '@/context/i18n'
import useTyped, { TypePhase } from '@/hooks/useTyped'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import PictureOfMe from 'public/Me.webp'
import { FC } from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { RiArrowRightSLine } from 'react-icons/ri'

const heroTitle = ['MERN Full-stack Developer', 'Desarrollador full-stack MERN']

const Hero: FC = () => {
  const { t } = useTranslation()
  const { typed, selectedTyped, phase } = useTyped(heroTitle)

  return (
    <>
      <h2 className='text-5xl py-2 m-3 text-teal-900 font-medium md:text-6xl dark:text-[#20C997] text-center'>
        Juan Carlos Galu&eacute;
      </h2>
      <h3
        className={cn(
          'text-2xl py-2 m-3 md-text-3xl text-gray-900 dark:text-slate-200 text-center',
          {
            ['end-cursor']: phase !== TypePhase.Deleting,
            ['blinking']: phase === TypePhase.Pausing
          }
        )}
        aria-label={selectedTyped}
      >
        {typed}
      </h3>
      <div className='relative mx-auto bg-gradient-to-b from-teal-500 dark:from-green-300 rounded-lg my-5 overflow-hidden w-72 h-80 md:w-80 md:h-96'>
        <Image src={PictureOfMe} alt='My profile picture' placeholder='blur' />
      </div>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-xl dark:text-slate-200 flex items-center'>
        <IoLocationSharp className='inline text-red-600 text-2xl lg:-mr-4' />{' '}
        Santiago de Chile
      </p>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-xl dark:text-slate-200'>
        {t('HERO_P_1')}
      </p>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-xl dark:text-slate-200'>
        {t('HERO_P_2')}
      </p>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-xl dark:text-slate-200'>
        {t('HERO_P_3')}
      </p>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-xl dark:text-slate-200'>
        {t('HERO_P_4')}
      </p>
      <div className='flex justify-center'>
        <Link
          href='/myprojects'
          className='flex justify-center items-center dark:text-gray-900 text-white hover:bg-[#2C7A7B] bg-[#1D8482] dark:bg-[#88cccb] dark:hover:bg-[#50D0C4] font-medium rounded-lg text-base px-5 py-2.5 mr-2 my-2 w-48'
          scroll={false}
        >
          {t('HERO_BUTTON')} <RiArrowRightSLine className='inline text-xl' />{' '}
        </Link>
      </div>
    </>
  )
}

export default Hero
