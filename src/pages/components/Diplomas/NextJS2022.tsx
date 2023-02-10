import Image from 'next/image'
import NextJSDiploma from 'public/diplomas/RootLab-NextJS.webp'
import { BsStopwatchFill } from 'react-icons/bs'

const NextJS2022 = () => {
  return (
    <li className='mb-10 ml-6'>
      <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
        <svg
          aria-hidden='true'
          className='w-3 h-3 text-blue-800 dark:text-blue-300'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
            clipRule='evenodd'
          ></path>
        </svg>
      </span>
      <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
        Curso de NextJS
      </h3>
      <h4 className='mb-2 text-sm font-normal leading-none text-gray-700 dark:text-slate-300 flex items-center'>
        <BsStopwatchFill className='inline text-base mr-1' />
        13,5 horas
      </h4>
      <h4 className='mb-2 text-sm font-normal leading-none text-gray-700 dark:text-slate-300'>
        Otorgado por: Rootlab
      </h4>
      <time className='block mb-2 text-sm font-normal leading-none text-gray-700 dark:text-slate-300'>
        Octubre de 2023
      </time>
      <p className='mb-4 text-base font-normal text-gray-800 dark:text-slate-200'>
        Conceptos fundamentales de Next.js como rutas con pages, manejo de APIs,
        generación de páginas estáticas, getServerSideProps, getStaticProps,
        getStaticProps, optimización de imágenes, uso de middleware, entre
        otros.
      </p>
      <Image
        src={NextJSDiploma}
        alt='Next.js diploma image'
        className='w-[300px] h-auto rounded-lg shadow-md mb-4'
        placeholder='blur'
      />
      <a
        href='https://certifications-and-courses.s3.sa-east-1.amazonaws.com/Rootlab/Juan+Carlos+Galue_Certificado-RootLab_Next.JS.pdf'
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
      >
        <svg
          className='w-4 h-4 mr-2'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z'
            clipRule='evenodd'
          ></path>
        </svg>{' '}
        Descargar
      </a>
    </li>
  )
}

export default NextJS2022
