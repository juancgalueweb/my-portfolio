import { useTranslation } from '@/context/i18n'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from '../components/Layouts/Section'

const Techs: NextPage = () => {
  const { t } = useTranslation()
  const Technologies = dynamic(() => import('../components/Technologies'))

  return (
    <Layout title={t('TECH_SEO_TITLE')} description={t('TECH_SEO_DESCRIPTION')}>
      <Technologies />
    </Layout>
  )
}

export default Techs
