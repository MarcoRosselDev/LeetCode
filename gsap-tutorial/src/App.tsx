import { useState, useContext } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const ThemeContext =  useContext(null) //????

  return (
    <>
      <p>Hola mundo</p>
    </>
  )
}

export default App
