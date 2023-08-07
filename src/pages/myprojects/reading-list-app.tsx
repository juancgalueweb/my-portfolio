import useTranslation from '@/hooks/useTranslation'
import {
  MediaCommunitySkin,
  MediaOutlet,
  MediaPlayer,
  MediaPoster
} from '@vidstack/react'
import { NextPage } from 'next'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { BsBoxArrowInUpRight, BsFillCheckCircleFill } from 'react-icons/bs'
import { RiArrowRightSLine } from 'react-icons/ri'
import 'vidstack/styles/community-skin/video.css'
import 'vidstack/styles/defaults.css'
import Layout from '../components/Layouts/Section'

const ReadingListApp: NextPage = () => {
  const { t } = useTranslation()

  return (
    <Layout
      title={t('READING_LIST_SEO_TITLE')}
      description={t('READING_LIST_DESCRIPTION')}
    >
      <div className='flex justify-start'>
        <h3 className='m-3 text-3xl'>
          <Link
            href='/myprojects'
            scroll={false}
            className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
          >
            {t('READING_LIST_H3')}
          </Link>
          <RiArrowRightSLine className='inline text-3xl dark:text-pink-400 text-blue-700' />
          <span className='text-gray-900 dark:text-slate-200'>
            {t('READING_LIST_H3_SPAN_1')}
          </span>
          <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300 ml-4 align-middle'>
            {t('READING_LIST_H3_SPAN_2')}
          </span>
        </h3>
      </div>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        {t('READING_LIST_P1_1')}
        <a
          href='https://pruebastecnicas.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
          aria-label='Link to Midudev Pruebas Tecnicas website'
        >
          Portal de Pruebas Técnicas de Midudev
        </a>
        {t('READING_LIST_P1_2')}
      </p>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        {t('READING_LIST_P3')}
      </p>
      <ul className='py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 mb-1 text-[#00C500]' />
          {t('READING_LIST_UL_L1')}
        </li>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 mb-1 text-[#00C500]' />
          {t('READING_LIST_UL_L2')}
        </li>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 mb-1 text-[#00C500]' />
          {t('READING_LIST_UL_L3')}
        </li>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 mb-1 text-[#00C500]' />
          {t('READING_LIST_UL_L4')}
        </li>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 mb-1 text-[#00C500]' />
          {t('READING_LIST_UL_L5')}
        </li>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 mb-1 text-[#00C500]' />
          {t('READING_LIST_UL_L6')}
        </li>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 mb-1 text-[#00C500]' />
          {t('READING_LIST_UL_L7')}
        </li>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 mb-1 text-[#00C500]' />
          {t('READING_LIST_UL_L8')}
        </li>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 text-[#00C500]' />
          {t('READING_LIST_UL_L9')}
        </li>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 text-[#00C500]' />
          {t('READING_LIST_UL_L10')}
        </li>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 text-[#00C500]' />
          {t('READING_LIST_UL_L11')}
        </li>
      </ul>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          {t('COCKTAILS_DB_P4_SPAN')}
        </span>
        <a
          href='https://pruebas-tecnicas-01-reading-list-juancgalueweb.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
          aria-label='Link to reading list application'
        >
          https://pruebas-tecnicas-01-reading-list-juancgalueweb.vercel.app/{' '}
          <BsBoxArrowInUpRight className='dark:text-pink-400 inline ml-1' />
        </a>
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          {t('COCKTAILS_DB_P5_SPAN')}
        </span>
        {t('READING_LIST_P4')}
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          {t('COCKTAILS_DB_P7_SPAN')}
        </span>
        <a
          href='https://github.com/juancgalueweb/pruebas-tecnicas-01-reading-list'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
          aria-label='Link to the github repository of the reading list application'
        >
          <AiFillGithub className='text-black dark:text-white text-3xl inline' />
        </a>
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          Front-end
        </span>
        {t('READING_LIST_P4_SPAN')}
      </p>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        {t('READING_LIST_P5')}
      </p>
      <MediaPlayer
        title='Reading list app'
        src='https://d3ml0dc5hiowr8.cloudfront.net/reading_list_preview.mp4'
        poster='https://certifications-and-courses.s3.sa-east-1.amazonaws.com/image-posters/reading-list.webp'
        aspectRatio={16 / 9}
        className='border-0'
      >
        <MediaOutlet>
          <MediaPoster alt='App image preview' />
        </MediaOutlet>
        <MediaCommunitySkin />
      </MediaPlayer>
    </Layout>
  )
}

export default ReadingListApp
