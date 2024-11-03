import { createContext, useState } from 'react'
import initialFaunaData from '../mocks/fauna.json'

export const natureContext = createContext()

export function NatureContext ({ children }) {
  const [natureInfo] = useState(initialFaunaData)
  const natureEntries = Object.entries(initialFaunaData)

  return (
    <natureContext.Provider
      value={{
        natureInfo,
        natureEntries
      }}
    >
      {children}
    </natureContext.Provider>
  )
}
