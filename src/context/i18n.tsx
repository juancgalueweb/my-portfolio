import {
  type I18NContextType,
  type LanguagesProps,
  type ReactChildren
} from '@/types.d'
import { useRouter } from 'next/router'
import { createContext, useCallback } from 'react'
import en from '../translations/en.json'
import es from '../translations/es.json'

export const I18NContext = createContext<I18NContextType | undefined>(undefined)

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
