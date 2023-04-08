import { useTranslation } from '@/context/i18n'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import propsDrillingImage from 'public/shopping-cart-app/props-drilling.jpg'
import shoppingCartPic1 from 'public/shopping-cart-app/shopping-cart-demo-1.jpg'
import shoppingCartPic2 from 'public/shopping-cart-app/shopping-cart-demo-2.jpg'
import useContextImage from 'public/shopping-cart-app/useContext.jpg'
import { AiFillGithub, AiOutlineCheckCircle } from 'react-icons/ai'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { RiArrowRightSLine } from 'react-icons/ri'
import Layout from '../components/Layouts/Section'

const ShoppingCartApp: NextPage = () => {
  const { t } = useTranslation()
  return (
    <Layout
      title={t('SHOPPING_CART_APP_SEO_TITLE')}
      description={t('SHOPPING_CART_APP_SEO_DESCRIPTION')}
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
            {t('SHOPPING_CART_APP_H3_SPAN_1')}
          </span>
          <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300 ml-4 align-middle'>
            {t('SHOPPING_CART_APP_H3_SPAN_2')}
          </span>
        </h3>
      </div>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        {t('SHOPPING_CART_APP_P1_1')}
        <a
          href='https://fakestoreapi.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
          aria-label='Link to fakestore api website'
        >
          Fake Store API
        </a>
        {t('SHOPPING_CART_APP_P1_2')}
      </p>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        {t('MOVIES_APP_P2')}
      </p>
      <ul className='py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          <strong>
            <em>useId: </em>
          </strong>
          {t('SHOPPING_CART_APP_UL_L1')}
        </li>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          <strong>
            <em>useContext: </em>
          </strong>
          {t('SHOPPING_CART_APP_UL_L2')}
          <div className='flex justify-center items-center my-10'>
            <figure>
              <Image
                src={propsDrillingImage}
                alt='Props drilling diagram'
                placeholder='blur'
                className='w-[400px] h-auto rounded-lg shadow-lg mx-auto'
              />
              <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
                {t('SHOPPING_CART_APP_UL_L2_FIGCAPTION_1')}
              </figcaption>
            </figure>
          </div>
          <div className='flex justify-center items-center my-10'>
            <figure>
              <Image
                src={useContextImage}
                alt='useContext diagram'
                placeholder='blur'
                className='w-[400px] h-auto rounded-lg shadow-lg mx-auto'
              />
              <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
                {t('SHOPPING_CART_APP_UL_L2_FIGCAPTION_2')}
              </figcaption>
            </figure>
          </div>
        </li>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          <strong>
            <em>useReducer: </em>
          </strong>
          {t('SHOPPING_CART_APP_UL_L3')}
        </li>
      </ul>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          {t('MOVIES_APP_P3_SPAN')}
        </span>
        <a
          href='https://react-vite-shopping-cart.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
          aria-label='Link to the shopping cart application'
        >
          https://react-vite-shopping-cart.vercel.app/{' '}
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
          href='https://github.com/juancgalueweb/react-vite-shopping-cart'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
          aria-label='Link to the github repository of the shopping cart application'
        >
          <AiFillGithub className='text-black dark:text-white text-3xl inline' />
        </a>
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          Front-end
        </span>
        Vite, JavaScript, TailwindCSS, react-icons
      </p>
      <div className='flex justify-center items-center m-3'>
        <figure>
          <Image
            src={shoppingCartPic1}
            alt='movies app - image when you look for a movie clicking a button'
            placeholder='blur'
            className='w-[800px] h-auto rounded-lg shadow-lg mt-10'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
            {t('SHOPPING_CART_APP_FIGCAPTION_1')}
          </figcaption>
        </figure>
      </div>
      <div className='flex justify-center items-center m-3'>
        <figure>
          <Image
            src={shoppingCartPic2}
            alt='movies app - image when you look for a movie while typing'
            placeholder='blur'
            className='w-[800px] h-auto rounded-lg shadow-lg mt-10'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
            {t('SHOPPING_CART_APP_FIGCAPTION_2')}
          </figcaption>
        </figure>
      </div>
    </Layout>
  )
}

export default ShoppingCartApp
