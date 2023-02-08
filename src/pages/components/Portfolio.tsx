import { Card } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
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
      <div className='flex flex-col place-items-start gap-5 py-5 lg:flex-row lg:flex-wrap mb-10'>
        <div className='basis-1/3 flex-1 m-3 hover:scale-[1.01] transform transition duration-300'>
          <Link href='/myprojects/tic-tac-toe-app'>
            <Card>
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
                App para practicar conceptos b&aacute;sicos de React, como{' '}
                <i>useState</i>, <i>localStorage</i> y estructurar mejor el
                c&oacute;digo.
              </p>
            </Card>
          </Link>
        </div>
        <div className='basis-1/3 flex-1 m-3 hover:scale-[1.01] transform transition duration-300'>
          <Link href=''>
            <Card href='/myprojects/cocktailsdb-app'>
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
                App que consume una API con una extensa base de datos de
                cocteles.
              </p>
            </Card>
          </Link>
        </div>
        <div className='basis-1/3 flex-1 m-3 hover:scale-[1.01] transform transition duration-300'>
          <Link href='/myprojects/library-app'>
            <Card>
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
                Esta app tiene login y registro con autenticaci&oacute;n de
                e-mail, rutas protegidas, roles, ratings/comentarios.
              </p>
            </Card>
          </Link>
        </div>
        <div className='basis-1/3 flex-1 m-3 hover:scale-[1.01] transform transition duration-300'>
          <Link href='/myprojects/wine-app'>
            <Card>
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
                Esta app tiene login y registro sencillo, puedes usar fotos
                reales para tus vinos, darle puntuaci&oacute;n, entre otros.
              </p>
            </Card>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Portfolio
