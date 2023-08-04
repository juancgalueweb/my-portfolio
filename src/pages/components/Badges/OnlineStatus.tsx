import useTranslation from '@/hooks/useTranslation'

const OnlineStatus = () => {
  const { t } = useTranslation()

  return (
    <div className='flex justify-center items-center mx-1'>
      <span className='text-gray-900 dark:text-white mr-3'>
        {t('DEPLOYMENT')}
      </span>
      <span className='relative flex h-4 w-4'>
        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
        <span className='relative inline-flex rounded-full h-4 w-4 bg-green-500'></span>
      </span>
    </div>
  )
}

export default OnlineStatus
