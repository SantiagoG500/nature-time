import { Link } from 'react-router-dom'
import { useRef } from 'react'
import ToggleThemeButton from './ToggleThemeButton'

export default function Header () {
  const themeButtonRef = useRef(null)

  const navRef = useRef(undefined)
  const toggleNavVisibility = () => {
    navRef.current.classList.toggle('hidden')
  }
  //  sticky top-2
  //  md:w-auto md:max-w-screen-sm m-auto

  // sticky top-4 left-1/2 transform -translate-x-1/2
  return (
    <header className='
      sticky top-3
      w-11/12 max-w-screen-md
      m-auto
      p-4
      flex justify-between
      rounded
      bg-background-secondary/55 backdrop-blur-md
    '
    >
      <div className=''>
        <a className='text-color-primary'>Logo</a>
      </div>

      <div className='flex  gap-4'>
        <nav
          className='
            hidden space-x-4 absolute right-0 top-full
            sm:flex sm:relative sm:top-0
            sm:bg-transparent sm:backdrop-blur-0
            bg-background-secondary/55 backdrop-blur-md
          '
          ref={navRef}
        >
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
