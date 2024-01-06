import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import EmailSVG from './Icons/EmailSVG'

const FooterApp = () => {
  return (
    <footer className='p-4 bg-white shadow md:flex md:items-center md:justify-between dark:bg-gray-dark-mode-800 border-t dark:border-none'>
      <span className='text-sm text-gray-500 sm:text-center dark:text-gray-200'>
        &copy; 2023 Juan Carlos Galu&eacute;
      </span>
      <ul className='flex w-40 justify-between items-center'>
        <li>
          <a
            href='https://www.linkedin.com/in/juancgalue/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Link to my LinkedIn'
          >
            <AiFillLinkedin className='text-[#0B66C2] h-8 w-8 hover:scale-125 hover:brightness-125 transform transition-all duration-500 ease-in-out' />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/juancgalueweb'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Link to Github repository'
          >
            <AiFillGithub className='text-black dark:text-white h-8 w-8 hover:scale-125 hover:brightness-125 transform transition-all duration-500 ease-in-out' />
          </a>
        </li>
        <li>
          <a
            href='mailto: juancgalue@gmail.com?subject=Correo%20desde%20Portafolio%20de%20Juan%20Galue'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Link so you can send me an e-mail'
          >
            <EmailSVG />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default FooterApp
