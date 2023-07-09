import useTranslation from '@/hooks/useTranslation'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from '../components/Layouts/Section'
import Loading from '../components/Loader/Loading'

const Projects: NextPage = () => {
  const { t } = useTranslation()
  const AllDiplomas = dynamic(
    () => import('../components/Diplomas/AllDiplomas'),
    {
      loading: () => <Loading />
    }
  )

  return (
    <Layout
      title={t('DIPLOMAS_SEO_TITLE')}
      description={t('DIPLOMAS_SEO_DESCRIPTION')}
    >
      <h3 className='m-3 text-3xl text-teal-900 dark:text-[#20C997] mb-10'>
        {t('DIPLOMAS_H3')}
      </h3>
      <ol className='relative border-l border-gray-200 dark:border-gray-700 ml-4 my-3 mr-3'>
        <AllDiplomas />
      </ol>
    </Layout>
  )
}

export default Projects
