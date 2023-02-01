import Image from 'next/image'
import libraryProject from 'public/biblioteca-mern.png'
import cocktailsDBProject from 'public/cocktails-db.png'
import winesProject from 'public/mywines.jpg'
import tictactoeProject from 'public/tic-tac-toe.png'

import { FC } from 'react'

const Portfolio: FC = () => {
  return (
    <section className='max-w-4xl mx-auto'>
      <div>
        <h3 className='text-3xl py-1 dark:text-slate-200'>Portfolio</h3>
        <p className='text-md py-2 leading-8 text-gray-80 dark:text-slate-200'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
          veritatis dolore. Non adipisci dolorum{' '}
          <span className='text-teal-500'>itaque libero!</span> Sunt iure rem
          autem cum reiciendis nam facilis minus, quidem a soluta molestiae
          voluptatum.
        </p>
        <p className='text-md py-2 leading-8 text-gray-80 dark:text-slate-200'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad
          nihil suscipit facere dolores dignissimos aliquam aliquid praesentium
          odit ipsam. Placeat non iusto illum dolore ratione magnam error magni
          delectus!
        </p>
      </div>
      <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
        <div className='basis-1/3 flex-1 hover:scale-[1.02] transform transition duration-300'>
          <Image
            src={winesProject}
            alt='mywines app home screen image'
            className='rounded-lg shadow-md object-cover'
            placeholder='blur'
          />
        </div>
        <div className='basis-1/3 flex-1 hover:scale-[1.02] transform transition duration-300'>
          <Image
            src={libraryProject}
            alt='library app home screen image'
            className='rounded-lg shadow-md object-cover'
            placeholder='blur'
          />
        </div>
        <div className='basis-1/3 flex-1 hover:scale-[1.02] transform transition duration-300'>
          <Image
            src={tictactoeProject}
            alt='tic-tac-toe app home screen image'
            className='rounded-lg shadow-md object-cover'
            placeholder='blur'
          />
        </div>
        <div className='basis-1/3 flex-1 hover:scale-[1.02] transform transition duration-300'>
          <Image
            src={cocktailsDBProject}
            alt='tic-tac-toe app home screen image'
            className='rounded-lg shadow-md object-cover'
            placeholder='blur'
          />
        </div>
      </div>
    </section>
  )
}

export default Portfolio
