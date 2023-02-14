import { useRouter } from 'next/router'
import { createContext, useCallback, useContext } from 'react'
import en from '../translations/en.json'
import es from '../translations/es.json'

const I18NContext = createContext()

const languages = { es, en }

export function I18NProvider({ children }) {
  const { locale } = useRouter()
  const t = useCallback(
    key => {
      return languages[locale][key]
    },
    [locale]
  )

  return <I18NContext.Provider value={{ t }}>{children}</I18NContext.Provider>
}

export function useTranslation() {
  const context = useContext(I18NContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a I18NProvider')
  }
  return context
}
