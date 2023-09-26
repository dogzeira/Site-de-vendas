import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import "../geral.css";

function nav() {
  return (
    <header>
      <div className="ajuste-gif">
        <img
          className="logo"
          src="https://i.imgur.com/YNY59CT.gif"
          alt="Logo Marca"
        />
      </div>

      <nav className="navbar">
        <Link to="/"> Home</Link>
        <Link to="/aparelhos"> Aparelhos</Link>
      </nav>
    </header>
  );
}
export default nav;
