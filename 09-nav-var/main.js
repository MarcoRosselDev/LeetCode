import './style.css'
import viteLogo from '/vite.svg'
import javascriptLogo from './javascript.svg'
import {cargar_nav} from './cargar_nav.js'

console.log('marco rossel');
document.getElementById('app').innerHTML = `
  <header>
    <nav>
      <p>Hola amiguitos</p>
    </nav>
  </header>
  <main>
    <div>
      <a href="https://vitejs.dev" target="_blank"><img src="${viteLogo}" class="logo" alt="Vite logo" /></a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" /></a>
      <h1>Hello Vite!</h1>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
      <p class="read-the-docs">Click on the Vite logo to learn more</p>
    </div>
  </main>
  <footer>
    <p>Hola soy el footer</p>
  </footer>
`

document.querySelector('nav')

cargar_nav()