import sanitizeHtml from 'sanitize-html'

import { useLoaderData } from 'react-router-dom'
import { useContext, useEffect, useRef } from 'react'
import { natureContext } from '../context/Nature'

export default function WikiPage () {
  const { natureEntries } = useContext(natureContext)
  const sectionRef = useRef(null)

  const data = useLoaderData()
  const { response, region, search } = data
  const { query } = response

  const dataInfo = Object.entries(query.pages)
  const pageInfo = dataInfo[0][1]
  const { title, extract } = pageInfo

  useEffect(() => {
    const cleanExtract = sanitizeHtml(extract)
    sectionRef.current.innerHTML = cleanExtract
  }, [])

  const currentRegion = natureEntries.find(r => r[0] === region)
  const currentAnimal = currentRegion[1].find(animal => animal.scientificName === search)

  return (
    <>
      <section className=' md:w-auto md:max-w-screen-sm m-auto mt-9'>
        <header>
          <div className='
            bg-color-primary
            w-full
            aspect-video
            mt-6 ml-auto mr-auto lg:mr-0
            rounded-xl
            overflow-hidden
          '
          >
            <img
              className='w-full h-full object-cover object-center'
              src={currentAnimal.img}
              alt={currentAnimal.name}
            />
          </div>
          <h1 className='text-color-primary font-bold mt-9 mb-9 text-2xl  sm:text-3xl'>
            {title}
          </h1>
        </header>
        <section className='flex flex-col gap-6 leading-7 text-color-primary text-wrap text-sm sm:text-base' ref={sectionRef}> </section>
      </section>
    </>
  )
}
