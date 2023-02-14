import { useTranslation } from '@/context/i18n'
import AppWrapper from './components/AppWrapper'
import Hero from './components/Hero'

export default function Home() {
  const { t } = useTranslation()

  return (
    <AppWrapper
      title={t('HOME_SEO_TITLE')}
      description={t('HOME_SEO_DESCRIPTION')}
    >
      <Hero />
    </AppWrapper>
  )
}
