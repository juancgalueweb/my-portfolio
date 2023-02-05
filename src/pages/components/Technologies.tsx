import { FC } from 'react'
import BackEnd from './BackEnd'
import FrontEnd from './FrontEnd'

const Technologies: FC = () => {
  return (
    <>
      <div className='my-6'>
        <h3 className='text-3xl p-3 text-gray-900 dark:text-slate-200'>
          Tecnolog&iacute;as que uso
        </h3>
      </div>
      <div className='flex flex-col items-center mb-10'>
        <FrontEnd />
        <BackEnd />
      </div>
    </>
  )
}

export default Technologies
