import { diplomasInfo } from '@/data/diplomasInfo'
import useTranslation from '@/hooks/useTranslation'
import Image from 'next/image'
import image from 'public/diplomas/Devslopes_2021.jpeg'
import { BsStopwatchFill } from 'react-icons/bs'
import CalendarSVG from '../Icons/CalendarSVG'
import DiplomaSVG from '../Icons/DiplomaSVG'

const Devslopes = () => {
  const { t } = useTranslation()
  const {
    latest,
    title,
    courseDuration,
    certifyingCompany,
    certificationIssuedDate,
    certificationContent,
    diplomaAWSUrl,
    fetchingPriority
  } = diplomasInfo.devslopes

  return (
    <li className='mb-10 ml-6'>
      <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
        <CalendarSVG />
      </span>
      <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
        {title}
        {latest && (
          <span className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3'>
            {t('LATEST_COURSE')}
          </span>
        )}
      </h3>
      <h4 className='mt-3 mb-2 text-sm font-normal leading-none text-gray-700 dark:text-slate-300 flex items-center'>
        <BsStopwatchFill className='inline text-base mr-1' />
        {t(`${courseDuration}`)}
      </h4>
      <h4 className='mb-2 text-sm font-normal leading-none text-gray-700 dark:text-slate-300'>
        {t(`${certifyingCompany}`)}
      </h4>
      <time className='block mb-2 text-sm font-normal leading-none text-gray-700 dark:text-slate-300'>
        {t(`${certificationIssuedDate}`)}
      </time>
      <p className='mb-4 text-base font-normal text-gray-800 dark:text-slate-200'>
        {t(`${certificationContent}`)}
      </p>
      <Image
        src={image}
        alt={`Diploma image from ${title}`}
        className='rounded-lg shadow-md mb-4 w-[400px] h-auto'
        priority={fetchingPriority}
        placeholder='blur'
      />
      <a
        href={`${diplomaAWSUrl}`}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-slate-100 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
      >
        <DiplomaSVG />
        {t('DIPLOMAS_BUTTON')}
      </a>
    </li>
  )
}

export default Devslopes
