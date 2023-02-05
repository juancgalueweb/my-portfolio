import Image from 'next/image'
import PictureOfMe from 'public/Me.webp'
import { FC } from 'react'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle
} from 'react-icons/ai'

const Hero: FC = () => {
  return (
    <>
      <div className='text-center'>
        <h2 className='text-5xl py-2 m-3 text-teal-900 font-medium md:text-6xl dark:text-[#20C997]'>
          Juan Carlos Galu&eacute;
        </h2>
        <h3 className='text-2xl py-2 m-3 md-text-3xl text-gray-900 dark:text-slate-200'>
          Desarrollador Fullstack MERN
        </h3>
        <p className='text-md py-2 m-3 leading-8 text-gray-800 md:text-xl dark:text-slate-200'>
          En los inicios de la pandemia tom&eacute; la decisi&oacute;n de dar un
          giro a mi vida laboral. Mis 14 a&ntilde;os de experiencia en la
          profesi&oacute;n que estudi&eacute;, ingenier&iacute;a
          el&eacute;ctrica, ya no me llenaban 🥹.
          <br />
          Como desde ni&ntilde;o me gustan las computadoras y la
          tecnolog&iacute;a, decid&iacute; estudiar programaci&oacute;n web. Me
          he enfocado en aprender el stack de MERN.
        </p>
      </div>
      <div className='text-5xl flex justify-center gap-16'>
        <a
          href='https://www.linkedin.com/in/juancgalue/'
          target='_blank'
          rel='noreferrer'
          className='hover:scale-[1.2] transform transition duration-300'
        >
          <AiFillLinkedin className='text-[#0B66C2]' />
        </a>
        <a
          href='https://github.com/juancgalueweb'
          target='_blank'
          rel='noreferrer'
          className='hover:scale-[1.2] transform transition duration-300'
        >
          <AiFillGithub className='dark:text-white' />
        </a>
        <a
          href='https://twitter.com/juancgalue'
          target='_blank'
          rel='noreferrer'
          className='hover:scale-[1.2] transform transition duration-300'
        >
          <AiFillTwitterCircle className='text-[#1DA1F2]' />
        </a>
      </div>
      <div className='relative mx-auto bg-gradient-to-b from-teal-500 dark:from-green-300 rounded-lg mt-10 overflow-hidden w-72 h-80 md:w-80 md:h-96'>
        <Image
          src={PictureOfMe}
          alt='My pprofile picture'
          placeholder='blur'
          style={{ objectFit: 'cover' }}
        />
      </div>
    </>
  )
}

export default Hero
