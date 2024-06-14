import './style.css'
import viteLogo from '/vite.svg'
import javascriptLogo from './javascript.svg'
//import {cargar_nav} from './cargar_nav.js'

document.getElementById('app').innerHTML = `
  <header>
    <nav class="nav_header">
      <ul class="ul_header">
        <li class="needle">Needle</li>
        <li class="needle_engine">Needle Engine</li>
        <li class="get_started">Get Started</li>
        <li class="showcase">Showcase</li>
        <li class="pricing">Pricing</li>
        <li class="company">Company</li>
      </ul>
      <div class='div_sub padd company'>
        <div class="item_1">
          <h4>About Neddle</h4>
          <p>Needle is a technology company providing tools and integrations. We're interested in fast and flexible workflows, reducing friction, and providing tailor-made solutions to problems.</p>
          <p><a href="">Imprint</a></p>  
          <p><a href="">Privacy Policy</a></p>  
        </div>
        <div class="item_2">
          <h4><a>Say hi!</a></h4>
          <p><a>Newletter signup</a></p>
        </div>
        <div class="item_3">
          <h4>Other Products</h4>
          <p>Packages to improve the Unity Editor experience</p>
        </div>
      </div>
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
      <canvas id="c"></canvas>
    </div>
  </main>
  <footer>
    <p>Hola soy el footer</p>
  </footer>
`
//cargar_nav()