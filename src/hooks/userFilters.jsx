import { useState } from 'react'
import { DoubleLinkedList } from '../utils/linked_list'

export function useFilters ({ natureInfo }) {
  const [filter, setFilter] = useState({
    region: 'Pácifico'
  })

  const infoList = Object.entries(natureInfo)
  const linkedList = DoubleLinkedList()
  linkedList.fromArray(infoList)

  const filteredNode = linkedList.find(val => val[0] === filter.region).value
  const regionNames = infoList.map(val => val[0])

  const updateRegion = (newRegion) => {
    if (newRegion === filter.region) return

    setFilter(prevFilter => ({
      ...prevFilter,
      region: newRegion
    }))
  }

  return { filter, updateRegion, regionNames, filteredNode }
}
