import { NextPage } from 'next'
import Image from 'next/image'
import appDemoGif from 'public/tic-tac-toe-demo.gif'
import { AiFillGithub } from 'react-icons/ai'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { RiArrowRightSLine } from 'react-icons/ri'
import AppWrapper from '../components/AppWrapper'

const TicTacToeApp: NextPage = () => {
  const title = 'App de Tic Tac Toe'
  const description = 'Detalles del proyecto de Tic Tac Toe'

  return (
    <AppWrapper title={title} description={description}>
      <div className='flex justify-start'>
        <h3 className='m-3 text-3xl text-blue-700 dark:text-pink-400'>
          Proyecto <RiArrowRightSLine className='inline text-3xl' />{' '}
          <span className='text-gray-900 dark:text-slate-200'>Tic Tac Toe</span>
          <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300 ml-4 align-middle'>
            ene/2023
          </span>
        </h3>
      </div>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        Este proyecto donde se cre&oacute; el juego popular conocido como
        tic-tac-toe, tres en raya o Xs y Os, pone a prueba la l&oacute;gica de
        programaci&oacute;n y permite repasar el concepto fundamental de estados
        de React, con el <i>hook useState</i>. Usa <i>localStorage</i> para
        guardar la partida.
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          Website
        </span>
        <a
          href='https://juancgalueweb.github.io/tic-tac-toe-with-react/'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
        >
          https://juancgalueweb.github.io/tic-tac-toe-with-react/{' '}
          <BsBoxArrowInUpRight className='dark:text-pink-400 inline ml-1' />
        </a>
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          Despliegue
        </span>
        Github Pages
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          C&oacute;digo
        </span>
        <a
          href='https://github.com/juancgalueweb/tic-tac-toe-with-react'
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
        React.js, Vite, JavaScript, canvas-confetti
      </p>
      <div className='flex justify-center items-center m-3'>
        <figure>
          <Image
            src={appDemoGif}
            alt='demo app gif'
            className='w-[400px] h-auto rounded-lg shadow-lg mt-10'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
            Demo de una partida en un GIF
          </figcaption>
        </figure>
      </div>
    </AppWrapper>
  )
}

export default TicTacToeApp
