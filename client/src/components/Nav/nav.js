import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <link className="navbar-brand" to="/">
          {" "}
          Google Books
        </link>
        <button className="navbar-toggler" type="button" data-toggle="collapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse" navbar-collapse id="navbarNav">
          <ul className="navbarNav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
