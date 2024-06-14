const div_sub = document.querySelector('.div_sub')
const header = document.querySelector('header')
header.addEventListener('mouseleave', function (e) {
  e.preventDefault()
  div_sub.innerHTML = ''
  div_sub.className = 'div_sub'
})

const needle_engine = document.querySelector('.needle_engine')
needle_engine.addEventListener('mouseover', function (event) {
  event.preventDefault()
//  console.log(this.parentElement.parentElement);
  div_sub.innerHTML = `
  <p><a href="http://marcorossel.com" target="_blank">marco rossel portfollio</a></p>
  <p><a href="http://youtube.com" target="_blank">youtube</a></p>
  <p>sub item a</p>
  <p>sub item a</p>
  <p>sub item a</p>`
  div_sub.classList.add('padd')
})

const get_started = document.querySelector('.get_started')
get_started.addEventListener('mouseover', (event) =>{
  event.preventDefault()
  div_sub.innerHTML = `
  <p><a href="http://marcorossel.com" target="_blank">marco rossel portfollio b</a></p>
  <p><a href="http://youtube.com" target="_blank">youtube b</a></p>
  <p>sub item b</p>
  <p>sub item b</p>`
  div_sub.classList.add('padd')
})

const pricing = document.querySelector('.pricing')
pricing.addEventListener('mouseover', (e) => {
  e.preventDefault()
  div_sub.innerHTML = `
  <p><a href="http://marcorossel.com" target="_blank">marco rossel portfollio c</a></p>
  <p><a href="http://youtube.com" target="_blank">youtube c</a></p>
  <p>sub item c</p>
  <p>sub item c</p>
  `
  div_sub.classList.add('padd')
})

const company = document.querySelector('.company')
company.addEventListener('mouseover', (e) => {
  e.preventDefault()
  div_sub.innerHTML = `
  <div class="item_1">
          <h4>About Neddle</h4>
          <p>Needle is a technology company providing tools and integrations. We're interested in fast and flexible workflows, reducing friction, and providing tailor-made solutions to problems.</p>
          <p><a href="">Imprint</a></p>  
          <p><a href="">Privacy Policy</a></p>  
        </div>
        <div class="item_2">
          <h4><a>Say hi!</a></h4>
          <p><a>Newletter signup</a></p>
          <p><a>Twitter</a></p>
          <p><a>Discord community</a></p>
          <p><a>GitHub</a></p>
          <p><a>Send us an e-mail</a></p>
        </div>
        <div class="item_3">
          <h4>Other Products</h4>
          <p>Packages to improve the Unity Editor experience</p>
        </div>
  `
  div_sub.classList.add('padd')
  div_sub.classList.add('company')
})

const needle = document.querySelector('.needle')
const showcase = document.querySelector('.showcase')

needle.addEventListener('mouseover', (e) => {
  e.preventDefault()
  div_sub.innerHTML = ``
  div_sub.classList.remove('padd')
  div_sub.classList.remove('company')
})
showcase.addEventListener('mouseover', (e) => {
  e.preventDefault()
  div_sub.innerHTML = ``
  div_sub.classList.remove('padd')
  div_sub.classList.remove('company')
})