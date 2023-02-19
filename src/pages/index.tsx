import { useTranslation } from '@/context/i18n'
import Hero from './components/Hero'
import Layout from './components/Layouts/Section'

export default function Home() {
  const { t } = useTranslation()

  return (
    <Layout title={t('HOME_SEO_TITLE')} description={t('HOME_SEO_DESCRIPTION')}>
      <Hero />
    </Layout>
  )
}
