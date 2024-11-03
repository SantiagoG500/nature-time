import { useContext } from 'react'
import { natureContext } from '../context/Nature'
import NatureInfoContainer from '../components/NatureInfoContainer'
import { useFilters } from '../hooks/userFilters'
import { FilterNav } from '../components/FilterNav'

export default function Home () {
  const { natureInfo } = useContext(natureContext)
  const { filter, updateRegion, regionNames, filteredNode } = useFilters({ natureInfo })

  return (
    <>
      <section className='mt-20'>
        <header>
          <h1 className='text-color-primary text-4xl text-center font-bold mt-9 mb-9'>Nature Time</h1>
          <p className='text-color-primary  text-center mt-9 mb-9'>
            <span className='font-bold'>Discover and learn</span> the amazing natural life in Colombia &#x1F1E8;&#x1F1F4;
          </p>
        </header>
        <FilterNav
          regionNames={regionNames}
          updateRegion={updateRegion}
          currentRegion={filter.region}
        />
        <NatureInfoContainer region={filteredNode} />
      </section>
    </>
  )
}
