import {Contexto} from './contextoGlobal'

export function HandleContext({children}: {children: React.ReactNode}) {

  console.log(Contexto);
  return (
    <Contexto.Provider value={{'hola', [12,1]}}>
      {children}
    </Contexto.Provider>
  )
}