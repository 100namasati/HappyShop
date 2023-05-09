import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Home from "./Component/Home";
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

        <Route path="/" element={<Home {...props} />} />
        <Route path="/login" element={<Login {...props} />} />
        <Route path="/register" element={<Register {...props} />} />
        <Route path="/myaccount" element={<AccountLogin />} />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </div>
  );
}

export default withRouter(App);
