import Image from 'next/image'
import { useRouter } from 'next/router'
import PictureOfMe from 'public/Me.webp'
import { FC } from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

const Hero: FC = () => {
  const router = useRouter()

  return (
    <div className='mb-10'>
      <h2 className='text-5xl py-2 m-3 text-teal-900 font-medium md:text-6xl dark:text-[#20C997] text-center'>
        Juan Carlos Galu&eacute;
      </h2>
      <h3 className='text-2xl py-2 m-3 md-text-3xl text-gray-900 dark:text-slate-200 text-center'>
        Desarrollador Fullstack MERN
      </h3>
      <div className='relative mx-auto bg-gradient-to-b from-teal-500 dark:from-green-300 rounded-lg my-5 overflow-hidden w-72 h-80 md:w-80 md:h-96'>
        <Image src={PictureOfMe} alt='My profile picture' placeholder='blur' />
      </div>
      <p className='indent-6 text-md py-2 m-3 leading-relaxed text-gray-800 md:text-xl dark:text-slate-200'>
        En los inicios de la pandemia tom&eacute; la decisi&oacute;n de dar un
        giro a mi vida laboral. Mis 14&nbsp;a&ntilde;os de experiencia en la
        profesi&oacute;n que estudi&eacute;, ingenier&iacute;a el&eacute;ctrica,
        ya no satisfac&iacute;an mis expectativas laborales.
      </p>
      <p className='indent-6 text-md py-2 m-3 leading-relaxed text-gray-800 md:text-xl dark:text-slate-200'>
        Como desde ni&ntilde;o me gustan las computadoras y la
        tecnolog&iacute;a, decid&iacute; estudiar programaci&oacute;n web y
        desde entonce me he enfocado en aprender el stack MERN.
      </p>
      <p className='indent-6 text-md py-2 m-3 leading-relaxed text-gray-800 md:text-xl dark:text-slate-200'>
        Me gusta aprender nuevas tecnolog&iacute;as y herramientas que hagan que
        los productos finales sean m&aacute;s amigables con los usuarios
        finales.
      </p>
      <p className='indent-6 text-md py-2 m-3 leading-relaxed text-gray-800 md:text-xl dark:text-slate-200'>
        Seguir&eacute; estudiando y haciendo proyectos pr&aacute;cticos para
        mejorar mis habilidades y{' '}
        <span className='text-pink-600 dark:text-pink-400'>
          lograr la reconversi&oacute;n laboral al mundo TI.
        </span>
      </p>
      <div className='flex justify-center items-center'>
        <button
          onClick={() => router.push('/myprojects')}
          type='button'
          className='dark:text-gray-900 text-white hover:bg-[#2C7A7B] bg-[#319795] dark:bg-[#88cccb] dark:hover:bg-[#50D0C4] font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2'
        >
          Mis proyectos <RiArrowRightSLine className='inline text-xl' />{' '}
        </button>
      </div>
    </div>
  )
}

export default Hero
