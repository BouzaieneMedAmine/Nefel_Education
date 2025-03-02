import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Navbar({ title }) {
  const nav = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div>
          <button onClick={() => nav("/")} className="btn btn-primary mx-2">Catalog</button>
          <button onClick={() => nav("/create")} className="btn btn-success mx-2">Add Book</button>
        </div>
        <h1 className="navbar-brand fw-bold">{title}</h1>
      </div>
    </nav>
  );
}

export default Navbar;
