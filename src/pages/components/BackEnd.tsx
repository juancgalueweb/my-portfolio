import { useTranslation } from '@/context/i18n'
import Image from 'next/image'
import BackendPic from 'public/backend-amico.svg'
import { FC } from 'react'
import { SiExpress, SiJavascript, SiMongodb, SiNodedotjs } from 'react-icons/si'

const BackEnd: FC = () => {
  const { t } = useTranslation()
  return (
    <div className='flex flex-col p-6 m-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-4 dark:bg-gray-dark-mode-700 dark:border-gray-dark-mode-500 dark:hover:bg-gray-dark-mode-500 transition-all duration-300 dark:text-slate-200'>
      <h3 className='text-xl font-medium py-2 mb-4 text-center'>
        {t('BACK_END_H3')}
      </h3>
      <figure className='self-center mb-6'>
        <Image
          src={BackendPic}
          alt='Backend development image'
          className='rounded mb-4 w-[300px] h-auto'
        />
        <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-xs mt-2 font-extralight text-center'>
          <a
            href='https://storyset.com/web'
            target='_blank'
            rel='noopener noreferrer'
          >
            {t('SVG_CREDITS')}
          </a>
        </figcaption>
      </figure>
      <p className='indent-6 py-2 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        {t('BACK_END_P1')}
      </p>
      <p className='indent-6 py-2 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        {t('FRONT_END_P_2')}
      </p>
      <ul>
        <li className='text-gray-800 py-1 dark:text-slate-200 md:text-lg'>
          <SiJavascript className='inline text-[#F4C701] mr-2' />
          JavaScript
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200 md:text-lg'>
          <SiExpress className='inline text-[#444444] dark:text-gray-200 mr-2' />
          Express.js
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200 md:text-lg'>
          <SiNodedotjs className='inline text-[#5E9F4E] mr-2' />
          Node.js
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200 md:text-lg'>
          <SiMongodb className='inline text-[#4DA540] mr-2' />
          Mongo DB
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200 md:text-lg ml-6'>
          Mongoose
        </li>
      </ul>
    </div>
  )
}

export default BackEnd
