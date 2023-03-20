import { useTranslation } from '@/context/i18n'
import { Card } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import myWinesApp from 'public/mywines-low.jpg'

const MyWinesApp = () => {
  const { t } = useTranslation()

  return (
    <div className='basis-1/3 flex-1 m-3 hover:scale-[1.01] transform transition duration-300'>
      <Link href='/myprojects/wine-app' scroll={false}>
        <Card>
          <Image
            src={myWinesApp}
            alt='mywines app home screen image'
            placeholder='blur'
            className='rounded'
          />
          <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {t('PORTFOLIO_P4_TITLE')}
          </h5>
          <p className='font-normal text-gray-700 dark:text-gray-400'>
            {t('PORTFOLIO_P4_CONTENT')}
          </p>
        </Card>
      </Link>
    </div>
  )
}

export default MyWinesApp
