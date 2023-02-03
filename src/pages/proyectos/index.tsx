import { NextPage } from 'next'
import AppWrapper from '../components/AppWrapper'
import Projects from '../components/Projects'

const MyWines: NextPage = () => {
  const title = 'Mis proyectos web'
  const description =
    'Detalle de los proyectos que he realizado como desarrollador full stack con MERN'

  return (
    <AppWrapper title={title} description={description}>
      <Projects />
    </AppWrapper>
  )
}

export default MyWines
