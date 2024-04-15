import { useEffect, useState } from 'react'
type Lista = {
  id: number
  nombre: string
  edad: number
}

let mi_lista:Lista[] = [
  {
    id: 1,
    nombre: 'Marco',
    edad: 30
  },
  {
    id: 2,
    nombre: 'Linda',
    edad: 31
  },
  {
    id: 3,
    nombre: 'Fernanda',
    edad: 27
  },
]

export function States() {
  const [numero, setNumbero] = useState(0) // ===> no es necesario espesificar el tipo de dato, typescript lo detecta de forma automatica
  const [texto, setTexto] = useState('Hola mundo')
  const [lista, setLista] = useState<Lista[]>([]) // en este caso es nesecario por que al prinsipio estamos aplicando un array vacio
  useEffect(() =>{
    setLista(mi_lista)
  }, [])
  const elementos = lista.map(item =>{
    return (
      <h1 key={item.id}>{item.nombre}</h1>
    )
  })
  return (
    <div>
      <p>{texto}</p>
      <p>{numero}</p>
      {elementos}
    </div>
  )
}