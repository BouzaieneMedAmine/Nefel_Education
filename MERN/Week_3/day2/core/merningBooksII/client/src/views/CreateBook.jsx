import React,{useState} from 'react'
import axios from 'axios'
import Navbar from '../components/Nav.jsx'
import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css' 


function CreateBook  () {
    const nav = useNavigate()
    const [book, setBook]= useState({
      title:"",
      author:"",
      pages:"",
      isValidObjectId: true
    })
    const [errors, setErrors]= useState({})
    const handleChange=(e)=>{
      const{name, value,type,cheked}= e.target 
      setBook(prevData =>({
        ...prevData,
        [name]: type ==="checkbox"? cheked : value
      }))
    }
    const handelSubmit =(e)=>{
      e.preventDefault()
      axios.post("http://localhost:5000/api/book/", book)
        .then(res=>nav("/book"))
        .catch(err=> {setErrors(err.response.data.errors);console.error(err)})
    }
  return (
    <div >
      <Navbar title={"Add Book"} />
        <form onSubmit={handelSubmit}>
           <div className='mb-3'>
            <label htmlFor="title">Title</label>
            {errors.title&& <div className='alert alert-warning'>{errors.title.message}</div> }
            <input type='text' name='title' value={book.title} onChange={handleChange} className='form-control'/>
           </div>
           <div className='mb-3'>
            <label htmlFor="author">Author</label>
            {errors.title&& <div className='alert alert-warning'>{errors.author.message}</div> }
            <input type='text' name='author' value={book.author} onChange={handleChange} className='form-control'/>
           </div>
           <div className='mb-3'>
            <label htmlFor="pages">Pages</label>
            {errors.title&& <div className='alert alert-warning'>{errors.pages.message}</div> }
            <input type='Number' name='pages' value={book.pages} onChange={handleChange} className='form-control'/>
           </div>
           <div className='mb-3'>
            <input type='checkbox' name='isValidObjectId' cheked={book.isValidObjectId} onChange={handleChange} className='form-check-input'/>
              <label htmlFor="isValidObjectId">Available?</label>
            </div>
            <button> Add Book</button>
           
        </form>
    </div>
  )
}

export default CreateBook