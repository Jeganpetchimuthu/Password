import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/api/auth", {
        email,
        password,
      });
      const token = res.data.token;
      localStorage.setItem("token", token);

      console.log("User Create  Successflly!!!!");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container">
      <h2 className="h2">Login User</h2>
      <form onClick={handleLogin}>
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
        <Link to="/home">
          <button className="submit1" type="submit">
            login
          </button>
        </Link>
      </form>
      <Link to="/resetpassword">
        <button className="submit">Reset password</button>
      </Link>
    </div>
  );
}

export default Login;
