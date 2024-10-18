import { createContext } from 'react'
import { useToggleColor } from '../hooks/useToggleColor'

export const themeContext = createContext()

export function ThemeProvider ({ children }) {
  const { themeDark, toggleTheme } = useToggleColor()

  return (
    <themeContext.Provider
      value={{ themeDark, toggleTheme }}
    >
      {children}
    </themeContext.Provider>
  )
}
