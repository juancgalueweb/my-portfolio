import { FC } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'

export const Navbar: FC = () => {
  return (
    <section className='min-h-screen'>
      <nav className='py-10 mb-12 flex justify-between'>
        <h1 className='text-xl font-ruslan'>Developed by JCG</h1>
        <ul className='flex items-center'>
          <li>
            <BsFillMoonStarsFill className='text-2xl cursor-pointer' />
          </li>
          <li>
            <a
              className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md px-4 py-2 ml-8'
              href='#'
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}
