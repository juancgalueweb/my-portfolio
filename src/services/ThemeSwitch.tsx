import useThemeSwitch from '@/hooks/useThemeSwitch'
import { AnimatePresence, motion } from 'framer-motion'
import { BsBrightnessHighFill, BsFillMoonStarsFill } from 'react-icons/bs'

const ThemeSwitch = () => {
  const { toggleMode, darkModeActive } = useThemeSwitch()
  return (
    <div
      className='border-2 rounded-md border-indigo-500 bg-indigo-500 hover:border-indigo-700 hover:bg-indigo-700 dark:border-amber-200 dark:bg-amber-200 dark:hover:bg-amber-400 dark:hover:border-amber-400 p-2 transform transition duration-300 hover:cursor-pointer mx-2 flex items-center'
      onClick={toggleMode}
    >
      {darkModeActive ? (
        <AnimatePresence mode='wait' initial={false}>
          <motion.div
            style={{ display: 'inline-block' }}
            key={darkModeActive ? 'dark' : 'light'}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <BsBrightnessHighFill className='text-xl cursor-pointer dark:text-[#1F2937]' />
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence mode='wait' initial={false}>
          <motion.div
            style={{ display: 'inline-block' }}
            key={darkModeActive ? 'dark' : 'light'}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <BsFillMoonStarsFill className='text-xl cursor-pointer text-slate-100' />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}
export default ThemeSwitch
