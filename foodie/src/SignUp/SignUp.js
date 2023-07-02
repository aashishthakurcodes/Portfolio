import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        headers:{
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
      if (!json.success) {
        alert("Enter valid credentials");
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
        <label>Name</label>
        <input
          type="text"
          id="username"
          name="name"
          value={credential.name}
          onChange={handleChange}
        />
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
        <label>Location</label>
        <input
          type="text"
          id="userlocation"
          name="geolocation"
          value={credential.geolocation}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        <Link to="/login">Already a user</Link>
      </form>
    </div>
  );
};

export default SignUp;
