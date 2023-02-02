import Image from 'next/image'
import backend from 'public/backend.webp'
import frontend from 'public/frontend.webp'
import { FC } from 'react'

const Technologies: FC = () => {
  return (
    <section>
      <div className='max-w-4xl mx-auto my-6'>
        <h3 className='text-3xl py-1 text-gray-900 dark:text-slate-200'>
          Technologies I use
        </h3>
        <p className='text-md py-2 leading-8 text-gray-700 dark:text-slate-200'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
          veritatis dolore. Non adipisci dolorum{' '}
          <span className='text-teal-600'>itaque libero!</span> Sunt iure rem
          autem cum reiciendis nam facilis minus, quidem a soluta molestiae
          voluptatum.
        </p>
        <p className='text-md py-2 leading-8 text-gray-700 dark:text-slate-200'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad
          nihil suscipit facere dolores dignissimos aliquam aliquid praesentium
          odit ipsam. Placeat non iusto illum dolore ratione magnam error magni
          delectus!
        </p>
      </div>
      <div className='max-w-4xl mx-auto lg:flex gap-10'>
        <div className='flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-4 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all duration-300 dark:text-slate-200'>
          <Image
            src={frontend}
            alt='Frontend development image'
            width='150'
            height='150'
            placeholder='blur'
            className='rounded'
          />
          <h3 className='text-lg font-medium pt-4 pb-2'>
            Frontend development
          </h3>
          <p className='py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            praesentium vero mollitia earum perferendis architecto, voluptatum,
            aperiam qui a eum quam nulla, aspernatur autem nesciunt delectus
            assumenda ipsum voluptatibus molestiae.
          </p>
          <h4 className='py-4 text-teal-600'>Design tools I use</h4>
          <p className='text-gray-800 py-1 dark:text-slate-200'>React.js</p>
          <p className='text-gray-800 py-1 dark:text-slate-200'>Next.js</p>
          <p className='text-gray-800 py-1 dark:text-slate-200'>Ant Design</p>
        </div>
        <div className='flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-4 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all duration-300 dark:text-slate-200'>
          <Image
            src={backend}
            alt='Backend development image'
            width='150'
            height='150'
            placeholder='blur'
            className='rounded'
          />
          <h3 className='text-lg font-medium pt-4 pb-2'>Backend development</h3>
          <p className='py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            praesentium vero mollitia earum perferendis architecto, voluptatum,
            aperiam qui a eum quam nulla, aspernatur autem nesciunt delectus
            assumenda ipsum voluptatibus molestiae.
          </p>
          <h4 className='py-4 text-teal-600'>Design tools I use</h4>
          <p className='text-gray-800 py-1 dark:text-slate-200'>Express.js</p>
          <p className='text-gray-800 py-1 dark:text-slate-200'>Node.js</p>
          <p className='text-gray-800 py-1 dark:text-slate-200'>Mongo DB</p>
        </div>
      </div>
    </section>
  )
}

export default Technologies
