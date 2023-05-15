import React, { useEffect, useState } from "react";
import Home from "./Components/Home/Home";
import "./App.css";
import ProjectNavbar from "./Components/Navbar/ProjectNavbar";
import { Route, Routes } from "react-router-dom";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import { withRouter } from "./HOC";
import { Protected, AuthProtected } from "./Components/Protected/Protected";
import Products from "./Components/Products/Products";
import AccountLogin from "./Component/MyAccount/AccountLogin";
import ContactUs from "./Components/Contact/ContactUs";
function App(props: any) {
  return (
    <div className="App">
      <ProjectNavbar router={undefined} />
      <Routes>
        <Route path="/" element={<Protected Component={Home} />} />
        <Route path="/myaccount" element={<AccountLogin />} />
        <Route path="/Products" element={<Protected Component={Products} />} />
        <Route path="/ContactUs" element={<Protected Component={ContactUs} />} />
        <Route path="/myaccount" element={<AuthProtected Component={AccountLogin} />} />
        <Route path="/login" element={<AuthProtected Component={Login} />} /> 
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default withRouter(App);
