import Image from 'next/image'
import AntDesignLogo from 'public/ant-design.svg'
import FrontendPic from 'public/developer-activity-bro.svg'
import { FC } from 'react'
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si'

const FrontEnd: FC = () => {
  return (
    <div className='flex flex-col p-6 m-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-4 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all duration-300 dark:text-slate-200'>
      <h3 className='text-xl font-medium py-2 mb-4 text-center'>
        Desarrollo <i>front-end</i>
      </h3>
      <figure className='self-center mb-6'>
        <Image
          src={FrontendPic}
          alt='Frontend development image'
          className='rounded mb-4 w-[300px] h-auto'
        />
        <figcaption className='leading-relaxed text-gray-800 dark:text-slate-200 text-xs mt-2 font-extralight text-center'>
          <a
            href='https://storyset.com/web'
            target='_blank'
            rel='noopener noreferrer'
          >
            Web illustrations by Storyset
          </a>
        </figcaption>
      </figure>
      <p className='indent-6 py-2 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        Cuando inici&eacute; mis estudios de manera autodidacta, lo primero que
        aprend&iacute; fue HTML, CSS y JavaScript, despu&eacute;s
        descubr&iacute; jQuery pero no tard&eacute; mucho en aprender a usar
        React.js, y desde entonces m&aacute;s nunca he realizado proyectos sin
        esta potente biblioteca de JavaScript, la cual ayuda un mont&oacute;n en
        el dise&ntilde;o de las interfaces de usuario, escribir el c&oacute;digo
        en JSX es amigable, y junto con el manejo del DOM virtual y los{' '}
        <i>hooks</i> hacen que esta herramienta est&eacute; en alta demanda hoy
        en d&iacute;a. Luego aprend&iacute; Next.js y sus maravillosas bondades
        para generar p&aacute;ginas est&aacute;ticas, estructura de rutas con
        &quot;pages&quot;, SSR, entre otros, y luego de estudiar TypeScript,
        trato de escribir todo mi c&oacute;digo con ese lenguaje de
        programaci&oacute;n.
      </p>
      <p className='indent-6 py-2 leading-relaxed text-gray-800 md:text-lg dark:text-slate-200'>
        Las principales herramientas que uso son:
      </p>
      <ul>
        <li className='text-gray-800 py-1 dark:text-slate-200 md:text-lg'>
          <SiHtml5 className='inline text-[#D84925] mr-2' />
          HTML
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200 md:text-lg'>
          <SiCss3 className='inline text-[#3592CA] mr-2' />
          CSS
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200 text-left md:text-lg'>
          <SiJavascript className='inline text-[#F4C701] mr-2' />
          JavaScript
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200 text-left md:text-lg'>
          <SiTypescript className='inline text-[#2F71BC] mr-2' />
          Typescript
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200 md:text-lg'>
          <SiReact className='inline text-[#5CCEEE] mr-2' />
          React.js
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200 md:text-lg'>
          <SiNextdotjs className='inline mr-2' />
          Next.js
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200 md:text-lg'>
          <Image
            src={AntDesignLogo}
            alt='Ant design icon'
            className='inline mr-2 w-[17px] h-[17px]'
          />
          Ant Design
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200 md:text-lg'>
          <SiTailwindcss className='inline text-[#37BDF9] mr-2' />
          Tailwind CSS
        </li>
      </ul>
    </div>
  )
}

export default FrontEnd
