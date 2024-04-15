import  { useState } from 'react'
import './event.css'

export function Component() {

  const [text, setText] = useState('')
  const [email, setEmail] = useState('')

  function handleEmail(e:React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  return (
    <section className="section-form">
      <form action="">
        <input type="text" onChange={(e) => setText(e.target.value)}/>
        <input type="email" onChange={handleEmail}/>
        <button>Enviar</button>
        <p className='p-t'>{text}</p>
        <p className='p-t'>{email}</p>
      </form>
    </section>
  )
}