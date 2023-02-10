import { NextPage } from 'next'

import AppWrapper from '../components/AppWrapper'
import NextJS2022 from '../components/Diplomas/NextJS2022'
import TypeScript2023 from '../components/Diplomas/TypeScript2023'

const Projects: NextPage = () => {
  const title = 'Diplomas y certificaciones'
  const description =
    'Detalle de los diplomas, certificaciones y certificaciones de asistencia que he adquirido como desarrollador full stack con MERN'

  return (
    <AppWrapper title={title} description={description}>
      <h3 className='m-3 text-3xl text-gray-900 dark:text-slate-200 mb-10'>
        Diplomas, certificaciones y constancias de culminación de cursos
      </h3>
      <ol className='relative border-l border-gray-200 dark:border-gray-700 ml-4 my-3 mr-3'>
        <TypeScript2023 />
        <NextJS2022 />
      </ol>
    </AppWrapper>
  )
}

export default Projects
