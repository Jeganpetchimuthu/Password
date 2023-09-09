import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sign.css";
import axios from "axios";
function SignUp() {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/api/register", {
        firstName,
        lastName,
        email,
        password,
      });
      console.log("User Create  Successflly!!!!");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container">
      <h2 className="h2">Register</h2>
      <form className="form" onClick={handleSignUp}>
        <label>
          firstName:
          <input
            className="input"
            placeholder="Enter Your Firstname"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          lastName:
          <input
            className="input"
            placeholder="Enter Your Lastname"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          email:
          <input
            className="input1"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          password:
          <input
            className="input"
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br></br>
        <br></br>
        <Link to="/login">
          <button className="submit" type="submit">
            Signup
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
