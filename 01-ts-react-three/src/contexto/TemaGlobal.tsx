import {useState } from "react";
import {context} from './Context'

export type Tema = 'dark' | 'ligth' | 'purple'
export function TemaGlobal({children}: {children: React.ReactNode}) {
  const [dark, setDark] = useState('dark')


  function handleDark(value: Tema):void {
    setDark(value)
  }
  return (
    <context.Provider value={{
      dark,
      handleDark
    }} >
      {children}
    </context.Provider>
  )
}