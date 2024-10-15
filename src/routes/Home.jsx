import { useContext } from 'react'
import { natureContext } from '../context/Nature'
import NatureInfoContainer from '../components/NatureInfoContainer'
import { useFilters } from '../hooks/userFilters'
import { FilterNav } from '../components/FilterNav'

export function Home () {
  const { natureInfo } = useContext(natureContext)
  const { filter, updateRegion, regionNames, filteredNode } = useFilters({ natureInfo })

  return (
    <>
      <h1 className='text-color-primary text-4xl text-center font-bold mt-9 mb-9'>Fauna information </h1>

      <section className='mt-20'>
        <FilterNav regionNames={regionNames} updateRegion={updateRegion} currentRegion={filter.region} />
        <NatureInfoContainer region={filteredNode} />
      </section>
    </>
  )
}
