import { DarkModeContext } from '@/context/DarkModeContext'
import { FC, useContext } from 'react'
import { BsBrightnessHighFill, BsFillMoonStarsFill } from 'react-icons/bs'

const Navbar: FC = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext)

  const changeDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <nav className='py-3 flex justify-between sticky top-0 z-50 backdrop-filter backdrop-blur w-full bg-slate-100 border-b dark:bg-[#1F2937] dark:border-gray-600'>
      <h1 className='text-xl mt-2 font-ruslan dark:text-slate-200 px-4 md:px-12 lg:px-24'>
        Developed by JCG
      </h1>
      <ul className='flex items-center px-5 md:px-12 lg:px-24'>
        <li className='border-2 rounded-md border-[#E6E7EB] hover:bg-[#E6E7EB] dark:border-[#374251] dark:hover:bg-[#374251] p-2 transform transition duration-300'>
          {darkMode ? (
            <BsBrightnessHighFill
              className='text-xl cursor-pointer dark:text-slate-200'
              onClick={changeDarkMode}
            />
          ) : (
            <BsFillMoonStarsFill
              className='text-xl cursor-pointer'
              onClick={changeDarkMode}
            />
          )}
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
  )
}

export default Navbar
