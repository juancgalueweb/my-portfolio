import { ReactNode } from 'react'

export interface NavigationProps {
  name: string
  href: string
  current: boolean
}

export enum TypePhase {
  Typing,
  Pausing,
  Deleting
}

export interface ReactChildren {
  children: ReactNode
}

export interface LayoutProps {
  title: string
  children: ReactNode
  description: string
}

export interface LanguagesProps {
  [key: string]: { [key: string]: string }
}

export interface I18NContextType {
  t: (key: string) => string
}

export interface DiplomaTemplateProps {
  latest: boolean
  title: string
  courseDuration: string
  certifyingCompany: string
  certificationIssuedDate: string
  certificationContent: string
  diplomaImageExternalUrl: string
  diplomaAWSUrl: string
  fetchingPriority: boolean
}
