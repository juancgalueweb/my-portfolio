import useTranslation from '@/hooks/useTranslation'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import TodosPic1 from 'public/todos-app/todos-app-1.jpg'
import TodosPic2 from 'public/todos-app/todos-app-2.jpg'
import TodosPic3 from 'public/todos-app/todos-app-3.jpg'
import TodosPic4 from 'public/todos-app/todos-app-4.jpg'
import TodosPic5 from 'public/todos-app/todos-app-5.webp'
import TodosPic6 from 'public/todos-app/todos-app-6.webp'
import { AiFillGithub } from 'react-icons/ai'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { RiArrowRightSLine } from 'react-icons/ri'
import Layout from '../components/Layouts/Section'

const TodosApp: NextPage = () => {
  const { t } = useTranslation()

  return (
    <Layout
      title={t('TODO_APP_SEO_TITLE')}
      description={t('TODO_APP_SEO_DESCRIPTION')}
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
            {t('TODOS_APP_H3_SPAN_1')}
          </span>
          <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300 ml-4 align-middle'>
            {t('TODOS_APP_H3_SPAN_2')}
          </span>
        </h3>
      </div>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        {t('TODOS_APP_P1')}
      </p>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200 font-bold underline underline-offset-4'>
        {t('TODOS_APP_P2')}
      </p>
      <ul className='py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 mb-1 text-[#00C500]' />
          {t('TODOS_APP_UL1_L1')}
        </li>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 mb-1 text-[#00C500]' />
          {t('TODOS_APP_UL1_L2')}
        </li>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 mb-1 text-[#00C500]' />
          {t('TODOS_APP_UL1_L3')}
        </li>
      </ul>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200 font-bold underline underline-offset-4'>
        {t('TODOS_APP_P3')}
      </p>
      <ul className='py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 mb-1 text-[#00C500]' />
          {t('TODOS_APP_UL2_L1')}
        </li>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 mb-1 text-[#00C500]' />
          {t('TODOS_APP_UL2_L2')}
        </li>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 mb-1 text-[#00C500]' />
          {t('TODOS_APP_UL2_L3')}
        </li>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 mb-1 text-[#00C500]' />
          {t('TODOS_APP_UL2_L4')}
        </li>
        <li>
          <BsFillCheckCircleFill className='inline mr-2 mb-1 text-[#00C500]' />
          {t('TODOS_APP_UL2_L5')}
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
          href='https://github.com/juancgalueweb/todo-app-ts'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
          aria-label='Link to the github repository of the MERN library application'
        >
          <AiFillGithub className='text-black dark:text-white text-3xl inline' />
        </a>
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          Front-end
        </span>
        React, Vite, Typescript, axios, react-pin-field, react-router-dom,
        react-toastify, todomvc-app-css
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          Back-end
        </span>
        Typescript, bcryptjs, cors, dotenv, express, isemail, jsonwebtoken,
        SendinBlue, MongoDB
      </p>
      <div className='my-10 mx-3'>
        <figure className='flex justify-center items-center flex-col'>
          <Image
            src={TodosPic1}
            alt='Todos demo app pic 1'
            className='w-[500px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight'>
            {t('TODOS_APP_FIGCAPTION_1')}
          </figcaption>
        </figure>
      </div>
      <div className='my-10 mx-3'>
        <figure className='flex justify-center items-center flex-col'>
          <Image
            src={TodosPic2}
            alt='Todos demo app pic 2'
            className='w-[500px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight'>
            {t('TODOS_APP_FIGCAPTION_2')}
          </figcaption>
        </figure>
      </div>
      <div className='my-10 mx-3'>
        <figure className='flex justify-center items-center flex-col'>
          <Image
            src={TodosPic3}
            alt='Todos demo app pic 3'
            className='w-[500px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight'>
            {t('TODOS_APP_FIGCAPTION_3')}
          </figcaption>
        </figure>
      </div>
      <div className='my-10 mx-3'>
        <figure className='flex justify-center items-center flex-col'>
          <Image
            src={TodosPic4}
            alt='Todos demo app pic 4'
            className='w-[500px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight'>
            {t('TODOS_APP_FIGCAPTION_4')}
          </figcaption>
        </figure>
      </div>
      <div className='my-10 mx-3'>
        <figure className='flex justify-center items-center flex-col'>
          <Image
            src={TodosPic5}
            alt='Todos demo app pic 5'
            className='w-[500px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight'>
            {t('TODOS_APP_FIGCAPTION_5')}
          </figcaption>
        </figure>
      </div>
      <div className='my-10 mx-3'>
        <figure className='flex justify-center items-center flex-col'>
          <Image
            src={TodosPic6}
            alt='Todos demo app pic 6'
            className='w-[500px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight'>
            {t('TODOS_APP_FIGCAPTION_6')}
          </figcaption>
        </figure>
      </div>
    </Layout>
  )
}

export default TodosApp
