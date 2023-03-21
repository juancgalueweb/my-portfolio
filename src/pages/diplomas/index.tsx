import { useTranslation } from '@/context/i18n'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from '../components/Layouts/Section'

const Projects: NextPage = () => {
  const { t } = useTranslation()
  const AllDiplomas = dynamic(() => import('../components/AllDiplomas'))

  return (
    <Layout
      title={t('DIPLOMAS_SEO_TITLE')}
      description={t('DIPLOMAS_SEO_DESCRIPTION')}
    >
      <h3 className='m-3 text-3xl text-gray-900 dark:text-slate-200 mb-10'>
        {t('DIPLOMAS_H3')}
      </h3>
      <ol className='relative border-l border-gray-200 dark:border-gray-700 ml-4 my-3 mr-3'>
        <AllDiplomas />
      </ol>
    </Layout>
  )
}

export default Projects
