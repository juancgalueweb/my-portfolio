import { useTranslation } from '@/context/i18n'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from '../components/Layouts/Section'

const Projects: NextPage = () => {
  const { t } = useTranslation()
  const Portfolio = dynamic(() => import('../components/Portfolio'))

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
