import './App.css'
import { HandleContext } from './contexto/handleContext.js'
import { Main } from './components/main/main.js'

function App() {
  
  return (
    <>
      <HandleContext >
        <Main />
      </HandleContext >
    </>
  )
}

export default App
