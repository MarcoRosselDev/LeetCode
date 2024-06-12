const div_sub = document.querySelector('.div_sub')

const item_a = document.querySelector('.item_a')
item_a.addEventListener('click', function (event) {
  event.preventDefault()
//  console.log(this.parentElement.parentElement);
  div_sub.innerHTML = `
  <p>sub item a</p>
  <p>sub item a</p>
  <p>sub item a</p>
  <p>sub item a</p>
  <p>sub item a</p>`
})

const header = document.querySelector('header')

header.addEventListener('mouseleave', function (e) {
  e.preventDefault()
  div_sub.innerHTML = ''
})