import { NextPage } from 'next'

import AppWrapper from '../components/AppWrapper'
import CodingDojo2021 from '../components/Diplomas/CodingDojo2021'
import Docker2022 from '../components/Diplomas/Docker2022'
import NextJS2022 from '../components/Diplomas/NextJS2022'
import PFE2020 from '../components/Diplomas/PFE2020'
import ScriptingInPython2020 from '../components/Diplomas/ScriptingInPython2020'
import TypeScript2023 from '../components/Diplomas/TypeScript2023'
import WDFE2021 from '../components/Diplomas/WDFE2021'

const Projects: NextPage = () => {
  const title = 'Diplomas y certificaciones'
  const description =
    'Detalle de los diplomas, certificaciones y constancias de culminación de cursos que he adquirido como desarrollador full stack con MERN'

  return (
    <AppWrapper title={title} description={description}>
      <h3 className='m-3 text-3xl text-gray-900 dark:text-slate-200 mb-10'>
        Diplomas, certificaciones y constancias de culminaci&oacute;n de cursos
      </h3>
      <ol className='relative border-l border-gray-200 dark:border-gray-700 ml-4 my-3 mr-3'>
        <TypeScript2023 />
        <NextJS2022 />
        <Docker2022 />
        <CodingDojo2021 />
        <WDFE2021 />
        <ScriptingInPython2020 />
        <PFE2020 />
      </ol>
    </AppWrapper>
  )
}

export default Projects
