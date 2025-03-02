import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Nav.jsx";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const ShowOneBook = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/book/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleLike = () => {
    axios
      .put(`http://localhost:5000/api/book/${id}/like`)
      .then((res) => setBook({ ...book, likes: res.data.likes }))
      .catch((err) => console.error("Error updating likes:", err));
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/api/book/${id}`)
      .then(() => nav("/"))
      .catch((err) => console.error("Error deleting book:", err));
  };

  if (!book) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <Navbar title={book.title} />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">Book Details</h2>
            <p><strong>Title:</strong> {book.title}</p>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Pages:</strong> {book.pages}</p>
            <p><strong>Likes:</strong> {book.likes}</p>
            <p className={book.isValidObjectId ? "text-success" : "text-danger"}>
              {book.isValidObjectId ? "✅ Available" : "❌ Not Available"}
            </p>
            <div className="d-flex justify-content-between">
              <button onClick={handleLike} className="btn btn-outline-primary">👍 Like</button>
              <button onClick={handleDelete} className="btn btn-danger">🗑 Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowOneBook;
