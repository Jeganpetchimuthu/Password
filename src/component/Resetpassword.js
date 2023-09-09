import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Resetpassword() {
  const [email, setEmail] = useState(" ");
  const handleChange = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/api/reset-password", {
        email,
      });
      const token = res.data.token;
      console.log("Mail Send Successflly!!!!");
      console.log(res, token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main-container">
      <h2 className="h2">Reset password</h2>
      <form onClick={handleChange}>
        <label>
          email:
          <input
            className="input1"
            placeholder="Enter Your Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br></br>
        <br></br>
        <Link to="/resetnewpassword">
          <button className="submit" type="submit">
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Resetpassword;
