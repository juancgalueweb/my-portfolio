import Image from 'next/image'
import backend from 'public/backend.webp'
import { FC } from 'react'
import { SiExpress, SiJavascript, SiMongodb, SiNodedotjs } from 'react-icons/si'

const Backend: FC = () => {
  return (
    <div className='flex flex-col p-6 m-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-4 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all duration-300 dark:text-slate-200'>
      <Image
        src={backend}
        alt='Backend development image'
        width='150'
        height='150'
        placeholder='blur'
        className='rounded self-center'
      />
      <h3 className='text-lg font-medium pt-4 pb-2 text-center'>
        Desarrollo <i>back-end</i>
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
        <li className='text-gray-800 py-1 dark:text-slate-200 text-left'>
          <SiJavascript className='inline text-[#F4C701] mr-2' />
          JavaScript
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200'>
          <SiExpress className='inline text-[#444444] dark:text-gray-200 mr-2' />
          Express.js
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200'>
          <SiNodedotjs className='inline text-[#5E9F4E] mr-2' />
          Node.js
        </li>
        <li className='text-gray-800 py-1 dark:text-slate-200 text-left'>
          <SiMongodb className='inline text-[#4DA540] mr-2' />
          Mongo DB
        </li>
      </ul>
    </div>
  )
}

export default Backend
