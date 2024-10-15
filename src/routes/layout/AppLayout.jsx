import { Outlet } from 'react-router-dom'
import { NatureContext } from '../../context/Nature'

import Header from '../../components/Header'

export default function AppLayout ({ children }) {
  return (

    <NatureContext>
      <div className='h-screen bg-back t-'>
        <Header />
        <main id='content' className='min-h-screen w-11/12 m-auto  pb-12'>
          {children ?? <Outlet />}
        </main>
      </div>
    </NatureContext>

  )
}
