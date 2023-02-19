import { useTranslation } from '@/context/i18n'
import { NextPage } from 'next'
import Layout from '../components/Layouts/Section'
import Technologies from '../components/Technologies'

const Techs: NextPage = () => {
  const { t } = useTranslation()
  return (
    <Layout title={t('TECH_SEO_TITLE')} description={t('TECH_SEO_DESCRIPTION')}>
      <Technologies />
    </Layout>
  )
}

export default Techs
