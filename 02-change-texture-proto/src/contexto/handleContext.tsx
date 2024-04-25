import { useState } from 'react';
import {Contexto} from './contextoGlobal'

export function HandleContext({children}: {children: React.ReactNode}) {

  const [something, setSomething] = useState(true)

  function handleSomething():void{
    setSomething(prev =>!prev)
  }
  return (
    <Contexto.Provider value={{'hola':[12,1], something, handleSomething }}>
      {children}
    </Contexto.Provider>
  )
}