import { useContext } from 'react'

import { themeContext } from '../context/Theme'

import { Moon, Sun } from 'lucide-react'

export default function ToggleThemeButton () {
  const { themeDark, toggleTheme } = useContext(themeContext)

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
