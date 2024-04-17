import {useContext} from 'react'
import { SomeContext } from './contexto'

export function Component({handleTheme_f} : {handleTheme_f: () => void}) {
  const theme = useContext(SomeContext)
  return (
    <div>
      <p>{theme} from context</p>
      <button onClick={() => handleTheme_f()} >cambiar</button>
    </div>
  )
}