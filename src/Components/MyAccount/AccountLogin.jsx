import React, { Component } from "react";
import Login from "../Login/Login";
import "./accountLogin.css";

export default class AccountLogin extends Component {
  render() {
    return (
      <div>
        <div className="myAccount-Navbar">
          <div className="myAccount-logo">
            <h5>My Account</h5>
          </div>
        </div>
      </div>
    );
  }
}
