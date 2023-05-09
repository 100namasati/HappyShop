import React, { useEffect, useState } from "react";
import Home from "./Component/Home/Home";
import "./App.css";
import ProjectNavbar from "./Component/Navbar/ProjectNavbar";
import { Route, Routes } from "react-router-dom";
import Register from "./Component/Register/Register";
import Login from "./Component/Login/Login";
import { withRouter } from "./HOC";
<<<<<<< HEAD
import { Protected, AuthProtected } from "./Component/Protected/Protected";
import Products from "./Component/Products/Products";
=======
import AccountLogin from "./Component/MyAccount/AccountLogin";
>>>>>>> 3a97cc0 (Added Myaccount section)
function App(props: any) {
  return (
    <div className="App">
      <ProjectNavbar router={undefined} />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Protected Component={Home} />} />
        <Route path="/Products" element={<Protected Component={Products} />} />
        <Route path="/login" element={<AuthProtected Component={Login} />} />
        <Route path="/register" element={<Register />} />
=======
        <Route path="/" element={<Home {...props} />} />
        <Route path="/login" element={<Login {...props} />} />
        <Route path="/register" element={<Register {...props} />} />
        <Route path="/myaccount" element={<AccountLogin/>}/>
        <Route path="*" element={<h1>404 page not found</h1>} />
>>>>>>> 3a97cc0 (Added Myaccount section)
      </Routes>
    </div>
  );
}

export default withRouter(App);
