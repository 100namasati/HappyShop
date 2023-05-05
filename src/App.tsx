import React from "react";
import logo from "./logo.svg";
import Home from "./Component/Home";
import "./App.css";
import ProjectNavbar from "./Component/ProjectNavbar";

function App(props: any) {
  return (
    <div className="App">
      <Home {...props} />
    </div>
  );
}

export default App;
