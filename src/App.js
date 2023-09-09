import React from "react";
import Home from "../src/component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./component/NavBar";
import SignUp from "./component/Sign";
import Login from "./component/Login";
import Resetpassword from "./component/Resetpassword";
import Resetnewpassword from "./component/Resetnewpassword";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/resetnewpassword" element={<Resetnewpassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
