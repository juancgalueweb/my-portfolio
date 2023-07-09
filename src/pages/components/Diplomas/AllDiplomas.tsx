import { diplomasInfo } from '@/data/diplomasInfo'
import { DiplomaTemplateProps } from '@/types.d'
import DiplomaTemplate from './DiplomaTemplate'

const AllDiplomas = () => {
  const renderDiploma = (diploma: DiplomaTemplateProps) => {
    return (
      <DiplomaTemplate
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
    )
  }
  return (
    <>
      {renderDiploma(diplomasInfo.scrumFundation)}
      {renderDiploma(diplomasInfo.typeScript2023)}
      {renderDiploma(diplomasInfo.nextJs2022)}
      {renderDiploma(diplomasInfo.docker2022)}
      {renderDiploma(diplomasInfo.codingDojo2012)}
      {renderDiploma(diplomasInfo.devslopes)}
      {renderDiploma(diplomasInfo.webDesignForEverybody)}
      {renderDiploma(diplomasInfo.scriptingInPython2020)}
      {renderDiploma(diplomasInfo.pythonForEverybody2020)}
      {renderDiploma(diplomasInfo.ielts2014)}
    </>
  )
}

export default AllDiplomas
