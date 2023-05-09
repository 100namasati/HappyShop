import React, { useEffect, useState } from "react";
import Home from "./Component/Home/Home";
import "./App.css";
import ProjectNavbar from "./Component/Navbar/ProjectNavbar";
import { Route, Routes } from "react-router-dom";
import Register from "./Component/Register/Register";
import Login from "./Component/Login/Login";
import { withRouter } from "./HOC";
import AccountLogin from "./Component/MyAccount/AccountLogin";
import { Protected, AuthProtected } from "./Component/Protected/Protected";
import Products from "./Component/Products/Products";
function App(props: any) {
  return (
    <div className="App">
      <ProjectNavbar router={undefined} />
      <Routes>
        <Route path="/" element={<Protected Component={Home} />} />
        <Route path="/Products" element={<Protected Component={Products} />} />
        <Route path="/login" element={<AuthProtected Component={Login} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default withRouter(App);
