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
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { RiArrowRightSLine } from 'react-icons/ri'
import 'vidstack/styles/community-skin/video.css'
import 'vidstack/styles/defaults.css'
import Layout from '../components/Layouts/Section'

const ChatAppDetail: NextPage = () => {
  const { t } = useTranslation()

  return (
    <Layout
      title={t('CHATAPP_SEO_TITLE')}
      description={t('CHAT_APP_SEO_DESCRIPTION')}
    >
      <div className='flex justify-start'>
        <h3 className='m-3 text-3xl'>
          <Link
            href='/myprojects'
            scroll={false}
            className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
          >
            {t('WINE_APP_H3')}
          </Link>
          <RiArrowRightSLine className='inline text-3xl text-blue-700 dark:text-pink-400' />
          <span className='text-gray-900 dark:text-slate-200'>
            {t('CHAT_APP_H3_SPAN_1')}
          </span>
          <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300 ml-4 align-middle'>
            {t('CHAT_APP_H3_SPAN_2')}
          </span>
        </h3>
      </div>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        {t('CHAT_APP_P1')}
      </p>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        {t('CHAT_APP_P2')}
      </p>
      <ul className='py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 mb-1 text-[#00C500]' />
          {t('CHAT_APP_UL_L1')}
        </li>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 mb-1 text-[#00C500]' />
          {t('CHAT_APP_UL_L2')}
        </li>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 mb-1 text-[#00C500]' />
          {t('CHAT_APP_UL_L3')}
        </li>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 mb-1 text-[#00C500]' />
          {t('CHAT_APP_UL_L4')}
        </li>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 mb-1 text-[#00C500]' />
          {t('CHAT_APP_UL_L5')}
        </li>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 mb-1 text-[#00C500]' />
          {t('CHAT_APP_UL_L6')}
        </li>
      </ul>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          {t('LIBRARY_APP_P3_SPAN')}
        </span>
        <span className=' text-[#B10000] dark:text-[#FF7172]'>
          {t('DEPLOY_NOT_AVAILABLE')}
        </span>
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          {t('LIBRARY_APP_P5_SPAN')}
        </span>
        <a
          href='https://github.com/juancgalueweb/chat-app'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
          aria-label='Link to the github repository of the chat app'
        >
          <AiFillGithub className='text-black dark:text-white text-3xl inline' />
        </a>
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          Front-end
        </span>
        React, Vite, Javascript, Chakra-UI, Bootstrap, socket-io client, Wouter,
        Zustand
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          Back-end
        </span>
        Javascript, cors, dotenv, express, node, socket-io, mongoose, MongoDB
      </p>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        {t('CHAT_APP_P3')}
      </p>
      <MediaPlayer
        title='Chat app'
        src='https://d3ml0dc5hiowr8.cloudfront.net/chat-app-demo-w-music.mp4'
        poster='https://certifications-and-courses.s3.sa-east-1.amazonaws.com/image-posters/chat-app-preview.webp'
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

export default ChatAppDetail
