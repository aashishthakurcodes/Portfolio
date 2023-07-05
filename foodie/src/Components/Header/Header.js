import React from "react";
import "./Header.css";
import { Link,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate=useNavigate();
  const handlelogout=()=>{
   localStorage.removeItem("authToken");
   navigate("/login")
  }

  const cartItems=useSelector(reduxStore=>reduxStore.cart.items)
    console.log(cartItems);

    return (
    <div className="main">
      <div className="Header_container">
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
            <Link to={"/cart"}>
          <li>Cart{cartItems.length}</li>
          </Link>
          </div>
        }
      </div>
    </div>
  );
};
export default Header;
