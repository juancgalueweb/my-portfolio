import { NextPage } from 'next'
import AppWrapper from '../components/AppWrapper'

const MyWines: NextPage = () => {
  const title = 'Detalle de app de Mis Vinos'
  const description =
    'Detalle explicativo de las tecnologías usadas en la app de Mis Vinos'

  return (
    <AppWrapper title={title} description={description}>
      <h1 className='text-center'>Hello fu***** world!</h1>
    </AppWrapper>
  )
}

export default MyWines
