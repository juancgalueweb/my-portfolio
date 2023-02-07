import { NextPage } from 'next'
import AppWrapper from '../components/AppWrapper'

const WineApp: NextPage = () => {
  const title = 'App de Mis Vinos Favoritos'
  const description = 'Detalles del proyecto de Mis Vinos Favoritos'

  return (
    <AppWrapper title={title} description={description}>
      <h1>Hola desde la ruta wineapp</h1>
    </AppWrapper>
  )
}

export default WineApp
