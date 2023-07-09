import useTranslation from '@/hooks/useTranslation'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from '../components/Layouts/Section'
import Loading from '../components/Loader/Loading'

const Projects: NextPage = () => {
  const { t } = useTranslation()
  const Portfolio = dynamic(() => import('../components/Portfolio'), {
    loading: () => <Loading />
  })

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
