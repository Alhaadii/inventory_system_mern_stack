import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navs">
      <div className="main">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/inventory">inventory</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
