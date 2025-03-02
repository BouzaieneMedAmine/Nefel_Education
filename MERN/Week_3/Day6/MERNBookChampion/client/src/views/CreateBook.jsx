import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Nav.jsx";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function CreateBook() {
  const nav = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: "",
    pages: "",
    isValidObjectId: true,
    likes: 0,
  });

  const [errors, setErrors] = useState({});
  const [frontendErrors, setFrontendErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    if (!book.title || book.title.length < 2) {
      tempErrors.title = "Title must be at least 2 characters long.";
    }
    if (!book.author || book.author.length < 5) {
      tempErrors.author = "Author must be at least 5 characters long.";
    }
    if (!book.pages || book.pages <= 0) {
      tempErrors.pages = "Pages must be a positive number.";
    }
    setFrontendErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBook((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    axios
      .post("http://localhost:5000/api/book/", book)
      .then(() => nav("/"))
      .catch((err) => {
        setErrors(err.response?.data?.errors || {});
        console.error(err);
      });
  };

  return (
    <div className="container mt-4">
      <Navbar title="Add Book" />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">Add a New Book</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label fw-bold">Title</label>
                {frontendErrors.title && <div className="alert alert-danger p-2">{frontendErrors.title}</div>}
                {errors.title && <div className="alert alert-warning p-2">{errors.title.message}</div>}
                <input type="text" name="title" value={book.title} onChange={handleChange} className="form-control" placeholder="Enter book title" />
              </div>

              <div className="mb-3">
                <label htmlFor="author" className="form-label fw-bold">Author</label>
                {frontendErrors.author && <div className="alert alert-danger p-2">{frontendErrors.author}</div>}
                {errors.author && <div className="alert alert-warning p-2">{errors.author.message}</div>}
                <input type="text" name="author" value={book.author} onChange={handleChange} className="form-control" placeholder="Enter author's name" />
              </div>

              <div className="mb-3">
                <label htmlFor="pages" className="form-label fw-bold">Pages</label>
                {frontendErrors.pages && <div className="alert alert-danger p-2">{frontendErrors.pages}</div>}
                {errors.pages && <div className="alert alert-warning p-2">{errors.pages.message}</div>}
                <input type="number" name="pages" value={book.pages} onChange={handleChange} className="form-control" placeholder="Enter number of pages" />
              </div>

              <div className="mb-3 form-check">
                <input type="checkbox" name="isValidObjectId" checked={book.isValidObjectId} onChange={handleChange} className="form-check-input" id="availableCheckbox" />
                <label htmlFor="availableCheckbox" className="form-check-label fw-bold">Available?</label>
              </div>

              <button type="submit" className="btn btn-primary w-100" disabled={Object.keys(frontendErrors).length > 0}>Add Book</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBook;
