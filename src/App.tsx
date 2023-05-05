import React from "react";
import logo from "./logo.svg";
import Home from "./Component/Home";
import "./App.css";
import ProjectNavbar from "./Component/ProjectNavbar";
import { Route, Routes } from "react-router-dom";

function App(props: any) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home {...props} />}  />
      </Routes>
    </div>
  );
}

export default App;
