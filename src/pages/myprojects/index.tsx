import { NextPage } from 'next'
import AppWrapper from '../components/AppWrapper'
import Portfolio from '../components/Portfolio'
import ScrollToTop from '../components/ScrollToTop'

const Projects: NextPage = () => {
  const title = 'Mis proyectos web'
  const description =
    'Detalle de los proyectos que he realizado como desarrollador full stack con MERN'

  return (
    <AppWrapper title={title} description={description}>
      <ScrollToTop />
      <Portfolio />
    </AppWrapper>
  )
}

export default Projects
