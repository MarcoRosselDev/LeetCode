import { useState } from 'react';
import {Contexto} from './contextoGlobal'
import { colorCubo } from '../type';

export function HandleContext({children}: {children: React.ReactNode}) {

  const [color, setColor] = useState<colorCubo>('green')

  function cambiarColor(col:colorCubo):void{
    setColor(col)
  }
  
  return (
    <Contexto.Provider value={{color, cambiarColor}}>
      {children}
    </Contexto.Provider>
  )
}