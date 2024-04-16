import React, {createContext, useState} from 'react'
import { Component } from './component'

type Theme = string | undefined

export const SomeContext = createContext<Theme>('ligth')

export function ThemeContext({children}:{children: React.ReactNode}) {
  const [theme, setTheme] = useState('light')
  function handleTheme():void {
    setTheme(prev => prev === 'light'? 'dark': 'light')
  }

  return (
    <SomeContext.Provider value={theme} >
      <Component handleTheme_f={handleTheme} />
      {children}

    </SomeContext.Provider>
  )
}