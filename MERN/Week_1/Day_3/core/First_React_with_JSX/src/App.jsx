import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Hello Dojo</h1>
     <h2>To-Do-List</h2>
     <ul>
      <li>Sport</li>
      <li>Makla</li>
      <li>Marche</li>
      <li>Meeting</li>
     </ul>
    </>
  )
}

export default App
