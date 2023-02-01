import Image from 'next/image'
import PictureOfMe from 'public/Me.png'
import { FC } from 'react'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle
} from 'react-icons/ai'

const Hero: FC = () => {
  return (
    <section className='max-w-4xl mx-auto'>
      <div className='text-center p-10'>
        <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
          Juan Carlos Galué
        </h2>
        <h3 className='text-2xl py-2 md-text-3xl dark:text-slate-200'>
          Fullstack MERN developer
        </h3>
        <p className='text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-slate-200'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          repellat ducimus nesciunt cupiditate nisi impedit ex praesentium odio
          quibusdam est. Officiis et dolore totam quis quibusdam id laboriosam
          odio incidunt?
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
      <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-lg mt-10 overflow-hidden w-72 h-80 md:w-80 md:h-96'>
        <Image
          src={PictureOfMe}
          alt='My pprofile picture'
          fill
          placeholder='blur'
          style={{ objectFit: 'cover' }}
        />
      </div>
    </section>
  )
}

export default Hero
