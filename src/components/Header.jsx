import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'

import { Moon, Sun } from 'lucide-react'

function ToggleThemeButton () {
  const [themeDark, setThemeDark] = useState(true)

  const toggleTheme = () => {
    const body = document.body

    if (themeDark) {
      body.classList.remove('dark')
      body.classList.add('light')

      setThemeDark(false)
    } else {
      body.classList.remove('light')
      body.classList.add('dark')

      setThemeDark(true)
    }
  }

  return (

    <button onClick={toggleTheme}>
      {
      themeDark
        ? <Sun className='text-color-primary' />
        : <Moon />
    }
    </button>
  )
}

export default function Header () {
  const themeButtonRef = useRef(null)

  const navRef = useRef(undefined)
  const toggleNavVisibility = () => {
    navRef.current.classList.toggle('hidden')
  }

  return (
    <header className='flex justify-between p-4 md:w-auto md:max-w-screen-sm m-auto sticky top-2 rounded bg-background-secondary/55 backdrop-blur-md'>
      <div className=''>
        <a className='text-color-primary'>Logo</a>
      </div>

      <div className='relative flex  gap-4'>
        <nav className='hidden space-x-4 absolute right-0 top-full sm:flex sm:relative sm:top-0 ' ref={navRef}>
          <ul className='flex flex-col items-center pt-4 pb-4 w-60 sm:flex-row sm:p-0 sm:justify-evenly gap-6'>
            <li>
              <Link
                to='/'
                className=' text-color-primary hover:text-color-emphasis font-semibold'
                onClick={toggleNavVisibility}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='about/'
                className=' text-color-primary hover:text-color-emphasis font-semibold'
                onClick={toggleNavVisibility}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='quiz/'
                className=' text-color-primary hover:text-color-emphasis font-semibold'
                onClick={toggleNavVisibility}
              >
                Quiz
              </Link>
            </li>

          </ul>
        </nav>

        <button
          className='sm:hidden text-color-primary '
          onClick={toggleNavVisibility}
          ref={themeButtonRef}
        >
          Menu
        </button>

        <ToggleThemeButton />
      </div>

    </header>

  )
}
