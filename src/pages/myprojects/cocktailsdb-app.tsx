import { NextPage } from 'next'
import Image from 'next/image'
import CocktailPic1 from 'public/cocktaildb-app/cocktaildb-demo-1.jpg'
import CocktailPic2 from 'public/cocktaildb-app/cocktaildb-demo-2.jpg'
import CocktailPic3 from 'public/cocktaildb-app/cocktaildb-demo-3.jpg'
import CocktailPic4 from 'public/cocktaildb-app/cocktaildb-demo-4.jpg'
import { AiFillGithub, AiOutlineCheckCircle } from 'react-icons/ai'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { RiArrowRightSLine } from 'react-icons/ri'
import AppWrapper from '../components/AppWrapper'

const CocktailsDbApp: NextPage = () => {
  const title = 'App de Cocteles'
  const description = 'Detalles del proyecto de una base de datos de cocteles'

  return (
    <AppWrapper title={title} description={description}>
      <div className='flex justify-start'>
        <h3 className='m-3 text-3xl text-blue-700 dark:text-pink-400'>
          Proyecto <RiArrowRightSLine className='inline text-3xl' />{' '}
          <span className='text-gray-900 dark:text-slate-200'>
            Base de datos de cocteles
          </span>
          <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300 ml-4 align-middle'>
            oct/2022
          </span>
        </h3>
      </div>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        Con este proyecto aprendí a usar Next.js y quedé enganchado con sus
        bondades. En esta app, uso una API de los amigos de{' '}
        <a
          href='https://www.thecocktaildb.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
        >
          TheCocktailDB
        </a>
        . Hago uso de herramientas de <i>data fetching</i> propias de Next.js
        como <i>getServerSideProps</i>, <i>getStaticProps</i> y{' '}
        <i>getStaticPaths</i>. Escribí un artículo sobre cómo usarlas y abajo
        les dejaré el enlace por si tienen curiosidad.
      </p>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        Para aumentar la eficiencia de la carga de la página web, usé{' '}
        <a
          href='https://plaiceholder.co/'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
        >
          Plaiceholder
        </a>{' '}
        para convertir de manera dinámica las imágenes recibidas de las APIs en
        una versión de baja resolución, codificada como un <i>string</i> del
        tipo <i>Base64</i>. Esto crea un efecto <i>blur</i> mientras se
        descargan las imágenes.
      </p>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        Este proyecto tiene:
      </p>
      <ul className='py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          Paginación dinámica cuando se buscan cocteles por su nombre o
          ingrediente
        </li>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          Autocompletado en las dos barras de búsqueda
        </li>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          Manejo de errores cuando se intenta buscar un coctel cuyo nombre no
          existe en la base de datos
        </li>
      </ul>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          Website
        </span>
        <a
          href='https://cocktailsdb.juancgalue-web.cl/'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
        >
          https://cocktailsdb.juancgalue-web.cl/{' '}
          <BsBoxArrowInUpRight className='dark:text-pink-400 inline ml-1' />
        </a>
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          Despliegue
        </span>
        Linode con Nginx
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          Artículo
        </span>
        <a
          href='https://www.linkedin.com/pulse/usando-getserversideprops-getstaticprops-y-en-nextjs-con-galu%C3%A9/'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4 leading-8'
        >
          Usando getServerSideProps, getStaticProps y getStaticPaths en Next.js
          con TypeScript{' '}
          <BsBoxArrowInUpRight className='dark:text-pink-400 inline ml-1' />
        </a>
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          Código
        </span>
        <a
          href='https://github.com/juancgalueweb/cocktailsdb-nextjs'
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
        Next.js, TypeScript, plaiceholder, NProgress, AntDesign, TailwindCSS,
        FontAwesome, getStaticProps y getStaticPaths para el SSG,{' '}
        <i>static-site generation</i>
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          Back-end
        </span>
        getServerSideProps y API de TheCocktailDB
      </p>
      <div className='flex justify-center items-center my-10 mx-3'>
        <figure>
          <Image
            src={CocktailPic1}
            alt='cocktail demo app pic 1'
            className='w-[800px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
            Detalle de un coctel buscado por el ingrediente mostrado con un{' '}
            <i>drawer</i>
          </figcaption>
        </figure>
      </div>
      <div className='flex justify-center items-center my-10 mx-3'>
        <figure>
          <Image
            src={CocktailPic2}
            alt='cocktail demo app pic 2'
            className='w-[800px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
            Resultados de la búsqueda de cocteles por su ingrediente
          </figcaption>
        </figure>
      </div>
      <div className='flex justify-center items-center my-10 mx-3'>
        <figure>
          <Image
            src={CocktailPic3}
            alt='cocktail demo app pic 3'
            className='w-[800px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
            Detalle de un coctel de una página generada est&aacute;ticamente en
            el <i>build</i>
          </figcaption>
        </figure>
      </div>
      <div className='flex justify-center items-center my-10 mx-3'>
        <figure>
          <Image
            src={CocktailPic4}
            alt='cocktail demo app pic 4'
            className='w-[800px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
            Cocteles más populares. Esta página se genera est&aacute;ticamente
            en el <i>build</i>
          </figcaption>
        </figure>
      </div>
    </AppWrapper>
  )
}

export default CocktailsDbApp
