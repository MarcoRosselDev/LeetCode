import './App.css'
import { Header } from './components/header/Header'
import {Main} from './components/main/Main'
import {useContext, useState } from 'react'
import { Tema } from './contexto/Tema'

function App({children}:{children: React.ReactNode}) {

  const tema = useContext(Tema)
  console.log(tema);
  
  const [light, setLisght] = useState('dark')

  function handleTema():void {
    setLisght(prev => prev === 'dark'? 'light': 'dark')
  }

  return (
    <Tema.Provider value={light} 
    /* handle={handleTema} */
    >
      {children}
      <Header />
      <Main />
    </Tema.Provider>
  )
}

export default App
