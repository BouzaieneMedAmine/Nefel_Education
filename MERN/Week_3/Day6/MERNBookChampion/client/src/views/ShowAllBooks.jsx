import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Nav.jsx";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const ShowAllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/book")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleLike = (id) => {
    axios
      .put(`http://localhost:5000/api/book/${id}/like`)
      .then((res) => {
        setBooks((prevBooks) =>
          prevBooks.map((book) =>
            book._id === id ? { ...book, likes: res.data.likes } : book
          )
        );
      })
      .catch((err) => console.error("Error updating likes:", err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/book/${id}`)
      .then(() => setBooks(books.filter(book => book._id !== id)))
      .catch((err) => console.error("Error deleting book:", err));
  };

  return (
    <div className="container mt-4">
      <Navbar title="Book Catalog" />
      <h2 className="text-center mb-4">All Books</h2>
      <div className="row">
        {books.map((book) => (
          <div key={book._id} className="col-md-4 mb-3">
            <div className="card shadow-lg p-3">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text"><strong>Author:</strong> {book.author}</p>
                <p className="card-text"><strong>Pages:</strong> {book.pages}</p>
                <p className="card-text"><strong>Likes:</strong> {book.likes}</p>
                <p className={book.isValidObjectId ? "text-success" : "text-danger"}>
                  {book.isValidObjectId ? "✅ Available" : "❌ Not Available"}
                </p>
                <div className="d-flex justify-content-between">
                  <button onClick={() => handleLike(book._id)} className="btn btn-outline-primary">👍 Like</button>
                  <Link to={`/onebook/${book._id}`} className="btn btn-info">View</Link>
                  <Link to={`/update/${book._id}`} className="btn btn-warning">Edit</Link>
                  <button onClick={() => handleDelete(book._id)} className="btn btn-danger">🗑 Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAllBooks;
