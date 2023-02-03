import { Card } from 'flowbite-react'
import { FC } from 'react'

const Projects: FC = () => {
  return (
    <>
      <div className='m-3'>
        <h3 className='text-3xl py-1 text-gray-900 dark:text-slate-200'>
          Proyectos
        </h3>
        <p className='text-md py-2 leading-8 text-gray-700 dark:text-slate-200'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
          veritatis dolore. Non adipisci dolorum{' '}
          <span className='text-teal-900 dark:text-[#20C997]'>
            itaque libero!
          </span>{' '}
          Sunt iure rem autem cum reiciendis nam facilis minus, quidem a soluta
          molestiae voluptatum.
        </p>
        <p className='text-md py-2 leading-8 text-gray-700 dark:text-slate-200'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad
          nihil suscipit facere dolores dignissimos aliquam aliquid praesentium
          odit ipsam. Placeat non iusto illum dolore ratione magnam error magni
          delectus!
        </p>
      </div>
      <div className='flex flex-col items-center gap-5 py-10 lg:flex-row lg:flex-wrap'>
        <div className='basis-1/3 flex-1 m-3 hover:scale-[1.02] transform transition duration-300'>
          <Card
            href='mywines'
            imgAlt='mywines app home screen image'
            imgSrc='mywines-low.jpg'
          >
            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Registra tus vinos favoritos
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              Esta app tiene login y registro sencillo, puedes usar fotos reales
              para tus vinos, darle puntuación, entre otros.
            </p>
          </Card>
        </div>
        <div className='basis-1/3 flex-1 m-3 hover:scale-[1.02] transform transition duration-300'>
          <Card
            href='#'
            imgAlt='library app home screen image'
            imgSrc='biblioteca-mern.webp'
          >
            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              CRUD de libros de una biblioteca
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              Esta app tiene login y registro con autenticación de e-mail, rutas
              protegidas, roles, ratings/comentarios, entre otros.
            </p>
          </Card>
        </div>
        <div className='basis-1/3 flex-1 m-3 hover:scale-[1.02] transform transition duration-300'>
          <Card
            href='#'
            imgAlt='tic-tac-toe app home screen image'
            imgSrc='tic-tac-toe.webp'
          >
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
        <div className='basis-1/3 flex-1 m-3 hover:scale-[1.02] transform transition duration-300'>
          <Card
            href='#'
            imgAlt='cocktails db app home screen'
            imgSrc='cocktails-db.webp'
          >
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

export default Projects
