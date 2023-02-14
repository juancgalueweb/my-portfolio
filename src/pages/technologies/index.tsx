import { useTranslation } from '@/context/i18n'
import { NextPage } from 'next'
import AppWrapper from '../components/AppWrapper'
import Technologies from '../components/Technologies'

const Techs: NextPage = () => {
  const { t } = useTranslation()
  return (
    <AppWrapper
      title={t('TECH_SEO_TITLE')}
      description={t('TECH_SEO_DESCRIPTION')}
    >
      <Technologies />
    </AppWrapper>
  )
}

export default Techs
