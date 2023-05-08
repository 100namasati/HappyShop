import React from "react";
import logo from "./logo.svg";
import Home from "./Component/Home";
import "./App.css";
import ProjectNavbar from "./Component/ProjectNavbar";
import { Route, Routes } from "react-router-dom";
import Register from "./Component/Register/Register";
import Login from "./Component/Login/Login";

function App(props: any) {
  return (
    <div className="App">
      <ProjectNavbar/>
      <Routes>
        <Route path="/" element={<Home {...props} />}  />
        <Route path="/login" element={<Login {...props} />}  />
        <Route path="/register" element={<Register {...props} />}  />
      </Routes>
    </div>
  );
}

export default App;
