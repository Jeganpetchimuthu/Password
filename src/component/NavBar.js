import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <ul>
        <li className="content">
          <button>Home</button>
        </li>
        <li className="content">
          <Link to="/">
            <button>SignUp</button>
          </Link>
        </li>
        <li className="content">
          <button>Login</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
