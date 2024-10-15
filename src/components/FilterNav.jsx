export function FilterNav ({ regionNames, currentRegion, updateRegion }) {
  return (
    <nav className='bg-background-secondary flex justify-center gap-5 p-4 overflow-auto rounded'>
      {regionNames.map((regionName) => {
        return (
          <button
            key={regionName}
            className={`
              font-semibold 
              ${currentRegion === regionName ? 'text-color-emphasis' : 'text-color-primary'}
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
