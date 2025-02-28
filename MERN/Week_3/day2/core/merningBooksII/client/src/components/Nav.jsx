import React from 'react'
import { Router, Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'


function Navbar(props) {
  const nav= useNavigate()
  const {title} = props

  
  return (
    <div className='d-flex , justify-content-between mb-5'>
      <div className='justify-content-between' >
      <button onClick={()=>nav("/create")} className='btn btn-success'>Add Book</button>
      <button onClick={()=>nav("/book")} className='btn btn-primary'>Catalog</button> 
        
      </div>
      <div ><h1>{title}</h1></div>
    </div>
  )
}

export default Navbar