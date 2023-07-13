import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"
import img2 from "./istockphoto-1329516017-612x612.jpg";
import user from "./download.png"
const Login = () => {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credential.email,
          password: credential.password,
        }),
      });

      const json = await response.json();
      console.log(json);
      if (!json.success) {
        alert("Enter valid credentials");
        console.log("sucess");
      }
      if (json.success) {
        //LOcal Storage
        localStorage.setItem("authToken",json.authToken);
        console.log(localStorage.getItem("authToken"));
       navigate("/")
       console.log("failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleChange = (event) => {
    setCredential({ ...credential, [event.target.name]: event.target.value });
  };

  return (
    <div className="login_main">
      <div className="login_container">
        <div className="img_login">
          <img src={img2} alt="bgimg"/>
        </div>
        <div className="login_info">
      <form onSubmit={handleSubmit}>
        <div className="user_img">
          {/* <img className="user" src={user} alt="bgimg" /> */}
          <h1 className="sign_up">Login</h1>
        </div>
        <div className="user_data">
        <label>Email Address</label>
        <input
          type="email"
          id="usermail"
          name="email"
          className="input"
          value={credential.email}
          onChange={handleChange}
        />
        </div>
        <div className="user_data">
        <label>Password</label>
        <input
          className="input"
          type="password"
          id="userpass"
          name="password"
          value={credential.password}
          onChange={handleChange}
        />
        </div>
        <div className="btn_login">
        <button className="login_sub" type="submit">Log in</button>
        <Link className="login_link" to="/createuser">I am a new user</Link>
        </div>
      </form>
      </div>
      </div>
    </div>
  );
};

export default Login;
