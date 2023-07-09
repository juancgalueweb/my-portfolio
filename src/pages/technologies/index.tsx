import useTranslation from '@/hooks/useTranslation'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from '../components/Layouts/Section'
import Loading from '../components/Loader/Loading'

const Techs: NextPage = () => {
  const { t } = useTranslation()
  const Technologies = dynamic(
    () => import('../components/Techs/Technologies'),
    {
      loading: () => <Loading />
    }
  )

  return (
    <Layout title={t('TECH_SEO_TITLE')} description={t('TECH_SEO_DESCRIPTION')}>
      <Technologies />
    </Layout>
  )
}

export default Techs
