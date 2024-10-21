export function FilterNav ({ regionNames, currentRegion, updateRegion }) {
  return (
    <nav className='
      flex justify-center gap-5 p-4
      ñmd:max-w-screen-sm
      m-auto
      pl-24
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
              ${currentRegion === regionName ? 'text-color-emphasis-600' : 'text-color-primary'}
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
