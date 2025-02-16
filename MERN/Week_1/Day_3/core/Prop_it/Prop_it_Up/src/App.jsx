import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './assets/components/PersonCard'



function App() {
  
  return (
    <>
     <PersonCard firstName ="Aymen" lastName ="Boujimaa" age= "45" hairColor = "No Hair"/> 
     <PersonCard firstName ="Mohamed" lastName ="Birrhouma" age= "28" hairColor = "Red"/> 
     <PersonCard firstName ="Samir" lastName ="Birrjab" age= "49" hairColor = "Blue"/> 
     <PersonCard firstName ="Soumaya" lastName ="Ayari" age= "82" hairColor = "Yellow"/> 
    </>
  )
}

export default App
