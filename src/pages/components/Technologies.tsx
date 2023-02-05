import { FC } from 'react'
import BackEnd from './BackEnd'
import FrontEnd from './FrontEnd'

const Technologies: FC = () => {
  return (
    <>
      <div className='my-6'>
        <h3 className='text-3xl p-3 text-gray-900 dark:text-slate-200'>
          Technologies I use
        </h3>
        <p className='text-md p-3 leading-8 text-gray-700 dark:text-slate-200'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
          veritatis dolore. Non adipisci dolorum{' '}
          <span className='text-teal-900 dark:text-[#20C997]'>
            itaque libero!
          </span>{' '}
          Sunt iure rem autem cum reiciendis nam facilis minus, quidem a soluta
          molestiae voluptatum.
        </p>
        <p className='text-md p-3 leading-8 text-gray-700 dark:text-slate-200'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad
          nihil suscipit facere dolores dignissimos aliquam aliquid praesentium
          odit ipsam. Placeat non iusto illum dolore ratione magnam error magni
          delectus!
        </p>
      </div>
      <div className='lg:flex gap-10'>
        <FrontEnd />
        <BackEnd />
      </div>
    </>
  )
}

export default Technologies
