import { NextPage } from 'next'
import Image from 'next/image'
import WinePic1 from 'public/wines-app/wines-app-1.webp'
import WinePic2 from 'public/wines-app/wines-app-2.jpg'
import { AiFillGithub, AiOutlineCheckCircle } from 'react-icons/ai'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { RiArrowRightSLine } from 'react-icons/ri'
import AppWrapper from '../components/AppWrapper'

const WinesApp: NextPage = () => {
  const title = 'App de Mis Vinos Favoritos'
  const description =
    'Detalles del proyecto de una App para registrar tus vinos favoritos'

  return (
    <AppWrapper title={title} description={description}>
      <div className='flex justify-start'>
        <h3 className='m-3 text-3xl text-blue-700 dark:text-pink-400'>
          Proyecto <RiArrowRightSLine className='inline text-3xl' />{' '}
          <span className='text-gray-900 dark:text-slate-200'>
            Registro de tus vinos favoritos
          </span>
          <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300 ml-4 align-middle'>
            nov/2021
          </span>
        </h3>
      </div>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        Es una app sencilla, pero desarrolla todo el concepto de full stack
        MERN, para que puedas registrar tus vinos favoritos.
      </p>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        Este proyecto tiene:
      </p>
      <ul className='py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          Login y registro sencillo. Puedes usar un correo ficticio, ya que no
          se requiere verificar el e-mail.
        </li>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          El CRUD es b&aacute;sico: puedes crear tus vinos, editarlos,
          eliminarlos y visualizarlos en una tabla.
        </li>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          Lo interesante de esta App es que se conecta con AWS s3 para guardar
          las im&aacute;genes de los usuarios. No se preocupen, se guardan con
          un nombre que no es el original, y solo la App tiene las credenciales
          para leer los objetos a trav&eacute;s de una url prefirmada.
        </li>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          Pueden agregar una sola imagen a cada vino.
        </li>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          Al consultar los <i>endpoints</i> de las API, se valida si el usuario
          tiene el permiso necesario usando <i>jsonwebtoken</i>, de ser
          correcto, puede escribir/actualizar la BD.
        </li>
      </ul>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          Website
        </span>
        <a
          href='https://mywines.juancgalue-web.cl/home'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
        >
          https://mywines.juancgalue-web.cl/home{' '}
          <BsBoxArrowInUpRight className='dark:text-pink-400 inline ml-1' />
        </a>
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          Despliegue
        </span>
        Linode con Docker
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          C&oacute;digo
        </span>
        <a
          href='https://github.com/juancgalueweb/wines-blog'
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
        React, JavaScript, Vite, AntDesign, FontAwesome, axios, bootstrap,
        formik, moment, sweetalert, yup, sass, caddy
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          Back-end
        </span>
        Bcryptjs, cors, dotenv, express, fs-extra, jsonwebtoken, multer, sharp,
        MongoDB, aws-sdk
      </p>
      <div className='flex justify-center items-center my-10 mx-3'>
        <figure>
          <Image
            src={WinePic1}
            alt='Wines demo app pic 1'
            className='w-[800px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
            Pantalla del usuario donde puede hacer el CRUD completo de sus
            vinos.
          </figcaption>
        </figure>
      </div>
      <div className='flex justify-center items-center my-10 mx-3'>
        <figure>
          <Image
            src={WinePic2}
            alt='Wines demo app pic 2'
            className='w-[800px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
            Observen que para editar un vino, se puede borrar la foto actual y
            colocar una nueva. Queda guardada en aws-s3
          </figcaption>
        </figure>
      </div>
    </AppWrapper>
  )
}

export default WinesApp
