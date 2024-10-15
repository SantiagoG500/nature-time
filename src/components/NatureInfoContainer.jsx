import NatureCard from './NatureCard'

export default function NatureInfoContainer ({ region }) {
  const [regionName, natureInfo] = region

  return (
    <>
      <div key={regionName} className='pb-4 pt-4'>
        <h1
          className='text-color-primary text-3xl text-center font-bold mb-9'
        >
          {regionName}
        </h1>

        <div className='flex flex-wrap justify-center gap-5'>
          <NatureCard natureInfo={natureInfo} />
        </div>
      </div>
    </>
  )
}
