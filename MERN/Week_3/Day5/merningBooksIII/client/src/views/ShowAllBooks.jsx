import React,{useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import  Navbar from '../components/Nav.jsx'



const DisplayAll =()=>{
     const [books, setBooks] =useState([]);

     const navigate = useNavigate();

    useEffect(()=>{
        axios
        .get("http://localhost:5000/api/book")
        .then((res)=>{
            setBooks(res.data)
            console.log("res from then ",res.data);
            
        })
        .catch((err)=>{
            console.log('err',err);
            
        });
    },[])
    return (
        <div className="container mt-4">
            <Navbar title="Catalog"/>
            <table className="table table-striped" >
                <thead>
                    <tr>
                        <th>title</th>
                        <th>author</th>
                        <th>pages</th>
                        <th>Avalabel</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {books.map((book) => (
                     <tr key={book._id}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.pages}</td>
                        <td>
                            {book.isValidObjectId ? "Valid" : "Invalid"}/
                             <Link to={`/update/${book._id}`}> Edit </Link>
                        </td>
                        <td><button onClick={()=>navigate(`/onebook/${book._id}`)} className='btn btn-info'> Book Details</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default DisplayAll



