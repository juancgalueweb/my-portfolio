import useTranslation from '@/hooks/useTranslation'
import Layout from './components/Layouts/Section'
import Hero from './components/MainPage/Hero'

export default function Home() {
  const { t } = useTranslation()

  return (
    <Layout title={t('HOME_SEO_TITLE')} description={t('HOME_SEO_DESCRIPTION')}>
      <Hero />
    </Layout>
  )
}
