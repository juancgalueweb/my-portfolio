import {
  type I18NContextType,
  type LanguagesProps,
  type ReactChildren
} from '@/types.d'
import { useRouter } from 'next/router'
import { createContext, useCallback, useContext } from 'react'
import en from '../translations/en.json'
import es from '../translations/es.json'

const I18NContext = createContext<I18NContextType | undefined>(undefined)

const languages: LanguagesProps = { es, en }

export function I18NProvider({ children }: ReactChildren) {
  const { locale } = useRouter()

  const t = useCallback(
    (key: string) => {
      if (locale != null) {
        return languages[locale][key]
      }
      return ''
    },
    [locale]
  )

  return <I18NContext.Provider value={{ t }}>{children}</I18NContext.Provider>
}

export function useTranslation() {
  const context = useContext(I18NContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within an I18NProvider')
  }
  return context
}
