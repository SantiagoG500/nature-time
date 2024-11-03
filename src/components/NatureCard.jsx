import { Link } from 'react-router-dom'

export default function NatureCard ({ natureInfo, region }) {
  return (
    <>
      {natureInfo.map(val => {
        return (
          <Link key={val.scientificName} to={`/wiki?searchterm=${encodeURIComponent(val.scientificName)}&region=${region[0]}`}>
            <div
              className={
                ` 
                  flex flex-col items-center
                  p-4 w-72  rounded-xl shadow-custom-dark
                  bg-background-secondary
                  hover:bg-background-emphasis-200
                  hover:shadow-color-emphasis-200
                  group
                `
              }
            >
              <div className=' w-full h-48 mb-6 ml-auto mr-auto lg:mr-0 rounded-xl overflow-hidden bg-color-primary '>
                <img className='w-full h-full object-cover object-center' src={val.thumbnail} alt={val.scientificName} />
              </div>

              <h2 className='text-color-primary text-2xl text-center font-bold mb-4 text-wrap truncate group-hover:text-color-emphasis-900' key={val.name}>
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
