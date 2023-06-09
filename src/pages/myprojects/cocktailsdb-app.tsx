import useTranslation from '@/hooks/useTranslation'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CocktailPic1 from 'public/cocktaildb-app/cocktaildb-demo-1.jpg'
import CocktailPic2 from 'public/cocktaildb-app/cocktaildb-demo-2.jpg'
import CocktailPic3 from 'public/cocktaildb-app/cocktaildb-demo-3.jpg'
import CocktailPic4 from 'public/cocktaildb-app/cocktaildb-demo-4.jpg'
import { AiFillGithub, AiOutlineCheckCircle } from 'react-icons/ai'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { RiArrowRightSLine } from 'react-icons/ri'
import Layout from '../components/Layouts/Section'

const CocktailsDbApp: NextPage = () => {
  const { t } = useTranslation()

  return (
    <Layout
      title={t('COCKTAILS_DB_SEO_TITLE')}
      description={t('COCKTAILS_DB_DESCRIPTION')}
    >
      <div className='flex justify-start'>
        <h3 className='m-3 text-3xl'>
          <Link
            href='/myprojects'
            scroll={false}
            className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
          >
            {t('COCKTAILS_DB_H3')}
          </Link>
          <RiArrowRightSLine className='inline text-3xl dark:text-pink-400 text-blue-700' />
          <span className='text-gray-900 dark:text-slate-200'>
            {t('COCKTAILS_DB_H3_SPAN_1')}
          </span>
          <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300 ml-4 align-middle'>
            {t('COCKTAILS_DB_H3_SPAN_2')}
          </span>
        </h3>
      </div>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        {t('COCKTAILS_DB_P1_1')}
        <a
          href='https://www.thecocktaildb.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
          aria-label='Link to the cocktaildb website'
        >
          TheCocktailDB
        </a>
        {t('COCKTAILS_DB_P1_2')}
      </p>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        {t('COCKTAILS_DB_P2_1')}
        <a
          href='https://plaiceholder.co/'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
          aria-label='Link to the plaiceholder website'
        >
          Plaiceholder
        </a>
        {t('COCKTAILS_DB_P2_2')}
      </p>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        {t('COCKTAILS_DB_P3')}
      </p>
      <ul className='py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          {t('COCKTAILS_DB_UL_L1')}
        </li>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          {t('COCKTAILS_DB_UL_L2')}
        </li>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          {t('COCKTAILS_DB_UL_L3')}
        </li>
      </ul>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          {t('COCKTAILS_DB_P4_SPAN')}
        </span>
        <a
          href='https://cocktailsdb.juancgalue-web.cl/'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
          aria-label='Link to the cocktails DB application'
        >
          https://cocktailsdb.juancgalue-web.cl/{' '}
          <BsBoxArrowInUpRight className='dark:text-pink-400 inline ml-1' />
        </a>
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          {t('COCKTAILS_DB_P5_SPAN')}
        </span>
        {t('COCKTAILS_DB_P5')}
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          {t('COCKTAILS_DB_P6_SPAN')}
        </span>
        <a
          href='https://www.linkedin.com/pulse/usando-getserversideprops-getstaticprops-y-en-nextjs-con-galu%C3%A9/'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4 leading-8'
        >
          {t('COCKTAILS_DB_P6')}
          <BsBoxArrowInUpRight className='dark:text-pink-400 inline ml-1' />
        </a>
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          {t('COCKTAILS_DB_P7_SPAN')}
        </span>
        <a
          href='https://github.com/juancgalueweb/cocktailsdb-nextjs'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
          aria-label='Link to the github repository of the cocktails DB application'
        >
          <AiFillGithub className='text-black dark:text-white text-3xl inline' />
        </a>
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          Front-end
        </span>
        {t('COCKTAILS_DB_P8_SPAN')}
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          Back-end
        </span>
        {t('COCKTAILS_DB_P9_SPAN')}
      </p>
      <div className='my-10 mx-3'>
        <figure className='flex justify-center items-center flex-col'>
          <Image
            src={CocktailPic1}
            alt='cocktail demo app pic 1'
            className='w-[800px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight'>
            {t('COCKTAILS_DB_FIGCAPTION_1')}
          </figcaption>
        </figure>
      </div>
      <div className='my-10 mx-3'>
        <figure className='flex justify-center items-center flex-col'>
          <Image
            src={CocktailPic2}
            alt='cocktail demo app pic 2'
            className='w-[800px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight'>
            {t('COCKTAILS_DB_FIGCAPTION_2')}
          </figcaption>
        </figure>
      </div>
      <div className='my-10 mx-3'>
        <figure className='flex justify-center items-center flex-col'>
          <Image
            src={CocktailPic3}
            alt='cocktail demo app pic 3'
            className='w-[800px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight'>
            {t('COCKTAILS_DB_FIGCAPTION_3')}
          </figcaption>
        </figure>
      </div>
      <div className='my-10 mx-3'>
        <figure className='flex justify-center items-center flex-col'>
          <Image
            src={CocktailPic4}
            alt='cocktail demo app pic 4'
            className='w-[800px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight'>
            {t('COCKTAILS_DB_FIGCAPTION_4')}
          </figcaption>
        </figure>
      </div>
    </Layout>
  )
}

export default CocktailsDbApp
