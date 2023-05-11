import React, { useEffect, useState } from "react";
import Home from "./Components/Home/Home";
import "./App.css";
<<<<<<< HEAD
import ProjectNavbar from "./Components/Navbar/ProjectNavbar";
import { Route, Routes } from "react-router-dom";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import { withRouter } from "./HOC";
=======
import ProjectNavbar from "./Component/ProjectNavbar";
import { Route, Routes } from "react-router-dom";
>>>>>>> origin

import { Protected, AuthProtected } from "./Components/Protected/Protected";
import Products from "./Components/Products/Products";

import AccountLogin from "./Components/MyAccount/AccountLogin";
function App(props: any) {
  return (
    <div className="App">
<<<<<<< HEAD
      <ProjectNavbar router={undefined} />
      <Routes>
        <Route path="/" element={<Protected Component={Home} />} />
        <Route path="/myaccount" element={<AccountLogin />} />

        <Route path="/Products" element={<Protected Component={Products} />} />

        <Route path="/login" element={<AuthProtected Component={Login} />} />

        <Route path="/register" element={<Register />} />
=======
      <Routes>
        <Route path="/" element={<Home {...props} />}  />
>>>>>>> origin
      </Routes>
    </div>
  );
}

export default withRouter(App);
