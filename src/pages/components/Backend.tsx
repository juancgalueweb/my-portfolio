import Image from 'next/image'
import backend from 'public/backend.webp'
import { FC } from 'react'
import { SiExpress, SiJavascript, SiMongodb, SiNodedotjs } from 'react-icons/si'

const BackEnd: FC = () => {
  return (
    <div className='max-w-3xl flex flex-col p-6 m-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-4 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all duration-300 dark:text-slate-200'>
      <Image
        src={backend}
        alt='Backend development image'
        width={200}
        height={200}
        placeholder='blur'
        className='rounded self-center'
      />
      <h3 className='text-xl font-medium pt-4 pb-2 text-center'>
        Desarrollo <i>back-end</i>
      </h3>
      <p className='indent-6 py-2 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        Si bien el desarrollo front-end es muy importante porque es lo que ve el
        usuario final - colores, animaciones, imágenes - el back-end tiene una
        especial importancia. Es en el back-end donde va la lógica del negocio,
        las rutas seguras, autenticaciones, manejo de errores, manejo de la base
        de datos, APIs, en fin, es aquí donde está el cerebro de una página web
        dinámica.
      </p>
      <p className='indent-6 py-2 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        Las principales herramientas que uso son:
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
