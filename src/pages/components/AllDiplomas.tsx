import CodingDojo2021 from './Diplomas/CodingDojo2021'
import Docker2022 from './Diplomas/Docker2022'
import NextJS2022 from './Diplomas/NextJS2022'
import PFE2020 from './Diplomas/PFE2020'
import ScriptingInPython2020 from './Diplomas/ScriptingInPython2020'
import TypeScript2023 from './Diplomas/TypeScript2023'
import WDFE2021 from './Diplomas/WDFE2021'

const AllDiplomas = () => {
  return (
    <>
      <TypeScript2023 latest={true} />
      <NextJS2022 latest={false} />
      <Docker2022 />
      <CodingDojo2021 />
      <WDFE2021 />
      <ScriptingInPython2020 />
      <PFE2020 />
    </>
  )
}

export default AllDiplomas
