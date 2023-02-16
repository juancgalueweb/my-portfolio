import { useTranslation } from '@/context/i18n'
import { NextPage } from 'next'
import AppWrapper from '../components/AppWrapper'
import Portfolio from '../components/Portfolio'

const Projects: NextPage = () => {
  const { t } = useTranslation()
  return (
    <AppWrapper
      title={t('PORTFOLIO_SEO_TITLE')}
      description={t('PORTFOLIO_SEO_DESCRIPTION')}
    >
      <Portfolio />
    </AppWrapper>
  )
}

export default Projects
