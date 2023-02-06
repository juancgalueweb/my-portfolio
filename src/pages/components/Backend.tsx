import Image from 'next/image'
import BackendPic from 'public/backend.webp'
import { FC } from 'react'
import { SiExpress, SiJavascript, SiMongodb, SiNodedotjs } from 'react-icons/si'

const BackEnd: FC = () => {
  return (
    <div className='max-w-3xl flex flex-col p-6 m-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-4 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all duration-300 dark:text-slate-200'>
      <h3 className='text-xl font-medium py-2 mb-4 text-center'>
        Desarrollo <i>back-end</i>
      </h3>
      <Image
        src={BackendPic}
        alt='Backend development image'
        width={200}
        height={200}
        placeholder='blur'
        className='rounded self-center mb-4'
      />
      <p className='indent-6 py-2 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        Si bien el desarrollo front-end es muy importante porque es lo que ve el
        usuario final &mdash; colores, animaciones, im&aacute;genes &mdash; el
        back-end tiene una especial importancia. Es en el back-end donde va la
        l&oacute;gica del negocio, las rutas seguras, autenticaciones, manejo de
        errores, middlewares, manejo de la base de datos, creaci&oacute;n de
        APIs, en fin, es aqu&iacute; donde est&aacute; el cerebro de una
        p&aacute;gina web din&aacute;mica.
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
