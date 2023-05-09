import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Home from "./Component/Home";
import "./App.css";
import ProjectNavbar from "./Component/ProjectNavbar";
import { Route, Routes } from "react-router-dom";
import Register from "./Component/Register/Register";
import Login from "./Component/Login/Login";
import { withRouter } from "./HOC";
function App(props: any) {
  const [isUserAvailable, setIsUserAvailable] = useState(false);
  useEffect(() => {
    let user: any = localStorage.getItem("token");
    if (user) {
      setIsUserAvailable(true);
    } else {
      setIsUserAvailable(false);
    }
  }, []);

  // console.log(this.state.isTokenAvailable);

  return (
    <div className="App">
      <ProjectNavbar router={undefined} isUserAvailable={isUserAvailable} />
      <Routes>
        <Route path="/" element={<Home {...props} />} />
        <Route path="/login" element={<Login {...props} />} />
        <Route path="/register" element={<Register {...props} />} />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </div>
  );
}

export default withRouter(App);
