import { useTranslation } from '@/context/i18n'
import Image from 'next/image'
import { useRouter } from 'next/router'
import PictureOfMe from 'public/Me.webp'
import { FC } from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

const Hero: FC = () => {
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <>
      <h2 className='text-5xl py-2 m-3 text-teal-900 font-medium md:text-6xl dark:text-[#20C997] text-center'>
        Juan Carlos Galu&eacute;
      </h2>
      <h3 className='text-2xl py-2 m-3 md-text-3xl text-gray-900 dark:text-slate-200 text-center'>
        {t('HERO_TITLE')}
      </h3>
      <div className='relative mx-auto bg-gradient-to-b from-teal-500 dark:from-green-300 rounded-lg my-5 overflow-hidden w-72 h-80 md:w-80 md:h-96'>
        <Image src={PictureOfMe} alt='My profile picture' placeholder='blur' />
      </div>
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
        {t('HERO_P_4')}{' '}
        <span className='text-pink-600 dark:text-pink-400'>
          {t('HERO_P_4_SPAN')}
        </span>
      </p>
      <div className='flex justify-center items-center'>
        <button
          onClick={() => router.push('/myprojects')}
          type='button'
          className='dark:text-gray-900 text-white hover:bg-[#2C7A7B] bg-[#319795] dark:bg-[#88cccb] dark:hover:bg-[#50D0C4] font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2'
        >
          {t('HERO_BUTTON')} <RiArrowRightSLine className='inline text-xl' />{' '}
        </button>
      </div>
    </>
  )
}

export default Hero
