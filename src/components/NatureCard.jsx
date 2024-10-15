import { Link } from 'react-router-dom'

export default function NatureCard ({ natureInfo }) {
  return (
    <>
      {natureInfo.map(val => {
        return (
          <Link key={val.scientificName} to={`/wiki?searchterm=${encodeURIComponent(val.scientificName)}`}>
            <div className='bg-background-secondary p-4 w-96 md:w-96 rounded shadow-custom-dark'>
              <h2 className='text-color-primary text-2xl font-bold mb-4 text-wrap truncate' key={val.name}>
                {val.name}
              </h2>
              <p className='w-fit  text-color-primary-lighter'>
                <span className='font-bold text-color-primary'>Scientific Name:</span> {val.scientificName}
              </p>
              <p className='w-fit  text-color-primary-lighter'>
                <span className='font-bold text-color-primary'>Weight: </span>
                {val.weight}
              </p>
            </div>
          </Link>
        )
      })}
    </>
  )
}
