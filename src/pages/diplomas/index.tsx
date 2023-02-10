import { NextPage } from 'next'
import Image from 'next/image'
import TSDiploma from 'public/diplomas/microsoft-typescript.webp'
import NextJSDiploma from 'public/diplomas/RootLab-NextJS.webp'
import { BsStopwatchFill } from 'react-icons/bs'
import AppWrapper from '../components/AppWrapper'

const Projects: NextPage = () => {
  const title = 'Diplomas y certificaciones'
  const description =
    'Detalle de los diplomas, certificaciones y certificaciones de asistencia que he adquirido como desarrollador full stack con MERN'

  return (
    <AppWrapper title={title} description={description}>
      <h3 className='m-3 text-3xl text-gray-900 dark:text-slate-200 mb-10'>
        Diplomas, certificaciones y constancias de culminación de cursos
      </h3>
      <ol className='relative border-l border-gray-200 dark:border-gray-700'>
        {/* Typescript diploma */}
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
                fill-rule='evenodd'
                d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </span>
          <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
            Build JavaScript applications using TypeScript
            <span className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3'>
              M&aacute;s reciente
            </span>
          </h3>
          <h4 className='mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500 flex items-center'>
            <BsStopwatchFill className='inline text-base mr-1' />6 horas y 16
            minutos
          </h4>
          <h4 className='mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500'>
            Otorgado por: Microsoft Learn
          </h4>
          <time className='block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500'>
            27 de enero de 2023
          </time>
          <p className='mb-4 text-base font-normal text-gray-600 dark:text-gray-400'>
            Incluye declaración de tipos de variables, implementación de
            interfaces, desarrollo de funciones con tipo, definición de
            genéricos, entre otros.
          </p>
          <Image
            src={TSDiploma}
            alt='TypeScript diploma image'
            className='w-[300px] h-auto rounded-lg shadow-md mb-4'
            placeholder='blur'
          />
          <a
            href='https://certifications-and-courses.s3.sa-east-1.amazonaws.com/Microsoft/Achievements+-+juancarlosgalue-3004+_+Microsoft+Learn.pdf'
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
                fill-rule='evenodd'
                d='M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z'
                clip-rule='evenodd'
              ></path>
            </svg>{' '}
            Descargar
          </a>
        </li>
        {/* NextJS diploma */}
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
                fill-rule='evenodd'
                d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </span>
          <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
            Curso de NextJS
          </h3>
          <h4 className='mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500 flex items-center'>
            <BsStopwatchFill className='inline text-base mr-1' />
            13,5 horas
          </h4>
          <h4 className='mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500'>
            Otorgado por: Rootlab
          </h4>
          <time className='block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500'>
            Octubre de 2023
          </time>
          <p className='mb-4 text-base font-normal text-gray-600 dark:text-gray-400'>
            Conceptos fundamentales de Next.js como rutas con pages, manejo de
            APIs, generación de páginas estáticas, getServerSideProps,
            getStaticProps, getStaticProps, optimización de imágenes, uso de
            middleware, entre otros.
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
                fill-rule='evenodd'
                d='M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z'
                clip-rule='evenodd'
              ></path>
            </svg>{' '}
            Descargar
          </a>
        </li>
      </ol>
    </AppWrapper>
  )
}

export default Projects
