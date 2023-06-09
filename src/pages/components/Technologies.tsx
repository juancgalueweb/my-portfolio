import useTranslation from '@/hooks/useTranslation'
import { FC } from 'react'
import BackEnd from './BackEnd'
import FrontEnd from './FrontEnd'
import OtherTools from './OtherTools'

const Technologies: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <h3 className='text-3xl m-3 text-teal-900 dark:text-[#20C997] mb-10'>
        {t('TECHNOLOGIES_H3')}
      </h3>
      <div className='flex flex-col items-center'>
        <FrontEnd />
        <BackEnd />
        <OtherTools />
      </div>
    </>
  )
}

export default Technologies
