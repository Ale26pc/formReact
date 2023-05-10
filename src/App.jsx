import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './components/Formulario'

function App() {
  const [count, setCount] = useState(0)
  const style="active"
  const contenido="Desarrollo web I"
  return (
    <>
   
      <div className={style}>{contenido}</div>
      <Formulario></Formulario>
    </>
    
  )
}

export default App
