import { NextPage } from 'next'
import AppWrapper from '../components/AppWrapper'

const Projects: NextPage = () => {
  const title = 'Diplomas y certificaciones'
  const description =
    'Detalle de los diplomas, certificaciones y certificaciones de asistencia que he adquirido como desarrollador full stack con MERN'

  return (
    <AppWrapper title={title} description={description}>
      <h1 className='dark:text-slate-200'>Hola desde los diplomas</h1>
    </AppWrapper>
  )
}

export default Projects
