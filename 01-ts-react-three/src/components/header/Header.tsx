import { useContext } from 'react'
import './header.css'
import { context } from '../../contexto/Context'

export function Header() {

  const {handleDark} = useContext(context)
  
  return (
    <header>
      <nav>
        <p>Logo</p>
        <ul>
          <li>3D</li>
          <li>another</li>
          <li>cv</li>
        </ul>
        <ul className='ul-estilo'>
          <li onClick={() => handleDark('purple')}>purple mode</li>
          <li onClick={() => handleDark('dark')}>dark mode</li>
          <li onClick={() => handleDark('ligth')}>ligth mode</li>
        </ul>
      </nav>
    </header>
  )
}