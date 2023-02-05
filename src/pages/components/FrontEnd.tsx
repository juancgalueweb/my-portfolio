import Image from 'next/image'
import antDesignIcon from 'public/ant-design.svg'
import frontend from 'public/frontend.webp'
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
      <Image
        src={frontend}
        alt='Frontend development image'
        width='150'
        height='150'
        placeholder='blur'
        className='rounded self-center'
      />
      <h3 className='text-lg font-medium pt-4 pb-2 text-center'>
        Desarrollo <i>front-end</i>
      </h3>
      <p className='py-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        praesentium vero mollitia earum perferendis architecto, voluptatum,
        aperiam qui a eum quam nulla, aspernatur autem nesciunt delectus
        assumenda ipsum voluptatibus molestiae.
      </p>
      <h4 className='py-4 text-teal-900 dark:text-[#20C997] text-center'>
        Tecnolog&iacute;as que uso
      </h4>
      <ul>
        <li className='text-gray-800 py-1 dark:text-slate-200'>
          <SiHtml5 className='inline text-[#D84925] mr-2' />
          HTML
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200'>
          <SiCss3 className='inline text-[#3592CA] mr-2' />
          CSS
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200 text-left'>
          <SiJavascript className='inline text-[#F4C701] mr-2' />
          JavaScript
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200 text-left'>
          <SiTypescript className='inline text-[#2F71BC] mr-2' />
          Typescript
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200'>
          <SiReact className='inline text-[#5CCEEE] mr-2' />
          React.js
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200'>
          <SiNextdotjs className='inline mr-2' />
          Next.js
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200'>
          <Image
            src={antDesignIcon}
            alt='Ant design icon'
            width={17}
            height={17}
            className='inline mr-2'
          />
          Ant Design
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200'>
          <SiTailwindcss className='inline text-[#37BDF9] mr-2' />
          Tailwind CSS
        </li>
      </ul>
    </div>
  )
}

export default FrontEnd
