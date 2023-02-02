import { createContext, FC, PropsWithChildren, useState } from 'react'

type DarkModeContextProps = {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

export const DarkModeContext = createContext<DarkModeContextProps>(
  {} as DarkModeContextProps
)

export const DarkModeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}
