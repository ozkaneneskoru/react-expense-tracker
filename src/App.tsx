import React from "react";
import {  Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  return <React.Fragment>
    <Routes>
      <Route path="/register" element={<SignUp />} />
      </Routes>

  </React.Fragment>
}

export default App;
