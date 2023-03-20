import { useTranslation } from '@/context/i18n'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import FrontEnd from './FrontEnd'

const Technologies: FC = () => {
  const { t } = useTranslation()
  const BackEnd = dynamic(() => import('./BackEnd'))
  const OtherTools = dynamic(() => import('./OtherTools'))

  return (
    <>
      <h3 className='text-3xl m-3 text-gray-900 dark:text-slate-200 mb-10'>
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
