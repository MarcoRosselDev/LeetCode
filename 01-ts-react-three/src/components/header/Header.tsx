import { useContext } from 'react'
import './header.css'
import { context } from '../../contexto/Context'
/* import { Tema } from '../../contexto/Tema'
import { useContext } from 'react' */

export function Header() {

  const {dark, handleDark} = useContext(context)
  return (
    <header>
      <nav>
        <p>Logo</p>
        <ul>
          <li>3D</li>
          <li>another</li>
          <li>cv</li>
        </ul>
        <p onClick={handleDark}>purple mode</p>
      </nav>
    </header>
  )
}