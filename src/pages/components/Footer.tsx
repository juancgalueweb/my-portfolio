import { Footer } from 'flowbite-react'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineMail
} from 'react-icons/ai'

const FooterApp = () => {
  return (
    <Footer container={true} className='border-t dark:border-none'>
      <Footer.Copyright by='Juan Carlos Galué' year={2023} />
      <Footer.LinkGroup>
        <Footer.Link
          href='https://www.linkedin.com/in/juancgalue/'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillLinkedin className='text-[#0B66C2] text-3xl mr-1' />
        </Footer.Link>
        <Footer.Link
          href='https://github.com/juancgalueweb'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillGithub className='text-black dark:text-white text-3xl mx-1' />
        </Footer.Link>
        <Footer.Link
          href='https://twitter.com/juancgalue'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillTwitterCircle className='text-[#1DA1F2] text-3xl mx-1' />
        </Footer.Link>
        <Footer.Link href='mailto: juancgalue@gmail.com?subject=Correo%20desde%20Portafolio%20de%20Juan%20Galue'>
          <AiOutlineMail className='text-3xl mx-1' />
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}

export default FooterApp
