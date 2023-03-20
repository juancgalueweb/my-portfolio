import { useTranslation } from '@/context/i18n'
import { Card } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import moviesApp from 'public/buscador-de-libros-preview.jpg'

const MoviesApp = () => {
  const { t } = useTranslation()

  return (
    <div className='basis-1/3 flex-1 m-3 hover:scale-[1.01] transform transition duration-300'>
      <Link href='/myprojects/movies-app' scroll={false}>
        <Card>
          <Image
            src={moviesApp}
            alt='Search movies app home screen image'
            placeholder='blur'
            className='rounded'
          />
          <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {t('PORTFOLIO_P5_TITLE')}
          </h5>
          <p className='font-normal text-gray-700 dark:text-gray-400'>
            {t('PORTFOLIO_P5_CONTENT')}
          </p>
        </Card>
      </Link>
    </div>
  )
}

export default MoviesApp
