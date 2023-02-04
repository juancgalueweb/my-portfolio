import { useEffect, useState } from 'react'
import { BsBrightnessHighFill, BsFillMoonStarsFill } from 'react-icons/bs'

const isDark = () =>
  //Function that will return boolean if any of the condition is satisfied
  (localStorage && localStorage.theme === 'dark') || //Condition 1 - has local storage and theme = dark in local storage is found
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches) //Condition 2 - No theme key in local storage but media color scheme is dark

const getTheme = (isDark: boolean) => (isDark ? 'dark' : 'light') //Function to return 'dark' or 'light' string

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false) //State for holding theme status

  const toggleMode = () => {
    //onClick handler for changing theme on button press
    localStorage.theme = getTheme(!darkMode) //setting up local storage theme value
    if (localStorage.theme === 'dark') {
      // If theme is 'dark'
      document.documentElement.classList.remove('light') // remove 'light' from html class
      document.documentElement.classList.add('dark') // add 'dark' to html class
    } else {
      // if not 'dark'
      document.documentElement.classList.remove('dark') // remove 'dark' from html class
      document.documentElement.classList.add('light') //add 'light' to html class
    }
    setDarkMode(!darkMode) //set dark mode state to opposite of initial value
  }

  useEffect(() => {
    setDarkMode(isDark()) //before page mount set the value of dark mode by observing theme in local storage
  }, [])

  const darkModeActive =
    typeof window !== 'undefined' &&
    document.documentElement.classList.contains('dark') // returns true if its a client and 'dark' is present in html
  // process.browser is deprecated can be written as typeof window === 'undefined'
  return (
    <div
      className='border-2 rounded-md border-indigo-500 bg-indigo-500 hover:border-indigo-700 hover:bg-indigo-700 dark:border-amber-200 dark:bg-amber-200 dark:hover:bg-amber-400 dark:hover:border-amber-400 p-2 transform transition duration-300 hover:cursor-pointer mx-2'
      onClick={toggleMode}
    >
      {darkModeActive ? (
        <BsBrightnessHighFill className='text-xl cursor-pointer dark:text-[#1F2937]' />
      ) : (
        <BsFillMoonStarsFill className='text-xl cursor-pointer text-slate-100' />
      )}
    </div>
  )
}
export default ThemeSwitch
