import { useTranslation } from '@/context/i18n'
import { Card } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import libraryApp from 'public/biblioteca-mern.webp'
import cocktailsApp from 'public/cocktails-db.webp'
import myWinesApp from 'public/mywines-low.jpg'
import tictactoeApp from 'public/tic-tac-toe.webp'

import { FC } from 'react'

const Portfolio: FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <h3 className='m-3 text-3xl text-gray-900 dark:text-slate-200'>
        {t('PORTFOLIO_H3')}
      </h3>
      <div className='flex flex-col place-items-start gap-5 py-5 lg:flex-row lg:flex-wrap'>
        <div className='basis-1/3 flex-1 m-3 hover:scale-[1.01] transform transition duration-300'>
          <Link href='/myprojects/tic-tac-toe-app' scroll={false}>
            <Card>
              <Image
                src={tictactoeApp}
                alt='tic-tac-toe app home screen image'
                placeholder='blur'
                className='rounded'
              />
              <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                {t('PORTFOLIO_P1_TITLE')}
              </h5>
              <p className='font-normal text-gray-700 dark:text-gray-400'>
                {t('PORTFOLIO_P1_CONTENT')}
              </p>
            </Card>
          </Link>
        </div>
        <div className='basis-1/3 flex-1 m-3 hover:scale-[1.01] transform transition duration-300'>
          <Link href='/myprojects/cocktailsdb-app' scroll={false}>
            <Card>
              <Image
                src={cocktailsApp}
                alt='cocktails db app home screen'
                placeholder='blur'
                className='rounded'
              />
              <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                {t('PORTFOLIO_P2_TITLE')}
              </h5>
              <p className='font-normal text-gray-700 dark:text-gray-400'>
                {t('PORTFOLIO_P2_CONTENT')}
              </p>
            </Card>
          </Link>
        </div>
        <div className='basis-1/3 flex-1 m-3 hover:scale-[1.01] transform transition duration-300'>
          <Link href='/myprojects/library-app' scroll={false}>
            <Card>
              <Image
                src={libraryApp}
                alt='library app home screen image'
                placeholder='blur'
                className='rounded'
              />
              <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                {t('PORTFOLIO_P3_TITLE')}
              </h5>
              <p className='font-normal text-gray-700 dark:text-gray-400'>
                {t('PORTFOLIO_P3_CONTENT')}
              </p>
            </Card>
          </Link>
        </div>
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
      </div>
    </>
  )
}

export default Portfolio
