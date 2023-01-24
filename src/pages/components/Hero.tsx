import Image from 'next/image'
import { FC } from 'react'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai'
import PictureOfMe from '../../../public/Me.png'

export const Hero: FC = () => {
  return (
    <>
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
      <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
        <Image
          src={PictureOfMe}
          alt='My pprofile picture'
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </>
  )
}
