import { FC } from 'react'

const Portfolio: FC = () => {
  return (
    <section className='max-w-4xl mx-auto'>
      <div>
        <h3 className='text-3xl py-1'>Portfolio</h3>
        <p className='text-md py-2 leading-8 text-gray-80'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
          veritatis dolore. Non adipisci dolorum{' '}
          <span className='text-teal-500'>itaque libero!</span> Sunt iure rem
          autem cum reiciendis nam facilis minus, quidem a soluta molestiae
          voluptatum.
        </p>
        <p className='text-md py-2 leading-8 text-gray-80'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad
          nihil suscipit facere dolores dignissimos aliquam aliquid praesentium
          odit ipsam. Placeat non iusto illum dolore ratione magnam error magni
          delectus!
        </p>
      </div>
    </section>
  )
}

export default Portfolio
