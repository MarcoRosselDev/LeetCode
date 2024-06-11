import './style.css'
import viteLogo from '/vite.svg'
import javascriptLogo from './javascript.svg'
import {cargar_nav} from './cargar_nav.js'

document.getElementById('app').innerHTML = `
  <header>
    <nav>
      <ul>
        <li class="item_a">item A</li>
        <li class="item_b">item B</li>
        <li class="item_c">item C</li>
        <li class="item_d">item D</li>
      </ul>
    </nav>
    <div class='div_sub'>
      <p>sub item a</p>
      <p>sub item a</p>
      <p>sub item a</p>
      <p>sub item a</p>
      <p>sub item a</p>
    </div>
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
      <canvas id="c"></canvas>
    </div>
  </main>
  <footer>
    <p>Hola soy el footer</p>
  </footer>
`

const item_a = document.querySelector('.item_a')
item_a.addEventListener('mouseover', function (e) {
  e.preventDefault()
  console.log(e)
  console.log('hover');
})

const div_sub = document.querySelector('.div_sub')
div_sub.addEventListener('mouseout', function (e) {
  e.preventDefault()
  console.log(e)
})
/* item_a.addEventListener('mouseout', function (e) {
  e.preventDefault()
  console.log('out');
}) */

cargar_nav()