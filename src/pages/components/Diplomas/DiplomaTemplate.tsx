import useTranslation from '@/hooks/useTranslation'
import { type DiplomaTemplateProps } from '@/types.d'
import Image from 'next/image'
import { BsStopwatchFill } from 'react-icons/bs'

const DiplomaTemplate = ({
  latest,
  title,
  courseDuration,
  certifyingCompany,
  certificationIssuedDate,
  certificationContent,
  diplomaImageExternalUrl,
  diplomaAWSUrl,
  fetchingPriority
}: DiplomaTemplateProps) => {
  const { t } = useTranslation()

  return (
    <li className='mb-10 ml-6'>
      <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
        <svg
          aria-hidden='true'
          className='w-3 h-3 text-blue-800 dark:text-blue-300'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
            clipRule='evenodd'
          ></path>
        </svg>
      </span>
      <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
        <span dangerouslySetInnerHTML={{ __html: title }}></span>
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
      <h4
        className='mb-2 text-sm font-normal leading-none text-gray-700 dark:text-slate-300'
        dangerouslySetInnerHTML={{ __html: t(`${certifyingCompany}`) }}
      ></h4>
      <time className='block mb-2 text-sm font-normal leading-none text-gray-700 dark:text-slate-300'>
        {t(`${certificationIssuedDate}`)}
      </time>
      <p className='mb-4 text-base font-normal text-gray-800 dark:text-slate-200'>
        {t(`${certificationContent}`)}
      </p>
      <Image
        src={diplomaImageExternalUrl}
        alt={`Diploma image from ${title}`}
        className='rounded-lg shadow-md mb-4 w-auto h-auto'
        priority={fetchingPriority}
        width={400}
        height={290}
      />
      <a
        href={`${diplomaAWSUrl}`}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-slate-100 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
      >
        <svg
          className='w-4 h-4 mr-2'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z'
            clipRule='evenodd'
          ></path>
        </svg>{' '}
        {t('DIPLOMAS_BUTTON')}
      </a>
    </li>
  )
}

export default DiplomaTemplate
