import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
const Header = () => {
  return(
    <div>
      <navbar  className="Header_container">
        <div>
          <ul className="header_ul">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us.</li>
          </ul>
        </div>
        <div>
          <h2>Logo</h2>
        </div>
        <div className="header-btn">
          <Link to={"/loginko9"}>
          <li>login</li>
          </Link>
          <li>
            <Link to={"/createuser"}>SignUp</Link>
          </li>
          <button>cart</button>
        </div>
      </navbar>
    </div>
  )
};
export default Header;
