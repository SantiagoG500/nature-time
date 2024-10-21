import { Link } from 'react-router-dom'

export default function NatureCard ({ natureInfo }) {
  return (
    <>
      {natureInfo.map(val => {
        return (
          <Link key={val.scientificName} to={`/wiki?searchterm=${encodeURIComponent(val.scientificName)}`}>
            <div
              className={
                `
                  bg-background-secondary p-4 w-96 md:w-96 rounded shadow-custom-dark
                  flex flex-col items-center
                  hover:bg-background-emphasis-200
                  hover:shadow-color-emphasis-200
                  group
                `
              }
            >

              <h2 className='text-color-primary text-2xl font-bold mb-4 text-wrap truncate group-hover:text-color-emphasis-900' key={val.name}>
                {val.name}
              </h2>
              <p className='w-fit  text-color-primary-lighter group-hover:text-color-emphasis-900'>
                {val.scientificName}
              </p>
              <p className='w-fit  text-color-primary-lighter font-bold group-hover:text-color-emphasis-900'>
                {val.weight}
              </p>
            </div>
          </Link>
        )
      })}
    </>
  )
}
