import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function Navbar({ title }) {
  const nav = useNavigate();

  return (
    <div className="d-flex justify-content-between align-items-center mb-5 p-3 bg-light shadow-sm">
      <div>
        <button onClick={() => nav("/create")} className="btn btn-success mx-2">Add Book</button>
        <button onClick={() => nav("/")} className="btn btn-primary mx-2">Catalog</button>
      </div>
      <div>
        <h1 className="text-center fw-bold">{title}</h1>
      </div>
    </div>
  );
}

export default Navbar;
