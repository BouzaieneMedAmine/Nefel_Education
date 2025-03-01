import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Nav.jsx";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";

function ShowOneBook() {
  const nav = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/book/${id}`)
      .then(res => {
        setBook(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/api/book/${id}`)
      .then(() => {
        nav("/book");
      })
      .catch(err => console.error(err));
  };

  if (!book) return <h3 className="text-center mt-5 text-danger">Book not found!</h3>;

  return (
    <div className="container mt-4">
      <Navbar title={book.title} />
      <div className="d-flex justify-content-center">
        <Card style={{ width: "24rem" }} className="shadow-lg p-4">
          <Card.Body>
            <Card.Title className="fw-bold">{book.title}</Card.Title>
            <Card.Text><strong>Author:</strong> {book.author}</Card.Text>
            <Card.Text><strong>Pages:</strong> {book.pages}</Card.Text>
            <Card.Text className={book.isValidObjectId ? "text-success" : "text-danger"}>
              {book.isValidObjectId ? "✅ Available for borrowing" : "❌ Not Available"}
            </Card.Text>
            <button onClick={handleDelete} className="btn btn-danger w-100 mt-3">Borrow</button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ShowOneBook;