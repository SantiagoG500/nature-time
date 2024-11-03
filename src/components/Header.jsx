import { Link } from 'react-router-dom'
import { useRef } from 'react'
import ToggleThemeButton from './ToggleThemeButton'
import { Menu } from 'lucide-react'

export default function Header () {
  const themeButtonRef = useRef(null)

  const navRef = useRef(undefined)
  const toggleNavVisibility = () => {
    navRef.current.classList.toggle('hidden')
  }

  return (
    <header className='
      sticky top-3
      w-11/12 max-w-screen-md
      m-auto
      p-4
      flex justify-between
      rounded

      before:content-[""]
      before:absolute
      before:w-full
      before:h-full
      before:top-0
      before:left-0
      before:backdrop-blur-sm
      before:z-[-1]

      bg-background-secondary/65
    '
    >
      <div>
        <Link to='/'>
          <p className='text-color-primary'>Logo</p>
        </Link>
      </div>

      <div className='flex gap-4'>
        <nav
          className='
            before:content-[""]
            before:absolute
            before:w-full
            before:h-full
            before:top-0
            before:left-0
            before:backdrop-blur-sm
            before:z-[-1]

            bg-background-secondary/65

            sm:bg-transparent
            sm:before:backdrop-blur-0

            hidden space-x-4 absolute right-0 top-full
            sm:flex sm:relative sm:top-0
            rounded
          '
          ref={navRef}
        >
          <ul className='flex flex-col items-center pt-4 pb-4 w-60 sm:flex-row sm:p-0 sm:justify-evenly gap-6'>
            <li>
              <Link
                to='/'
                className='text-color-primary hover:text-color-emphasis font-semibold'
                onClick={toggleNavVisibility}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='about/'
                className='text-color-primary hover:text-color-emphasis font-semibold'
                onClick={toggleNavVisibility}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='quiz/'
                className='text-color-primary hover:text-color-emphasis font-semibold'
                onClick={toggleNavVisibility}
              >
                Quiz
              </Link>
            </li>
          </ul>
        </nav>

        <ToggleThemeButton />
        <button
          className='sm:hidden text-color-primary'
          onClick={toggleNavVisibility}
          ref={themeButtonRef}
        >
          <Menu />
        </button>

      </div>
    </header>
  )
}
