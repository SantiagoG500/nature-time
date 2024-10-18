import { useState } from 'react'

export function useToggleColor () {
  const [themeDark, setThemeDark] = useState(true)

  const toggleTheme = () => {
    const body = document.body

    if (themeDark) {
      body.classList.remove('dark')
      body.classList.add('light')

      console.log('a')
      setThemeDark(false)
    } else {
      body.classList.remove('light')
      body.classList.add('dark')

      console.log('b')
      setThemeDark(true)
    }
  }

  return { toggleTheme, themeDark }
}
