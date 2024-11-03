import { useContext } from 'react'
import { themeContext } from '../context/Theme'

export function FilterNav ({ regionNames, currentRegion, updateRegion }) {
  const { themeDark } = useContext(themeContext)
  const emphasisColorText = themeDark ? 'text-color-emphasis-300' : 'text-color-emphasis-700'

  return (
    <nav className='
      flex justify-evenly gap-5 p-4
      md:max-w-screen-sm
      sm:pl-0
      m-auto
      bg-background-secondary
      overflow-auto
      rounded
    '
    >
      {regionNames.map((regionName) => {
        return (
          <button
            key={regionName}
            className={`
              font-semibold 
              ${currentRegion === regionName ? emphasisColorText : 'text-color-primary'}
            `}
            onClick={() => updateRegion(regionName)}
          >
            {regionName}
          </button>
        )
      })}
    </nav>
  )
}
