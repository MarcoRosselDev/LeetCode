import './header.css'
/* import { Tema } from '../../contexto/Tema'
import { useContext } from 'react' */

export function Header() {

/*   const tema = useContext(Tema)
  console.log(tema); */
  

  return (
    <header>
      <nav>
        <p>Logo</p>
        <ul>
          <li>3D</li>
          <li>another</li>
          <li>cv</li>
        </ul>
        <p>purple mode</p>
      </nav>
    </header>
  )
}