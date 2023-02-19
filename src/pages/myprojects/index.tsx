import { useTranslation } from '@/context/i18n'
import { NextPage } from 'next'
import Layout from '../components/Layouts/Section'
import Portfolio from '../components/Portfolio'

const Projects: NextPage = () => {
  const { t } = useTranslation()
  return (
    <Layout
      title={t('PORTFOLIO_SEO_TITLE')}
      description={t('PORTFOLIO_SEO_DESCRIPTION')}
    >
      <Portfolio />
    </Layout>
  )
}

export default Projects
