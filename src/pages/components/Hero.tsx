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
    <div className='max-w-4xl mx-auto'>
      <div className='text-center p-10'>
        <h2 className='text-5xl py-2 text-teal-600 font-medium'>
          Juan Carlos Galué
        </h2>
        <h3 className='text-2xl py-2'>Fullstack MERN developer</h3>
        <p className='text-md py-5 leading-8 text-gray-800'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          repellat ducimus nesciunt cupiditate nisi impedit ex praesentium odio
          quibusdam est. Officiis et dolore totam quis quibusdam id laboriosam
          odio incidunt?
        </p>
      </div>
      <div className='text-5xl flex justify-center gap-16'>
        <AiFillLinkedin className='text-[#0B66C2]' />
        <AiFillGithub />
        <AiFillTwitterCircle className='text-[#1DA1F2]' />
      </div>
      <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-lg w-80 h-96 mt-10 overflow-hidden'>
        <Image
          src={PictureOfMe}
          alt='My pprofile picture'
          fill
          placeholder='blur'
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  )
}

export default Hero
