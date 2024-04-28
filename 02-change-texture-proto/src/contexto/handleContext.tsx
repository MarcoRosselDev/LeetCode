import { useState } from 'react';
import {Contexto} from './contextoGlobal'
import { colorCubo } from '../type';

export function HandleContext({children}: {children: React.ReactNode}) {

  const [color, setColor] = useState<colorCubo>('green')
  const [posicion, setPosicion] = useState([1.2, 0, 0])

  function cambiarColor(col:colorCubo):void{
    setColor(col)
  }
  
  return (
    <Contexto.Provider value={{color, cambiarColor, posicion, setPosicion}}>
      {children}
    </Contexto.Provider>
  )
}