import useTranslation from '@/hooks/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import reactShoppingCart from 'public/react-shopping-cart.jpg'
import { type FC } from 'react'
import { BsFillCalendar2CheckFill } from 'react-icons/bs'
import JavascriptBadge from '../Badges/JavascriptBadge'
import OnlineStatus from '../Badges/OnlineStatus'
import ReactBadge from '../Badges/ReactBadge'
import TailwindBadge from '../Badges/TailwindBadge'
import ViteBadge from '../Badges/ViteBadge'

const ShoppingCart: FC = () => {
  const { t } = useTranslation()

  return (
    <div className='basis-1/3 flex-1 mx-3 my-5 hover:scale-[1.01] transform transition duration-300 relative'>
      <div className='absolute -top-7 left-2 w-full flex gap-2'>
        <ReactBadge />
        <ViteBadge />
        <JavascriptBadge />
        <TailwindBadge />
      </div>
      <Link
        href='/myprojects/shopping-cart-app'
        scroll={false}
        className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-dark-mode-700 dark:border-gray-dark-mode-500 dark:hover:bg-gray-dark-mode-500 lg:h-[460px]'
      >
        <div className='flex flex-col justify-between lg:h-[420px]'>
          <header>
            <Image
              src={reactShoppingCart}
              alt='Shopping cart app home screen image'
              placeholder='blur'
              className='rounded'
            />
            <h3 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-4'>
              {t('PORTFOLIO_P6_TITLE')}
            </h3>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              {t('PORTFOLIO_P6_CONTENT')}
            </p>
          </header>
          <footer className='flex justify-between items-center mt-4'>
            <p className='font-bold text-gray-900 dark:text-white flex items-center'>
              <BsFillCalendar2CheckFill className='inline-block text-xl mr-2' />{' '}
              <span>{t('SHOPPING_CART_APP_H3_SPAN_2')}</span>
            </p>
            <OnlineStatus />
          </footer>
        </div>
      </Link>
    </div>
  )
}

export default ShoppingCart
