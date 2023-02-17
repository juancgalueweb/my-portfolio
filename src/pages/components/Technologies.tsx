import { useTranslation } from '@/context/i18n'
import { FC } from 'react'
import BackEnd from './BackEnd'
import FrontEnd from './FrontEnd'
import OtherTools from './OtherTools'

const Technologies: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <h3 className='text-3xl m-3 text-gray-900 dark:text-slate-200 mb-10'>
        {t('TECHNOLOGIES_H3')}
      </h3>
      <div className='flex flex-col items-center mb-10'>
        <FrontEnd />
        <BackEnd />
        <OtherTools />
      </div>
    </>
  )
}

export default Technologies
