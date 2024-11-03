import { createContext } from 'react'
import { useFilters } from '../hooks/userFilters'

export const filterContext = createContext()

export function FilterProvider ({ children, natureInfo }) {
  const { filter, updateRegion, regionNames, filteredNode } = useFilters({ natureInfo })

  return (
    <filterContext.Provider
      value={{
        filter,
        updateRegion,
        regionNames,
        filteredNode
      }}
    >
      {children}
    </filterContext.Provider>
  )
}
