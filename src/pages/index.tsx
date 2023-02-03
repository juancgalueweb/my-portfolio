import AppWrapper from './components/AppWrapper'
import Hero from './components/Hero'
import Technologies from './components/Technologies'

export default function Home() {
  const title = 'Juan Galué portafolio'
  const description = 'Mi portafolio web diseñado con NextJS y Typescript'

  return (
    <AppWrapper title={title} description={description}>
      <Hero />
      <Technologies />
    </AppWrapper>
  )
}
