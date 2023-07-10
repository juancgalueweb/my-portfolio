import { diplomasInfo } from '@/data/diplomasInfo'
import DiplomaTemplate from './DiplomaTemplate'

const AllDiplomas = () => {
  return (
    <>
      {diplomasInfo.map(diploma => (
        <DiplomaTemplate
          key={diploma.title}
          latest={diploma.latest}
          title={diploma.title}
          courseDuration={diploma.courseDuration}
          certifyingCompany={diploma.certifyingCompany}
          certificationIssuedDate={diploma.certificationIssuedDate}
          certificationContent={diploma.certificationContent}
          diplomaImageExternalUrl={diploma.diplomaImageExternalUrl}
          diplomaAWSUrl={diploma.diplomaAWSUrl}
          fetchingPriority={diploma.fetchingPriority}
        />
      ))}
    </>
  )
}

export default AllDiplomas
