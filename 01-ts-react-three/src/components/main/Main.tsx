import './main.css'

export function Main() {
  // si aplico la class .box se puede mover no nesecariamente tengo que invocar gsap en este componente!!
  return (
    <main>
      <p className='box'>Main section</p>
      <p>another section</p>
    </main>
  )
}