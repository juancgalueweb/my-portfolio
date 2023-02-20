import { useTranslation } from '@/context/i18n'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import LibraryPic1 from 'public/library-app/biblioteca-mern-app-1.jpg'
import LibraryPic2 from 'public/library-app/biblioteca-mern-app-2.jpg'
import LibraryPic3 from 'public/library-app/biblioteca-mern-app-3.jpg'
import LibraryPic4 from 'public/library-app/biblioteca-mern-app-4.jpg'
import LibraryPic5 from 'public/library-app/biblioteca-mern-app-5.jpg'
import LibraryPic6 from 'public/library-app/biblioteca-mern-app-6.jpg'
import { AiFillGithub, AiOutlineCheckCircle } from 'react-icons/ai'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { RiArrowRightSLine } from 'react-icons/ri'
import Layout from '../components/Layouts/Section'

const LibraryApp: NextPage = () => {
  const { t } = useTranslation()

  return (
    <Layout
      title={t('LIBRARY_APP_SEO_TITLE')}
      description={t('LIBRARY_APP_DESCRIPTION')}
    >
      <div className='flex justify-start'>
        <h3 className='m-3 text-3xl'>
          <Link
            href='/myprojects'
            scroll={false}
            className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
          >
            {t('LIBRARY_APP_H3')}{' '}
          </Link>
          <RiArrowRightSLine className='inline text-3xl text-blue-700 dark:text-pink-400' />
          <span className='text-gray-900 dark:text-slate-200'>
            {t('LIBRARY_APP_H3_SPAN_1')}
          </span>
          <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300 ml-4 align-middle'>
            {t('LIBRARY_APP_H3_SPAN_2')}
          </span>
        </h3>
      </div>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        {t('LIBRARY_APP_P1')}
      </p>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        {t('LIBRARY_APP_P2')}
      </p>
      <ul className='py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          {t('LIBRARY_APP_UL_L1')}
        </li>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          {t('LIBRARY_APP_UL_L2')}
        </li>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          {t('LIBRARY_APP_UL_L3')}
        </li>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          {t('LIBRARY_APP_UL_L4')}
        </li>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          {t('LIBRARY_APP_UL_L5')}
        </li>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          {t('LIBRARY_APP_UL_L6')}
        </li>
      </ul>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          {t('LIBRARY_APP_P3_SPAN')}
        </span>
        <a
          href='https://biblioteca-mern.juancgalue-web.cl/'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
        >
          https://biblioteca-mern.juancgalue-web.cl/{' '}
          <BsBoxArrowInUpRight className='dark:text-pink-400 inline ml-1' />
        </a>
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          {t('LIBRARY_APP_P4_SPAN')}
        </span>
        {t('LIBRARY_APP_P4')}
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          {t('LIBRARY_APP_P5_SPAN')}
        </span>
        <a
          href='https://github.com/juancgalueweb/biblioteca_con_roles'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
        >
          <AiFillGithub className='text-black dark:text-white text-3xl inline' />
        </a>
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          Front-end
        </span>
        React, JavaScript, AntDesign, FontAwesome, axios, bootstrap, formik,
        moment, sweetalert, yup
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          Back-end
        </span>
        Bcryptjs, cors, dotenv, express, jsonwebtoken, SendinBlue, MongoDB
      </p>
      <div className='flex justify-center items-center my-10 mx-3'>
        <figure>
          <Image
            src={LibraryPic1}
            alt='Library demo app pic 1'
            className='w-[800px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
            {t('LIBRARY_APP_FIGCAPTION_1')}
          </figcaption>
        </figure>
      </div>
      <div className='flex justify-center items-center my-10 mx-3'>
        <figure>
          <Image
            src={LibraryPic2}
            alt='Library demo app pic 2'
            className='w-[800px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
            {t('LIBRARY_APP_FIGCAPTION_2')}
          </figcaption>
        </figure>
      </div>
      <div className='flex justify-center items-center my-10 mx-3'>
        <figure>
          <Image
            src={LibraryPic3}
            alt='Library demo app pic 3'
            className='w-[800px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
            {t('LIBRARY_APP_FIGCAPTION_3')}
          </figcaption>
        </figure>
      </div>
      <div className='flex justify-center items-center my-10 mx-3'>
        <figure>
          <Image
            src={LibraryPic4}
            alt='Library demo app pic 4'
            className='w-[800px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
            {t('LIBRARY_APP_FIGCAPTION_4')}
          </figcaption>
        </figure>
      </div>
      <div className='flex justify-center items-center my-10 mx-3'>
        <figure>
          <Image
            src={LibraryPic5}
            alt='Library demo app pic 5'
            className='w-[800px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
            {t('LIBRARY_APP_FIGCAPTION_5')}
          </figcaption>
        </figure>
      </div>
      <div className='flex justify-center items-center my-10 mx-3'>
        <figure>
          <Image
            src={LibraryPic6}
            alt='Library demo app pic 6'
            className='w-[800px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
            {t('LIBRARY_APP_FIGCAPTION_6')}
          </figcaption>
        </figure>
      </div>
    </Layout>
  )
}

export default LibraryApp
