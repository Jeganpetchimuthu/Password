import React, { useState } from "react";
import "./Resetnewpassword";
import axios from "axios";
function Resetnewpassword() {
  const [token, setToken] = useState("");
  const handleSubmited = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3002/api/reset-password",
        {}
      );
      const token = res.body.token;
      console.log(res, token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main-container">
      <form onClick={handleSubmited}>
        <label className="heading">
          Enter your password :
          <input
            placeholder="Enter your OTP"
            type="text"
            className="input"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </label>
        <button className="submit">Submit</button>
      </form>
    </div>
  );
}

export default Resetnewpassword;
