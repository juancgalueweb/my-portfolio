import { I18NContext } from '@/context/i18n'
import { useContext } from 'react'

const useTranslation = () => {
  const context = useContext(I18NContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within an I18NProvider')
  }
  return context
}

export default useTranslation
