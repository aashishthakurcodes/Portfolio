import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email Address</label>
        <input
          type="email"
          id="usermail"
          name="email"
          value={credential.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          id="userpass"
          name="password"
          value={credential.password}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
        <Link to="/createuser">I am a new user</Link>
      </form>
    </div>
  );
};

export default Login;
