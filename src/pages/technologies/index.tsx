import { NextPage } from 'next'
import AppWrapper from '../components/AppWrapper'
import ScrollToTop from '../components/ScrollToTop'
import Technologies from '../components/Technologies'

const Techs: NextPage = () => {
  const title = 'Tecnologías que uso'
  const description =
    'Detalle de las tecnologías que uso como desarrollador full stack con MERN'
  return (
    <AppWrapper title={title} description={description}>
      <ScrollToTop />
      <Technologies />
    </AppWrapper>
  )
}

export default Techs
