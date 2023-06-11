import useTranslation from '@/hooks/useTranslation'
import useTyped from '@/hooks/useTyped'
import { TypePhase } from '@/types.d'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PictureOfMe from 'public/Me2.webp'
import { FC } from 'react'
import { FcDocument } from 'react-icons/fc'
import { IoLocationSharp } from 'react-icons/io5'
import { RiArrowRightSLine } from 'react-icons/ri'

const heroTitle = ['MERN Full-stack Developer', 'Desarrollador full-stack MERN']

const Hero: FC = () => {
  const { t } = useTranslation()
  const { locale } = useRouter()
  const { typed, selectedTyped, phase } = useTyped(heroTitle)

  return (
    <>
      <h1 className='text-5xl py-2 m-3 text-teal-900 font-medium md:text-6xl dark:text-[#20C997] text-center'>
        Juan Carlos Galu&eacute;
      </h1>
      <h2
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
      </h2>
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
      <div className='flex justify-around'>
        <a
          href={
            locale === 'es'
              ? 'https://certifications-and-courses.s3.sa-east-1.amazonaws.com/CV/CV+Juan+Galue%CC%81+wd+(2023)_Esp.pdf'
              : 'https://certifications-and-courses.s3.sa-east-1.amazonaws.com/CV/CV+Juan+Galue%CC%81+wd+(2023)_Eng.pdf'
          }
          target='_blank'
          rel='noopener noreferrer'
          className='flex justify-center items-center font-medium rounded-lg text-base px-5 py-2.5 mr-2 my-2 w-fit text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80'
        >
          <FcDocument className='inline mr-1 text-2xl' />
          {t('NAVBAR_RESUME_BUTTON')}
        </a>
        <Link
          href='/myprojects'
          className='flex justify-center items-center font-medium rounded-lg text-base px-5 py-2.5 mr-2 my-2 w-fit text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80'
          scroll={false}
        >
          {t('HERO_BUTTON')}{' '}
          <RiArrowRightSLine className='inline mr-1 text-2xl' />{' '}
        </Link>
      </div>
    </>
  )
}

export default Hero
