import React from 'react'
import { useParams } from 'react-router-dom'
const Color = () => { 
const {hello}=useParams()
const {color1}=useParams()
const {color2}=useParams()

  return (
<center>
 
 
<div  style={{ color: color1, backgroundColor: color2, width: "444px", padding: "20px", borderRadius: "10px" }}    >
      
    <h1 >The Word is: {hello}</h1>

    </div>
 


</center>
  )
}

export default Color
