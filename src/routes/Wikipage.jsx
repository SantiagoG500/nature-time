import { useLoaderData } from 'react-router-dom'

import DOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

import { useEffect, useRef } from 'react'

export default function WikiPage () {
  const sectionRef = useRef(null)

  const data = useLoaderData()
  const { response } = data
  const { query } = response

  const dataInfo = Object.entries(query.pages)
  const pageInfo = dataInfo[0][1]
  const { title, extract } = pageInfo

  const window = new JSDOM('').window
  const purify = DOMPurify(window)

  const sanitizedHTML = purify.sanitize(extract)

  useEffect(() => {
    sectionRef.current.innerHTML = sanitizedHTML
  }, [])

  return (
    <>
      <section className=' md:w-auto md:max-w-screen-sm m-auto'>
        <h1 className='text-color-primary font-bold mt-9 mb-9 text-2xl  sm:text-3xl'>{title}</h1>
        <section className='flex flex-col gap-6 leading-7 text-color-primary text-wrap text-sm sm:text-base' ref={sectionRef}> </section>
      </section>
    </>
  )
}
