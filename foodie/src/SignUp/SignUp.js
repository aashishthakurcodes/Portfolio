import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import img from "./depositphotos_515228796-stock-illustration-online-registration-sign-login-account.jpg";

const SignUp = () => {
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await fetch("http://localhost:5000/api/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credential.name,
          email: credential.email,
          password: credential.password,
          location: credential.geolocation,
        }),
      });
      console.log(response);

      const json = await response.json();
      console.log(json);
      if (json.success) {
        alert("Account Created Go to login page");
        setCredential({
          name: "",
          email: "",
          password: "",
          geolocation: "",
        });
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
    <div className="sign_main">
      <div className="container">
        <div className="form_img">
          <img src={img} alt="bgimg" />
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h1 className="sign_up">Sign Up</h1>
            <div className="data_field">
            <label>Name</label>
            <input
              type="text"
              id="username"
              name="name"
              value={credential.name}
              onChange={handleChange}
              required
            />
            </div>
            <div className="data_field">
            <label>Email Address</label>
            <input
              type="email"
              id="usermail"
              name="email"
              value={credential.email}
              onChange={handleChange}
              required
            />
            </div>
            <div className="data_field">
            <label>Password</label>
            <input
              type="password"
              id="userpass"
              name="password"
              value={credential.password}
              onChange={handleChange}
              required
            /></div>
            <div className="data_field">
            <label >Location</label>
            <input
              type="text"
              id="userlocation"
              name="geolocation"
              value={credential.geolocation}
              onChange={handleChange}
              required
              autoFocus
            />
            </div>
            <div className="btn">
              
            <button className="submit" type="submit">Sign Up</button>
            <Link className="login_link" to="/login">Already a user</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default SignUp;
