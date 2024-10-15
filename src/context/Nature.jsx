import { createContext, useState } from 'react'
import initialFaunaData from '../mocks/fauna.json'

export const natureContext = createContext()

export function NatureContext ({ children }) {
  const [natureInfo] = useState(initialFaunaData)

  return (
    <natureContext.Provider
      value={{
        natureInfo
      }}
    >
      {children}
    </natureContext.Provider>
  )
}
