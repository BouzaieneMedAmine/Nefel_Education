import React from 'react'
import { useParams } from 'react-router-dom'

const Number = () => {

     const {number}=useParams()
  return (
   

  
  <center>
   
   
      <div>
        
        {Number.isInteger(Number(number)) ? <h1>The Number is: {number}</h1> : <h1>The Word is: {number}</h1>}
  
      </div>
   
  
  
  </center>
  )
}

export default Number