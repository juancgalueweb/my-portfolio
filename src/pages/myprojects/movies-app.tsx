import { useTranslation } from '@/context/i18n'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import moviesPic1 from 'public/movies-app/buscador-de-peliculas-1.jpg'
import moviesPic2 from 'public/movies-app/buscador-de-peliculas-2.jpg'
import { AiFillGithub, AiOutlineCheckCircle } from 'react-icons/ai'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { RiArrowRightSLine } from 'react-icons/ri'
import Layout from '../components/Layouts/Section'

const MoviesApp: NextPage = () => {
  const { t } = useTranslation()
  return (
    <Layout
      title={t('MOVIES_APP_SEO_TITLE')}
      description={t('MOVIES_APP_SEO_DESCRIPTION')}
    >
      <div className='flex justify-start'>
        <h3 className='m-3 text-3xl'>
          <Link
            href='/myprojects'
            scroll={false}
            className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
          >
            {t('LIBRARY_APP_H3')}
          </Link>
          <RiArrowRightSLine className='inline text-3xl text-blue-700 dark:text-pink-400' />
          <span className='text-gray-900 dark:text-slate-200'>
            {t('MOVIES_APP_H3_SPAN_1')}
          </span>
          <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300 ml-4 align-middle'>
            {t('MOVIES_APP_H3_SPAN_2')}
          </span>
        </h3>
      </div>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        {t('MOVIES_APP_P1_1')}
        <a
          href='https://www.omdbapi.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
          aria-label='Link to omdbapi website'
        >
          OMDB Api
        </a>
        {t('MOVIES_APP_P1_2')}
      </p>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        {t('MOVIES_APP_P2')}
      </p>
      <ul className='py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          <strong>
            <em>useRef: </em>
          </strong>
          {t('MOVIES_APP_UL_L1')}
        </li>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          <strong>
            <em>useMemo: </em>
          </strong>
          {t('MOVIES_APP_UL_L2')}
        </li>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          <strong>
            <em>useCallback: </em>
          </strong>
          {t('MOVIES_APP_UL_L3')}
        </li>
      </ul>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          {t('MOVIES_APP_P3_SPAN')}
        </span>
        <a
          href='https://buscador-de-peliculas-juancgalueweb.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
          aria-label='Link to the movie search application'
        >
          https://buscador-de-peliculas-juancgalueweb.vercel.app/{' '}
          <BsBoxArrowInUpRight className='dark:text-pink-400 inline ml-1' />
        </a>
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          {t('MOVIES_APP_P4_SPAN')}
        </span>
        Vercel
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          {t('MOVIES_APP_P5_SPAN')}
        </span>
        <a
          href='https://github.com/juancgalueweb/buscador-de-peliculas'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
          aria-label='Link to the github repository of the movie search application'
        >
          <AiFillGithub className='text-black dark:text-white text-3xl inline' />
        </a>
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          Front-end
        </span>
        Next.js, JavaScript, TailwindCSS, react-icons, just-debounce-it
      </p>
      <div className='my-10 mx-3'>
        <figure className='flex justify-center items-center flex-col'>
          <Image
            src={moviesPic1}
            alt='movies app - image when you look for a movie clicking a button'
            placeholder='blur'
            className='w-[800px] h-auto rounded-lg shadow-lg mt-10'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight'>
            {t('MOVIES_APP_FIGCAPTION_1')}
          </figcaption>
        </figure>
      </div>
      <div className='my-10 mx-3'>
        <figure className='flex justify-center items-center flex-col'>
          <Image
            src={moviesPic2}
            alt='movies app - image when you look for a movie while typing'
            placeholder='blur'
            className='w-[800px] h-auto rounded-lg shadow-lg mt-10'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight'>
            {t('MOVIES_APP_FIGCAPTION_2')}
          </figcaption>
        </figure>
      </div>
    </Layout>
  )
}

export default MoviesApp
