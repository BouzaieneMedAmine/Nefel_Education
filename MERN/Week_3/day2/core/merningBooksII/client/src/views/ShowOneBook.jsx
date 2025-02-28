import React,{useState, useEffect} from "react"
import axios  from 'axios'
import Navbar from "../components/Nav.jsx"
import { Link, useNavigate, useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css' 


function ShowOneBook ()  {
  const nav = useNavigate()
  const {id} =  useParams()
  const [book, setBook]= useState({
        title:"",
        author:"",
        pages:"",
        isValidObjectId: true
      })
      useEffect(()=>{
        axios.get("http://localhost:5000/api/book/"+id)
        .then(res=>setBook(res.data))
        .catch(err=> console.error(err))
        },[id])


  const handleDelete =(id)=>{
    axios.delete('http://localhost:5000/api/book/'+id)
      .then(res=> setBook(book.filter(c=>c._id != id)))
      .catch(err=> console.error(err))

  }
      



  return (
    
    <div>
          <div>
          <Navbar title={`${book.title}`}/>
          </div>
          <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.author}</Card.Text>
          <Card.Text>{book.pages}</Card.Text>
          <Card.Text>{book.isValidObjectId? "Available for borrowing":"Not Available for borrowing"}</Card.Text>
          <button onClick={()=>handleDelete(c._id)} className="btn btn-danger" >Borrow</button>
        </Card.Body>
      </Card>
    </div>

   
  )
}

export default ShowOneBook