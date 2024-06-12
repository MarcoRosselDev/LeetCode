const div_sub = document.querySelector('.div_sub')

const item_a = document.querySelector('.item_a')
item_a.addEventListener('mouseover', function (event) {
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

const header = document.querySelector('header')

header.addEventListener('mouseleave', function (e) {
  e.preventDefault()
  div_sub.innerHTML = ''
  div_sub.className = 'div_sub'
})

const item_b = document.querySelector('.item_b')
item_b.addEventListener('mouseover', (event) =>{
  event.preventDefault()

  div_sub.innerHTML = `
  <p><a href="http://marcorossel.com" target="_blank">marco rossel portfollio b</a></p>
  <p><a href="http://youtube.com" target="_blank">youtube b</a></p>
  <p>sub item b</p>
  <p>sub item b</p>`
  div_sub.classList.add('padd')
})