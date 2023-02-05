import { Card } from 'flowbite-react'
import Image from 'next/image'
import libraryApp from 'public/biblioteca-mern.webp'
import cocktailsApp from 'public/cocktails-db.webp'
import myWinesApp from 'public/mywines-low.jpg'
import tictactoeApp from 'public/tic-tac-toe.webp'

import { FC } from 'react'

const Portfolio: FC = () => {
  return (
    <>
      <h3 className='m-3 text-3xl text-gray-900 dark:text-slate-200'>
        Proyectos
      </h3>
      <div className='flex flex-col place-items-start gap-5 py-5 lg:flex-row lg:flex-wrap'>
        <div className='basis-1/3 flex-1 m-3 hover:scale-[1.01] transform transition duration-300'>
          <Card href='/mywines'>
            <Image
              src={myWinesApp}
              alt='mywines app home screen image'
              placeholder='blur'
              className='rounded'
            />
            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Registra tus vinos favoritos
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              Esta app tiene login y registro sencillo, puedes usar fotos reales
              para tus vinos, darle puntuación, entre otros.
            </p>
          </Card>
        </div>
        <div className='basis-1/3 flex-1 m-3 hover:scale-[1.01] transform transition duration-300'>
          <Card href='#'>
            <Image
              src={libraryApp}
              alt='library app home screen image'
              placeholder='blur'
              className='rounded'
            />
            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              CRUD de libros de una biblioteca
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              Esta app tiene login y registro con autenticación de e-mail, rutas
              protegidas, roles, ratings/comentarios, entre otros.
            </p>
          </Card>
        </div>
        <div className='basis-1/3 flex-1 m-3 hover:scale-[1.01] transform transition duration-300'>
          <Card href='#'>
            <Image
              src={tictactoeApp}
              alt='tic-tac-toe app home screen image'
              placeholder='blur'
              className='rounded'
            />
            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Juego de tic-tac-toe
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              App sencilla para practicar conceptos básicos de React, como{' '}
              <i>useState</i>, <i>localStorage</i> y estructurar mejor el
              código.
            </p>
          </Card>
        </div>
        <div className='basis-1/3 flex-1 m-3 hover:scale-[1.01] transform transition duration-300'>
          <Card href='#'>
            <Image
              src={cocktailsApp}
              alt='cocktails db app home screen'
              placeholder='blur'
              className='rounded'
            />
            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              BD de cocteles usando la API de Cocktail DB
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              App que consume una API con una extensa base de datos de cocteles.
            </p>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Portfolio
