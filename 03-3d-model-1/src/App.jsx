import { useState } from 'react'
import { MainCanvas } from './componentes/Main-canvas'
import './App.css'

function App() {
  const [modo, setModo] = useState(true)

  return (
    <div className={`main ${modo? 'main-dark': 'main-light'}`}>
      <button onClick={()=> setModo(prev => !prev)}>dark mode</button>
      <MainCanvas />
    </div>
  )
}

export default App
