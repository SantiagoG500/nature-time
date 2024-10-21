import { useRouteError, Link } from 'react-router-dom'

export default function ErrorBoundary () {
  const error = useRouteError()

  console.log({ error })

  return (
    <div id='error-page' className='h-full'>
      <h1 className='text-color-primary text-4xl text-center font-bold mt-9 mb-9'>This is not fine. ({error.status})</h1>
      <div className='flex flex-col items-center gap-6'>
        <p className='text-color-primary text-center'>An unexpected error has occurred. <i>{error.message || error.statusText}</i> </p>
        <img
          src='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGZjZm95ajVvamZyazhlaGJrZnNkczB1aXoxNnB2dmVrM2hudG50ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NTur7XlVDUdqM/giphy.gif'
          alt='this is fine gif'
          className=''
        />
        <Link to='/' className='text-color-primary hover:text-color-emphasis-500'>Go back to the Home page</Link>
      </div>
    </div>
  )
}
