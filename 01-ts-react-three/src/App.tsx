import './App.css'
import { Body } from './components/body'
import { TemaGlobal } from './contexto/TemaGlobal'

function App() {

  return (
    <TemaGlobal>
      <Body />
    </TemaGlobal>
  )
}

export default App
