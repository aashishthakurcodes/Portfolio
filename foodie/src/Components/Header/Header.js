import React from "react";
import "./Header.css";
import { Link,useNavigate } from "react-router-dom";
const Header = () => {
  const navigate=useNavigate();
  const handlelogout=()=>{
   localStorage.removeItem("authToken");
   navigate("/login")
  }
    return (
    <div>
      <navbar className="Header_container">
        <div className="header_ul">
          
            <Link className="nav-link" to={"/"}>
            Home</Link>
            {localStorage.getItem("authToken") ? <li>Myorder</li> : ""}
            <Link  className="nav-link">About</Link>
            <Link  className="nav-link">Contact Us.</Link>
         
        </div>
        <div>
        
          <h2>aashish</h2>
        </div>

        {!localStorage.getItem("authToken") ? (
          <div className="header-btn">
            
            <Link className="login" to={"/login"}> Login </Link>
            <Link className="signup" to={"/createuser"}>SignUp</Link>
          </div>
        ) : 
          <div>
            <div onClick={handlelogout}>Logout</div>
            <div>Cart</div>
          </div>
        }
      </navbar>
    </div>
  );
};
export default Header;
