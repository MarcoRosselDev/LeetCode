import React, {createContext, useState} from 'react'

type Theme = string | React.SetStateAction

const SomeContext = createContext<Theme>('ligth')

export function ThemeContext({children}:{children: React.ReactNode}) {
  const [theme, setTheme] = useState('light')
  function handleTheme():void {
    setTheme(prev => prev === 'light'? 'dark': 'light')
  }

  return (
    <SomeContext.Provider value={theme} _handleTheme={handleTheme}>
      {children}
    </SomeContext.Provider>
  )
}