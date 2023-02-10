import { NextPage } from 'next'
import Image from 'next/image'
import LibraryPic1 from 'public/library-app/biblioteca-mern-app-1.webp'
import LibraryPic2 from 'public/library-app/biblioteca-mern-app-2.webp'
import LibraryPic3 from 'public/library-app/biblioteca-mern-app-3.webp'
import LibraryPic4 from 'public/library-app/biblioteca-mern-app-4.webp'
import LibraryPic5 from 'public/library-app/biblioteca-mern-app-5.webp'
import LibraryPic6 from 'public/library-app/biblioteca-mern-app-6.webp'
import { AiFillGithub, AiOutlineCheckCircle } from 'react-icons/ai'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { RiArrowRightSLine } from 'react-icons/ri'
import AppWrapper from '../components/AppWrapper'

const LibraryApp: NextPage = () => {
  const title = 'App de Libros'
  const description =
    'Detalles del proyecto de una biblioteca de libros con modo admin y usuario'

  return (
    <AppWrapper title={title} description={description}>
      <div className='flex justify-start'>
        <h3 className='m-3 text-3xl text-blue-700 dark:text-pink-400'>
          Proyecto <RiArrowRightSLine className='inline text-3xl' />{' '}
          <span className='text-gray-900 dark:text-slate-200'>
            Biblioteca con admin/lectores
          </span>
          <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300 ml-4 align-middle'>
            dic/2021
          </span>
        </h3>
      </div>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        La experiencia del usuario con este proyecto depender&aacute; de si es
        &ldquo;administrador&rdquo; o un &ldquo;usuario&rdquo; normal. En la
        ruta del admin, este podr&aacute; hacer un CRUD completo de los libros,
        es decir, crear, leer, actualizar y borrar un libro. En la ruta de los
        usuarios, estos podr&aacute;n ver los libros y dejar un <i>rating</i> y
        comentario, y ver los comentarios de los dem&aacute;s usuarios.
      </p>
      <p className='indent-6 py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        Este proyecto tiene:
      </p>
      <ul className='py-2 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          Rutas protegidas, es decir, un usuario no puede acceder a las
          funciones de un administrador, y viceversa.
        </li>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          Al iniciar sesi&oacute;n se genera un token que se usa para validar si
          el usuario tiene los permisos necesarios, por ejemplo, si desea
          agregar un libro se comprueba que sea administrador, que el token sea
          v&aacute;lido y que no haya expirado, y si todo est&aacute; bien,
          puede acceder al <i>endpoint</i> de la API para escribir en la BD.
        </li>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          Debes registrarte con un e-mail verdadero, porque se debe validar el
          e-mail ingresando una OTP, contrase&ntilde;a de un solo uso, que se
          env&iacute;a al mismo e-mail con que se registr&oacute;.
        </li>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          Posibilidad de validar el e-mail en otro momento.
        </li>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          Cambiar contrase&ntilde;a en caso de olvido.
        </li>
        <li>
          <AiOutlineCheckCircle className='inline mr-2' />
          Redirecciona al login cuando el token ha expirado.
        </li>
      </ul>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          Website
        </span>
        <a
          href='https://biblioteca-mern.juancgalue-web.cl/'
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-pink-400 dark:hover:underline dark:hover:underline-offset-4 text-blue-700 hover:underline hover:underline-offset-4'
        >
          https://biblioteca-mern.juancgalue-web.cl/{' '}
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
          C&oacute;digo
        </span>
        <a
          href='https://github.com/juancgalueweb/biblioteca_con_roles'
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
        React, JavaScript, AntDesign, FontAwesome, Axios, Bootstrap, Formik,
        Moment, Sweetalert, Yup
      </p>
      <p className='py-1 m-3 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300'>
          Back-end
        </span>
        Bcryptjs, Cors, Dotenv, Express, Jsonwebtoken, SendinBlue, MongoDB
      </p>
      <div className='flex justify-center items-center my-10 mx-3'>
        <figure>
          <Image
            src={LibraryPic1}
            alt='Library demo app pic 1'
            className='w-[800px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
            P&aacute;gina inicial. Muestra el top 10 de los libros mejor
            puntuados. Los comentarios los muestra de manera aleatoria
          </figcaption>
        </figure>
      </div>
      <div className='flex justify-center items-center my-10 mx-3'>
        <figure>
          <Image
            src={LibraryPic2}
            alt='Library demo app pic 2'
            className='w-[800px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
            Pantalla de registro. Si te sabes la clave, te puedes registrar como
            Admin
          </figcaption>
        </figure>
      </div>
      <div className='flex justify-center items-center my-10 mx-3'>
        <figure>
          <Image
            src={LibraryPic3}
            alt='Library demo app pic 3'
            className='w-[800px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
            Pantalla del <i>login</i>. Ac&aacute; se puede tambi&eacute;n
            cambiar la contrase&ntilde;a y validar el e-mail en caso de que la
            primera OTP haya vencido.
          </figcaption>
        </figure>
      </div>
      <div className='flex justify-center items-center my-10 mx-3'>
        <figure>
          <Image
            src={LibraryPic4}
            alt='Library demo app pic 4'
            className='w-[800px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
            Pantalla del admin donde se puede hacer el CRUD completo de un libro
          </figcaption>
        </figure>
      </div>
      <div className='flex justify-center items-center my-10 mx-3'>
        <figure>
          <Image
            src={LibraryPic5}
            alt='Library demo app pic 5'
            className='w-[800px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
            Pantalla del usuario donde se pueden ver todos los libros, sus
            ratings promediados, adem&aacute;s de poder usar los filtros y
            botones para ordenar la informaci&oacute;n de la tabla
          </figcaption>
        </figure>
      </div>
      <div className='flex justify-center items-center my-10 mx-3'>
        <figure>
          <Image
            src={LibraryPic6}
            alt='Library demo app pic 6'
            className='w-[800px] h-auto rounded-lg shadow-md'
            placeholder='blur'
          />
          <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-sm mt-2 font-extralight text-center'>
            Modal que muestra los comentarios con sus respectivos ratings
          </figcaption>
        </figure>
      </div>
    </AppWrapper>
  )
}

export default LibraryApp
