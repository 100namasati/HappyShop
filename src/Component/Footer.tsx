import React, { Component } from "react";
import logo from "../Images/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="marque_parent">
         
        <div className="marquee">
          <div>
            <p>Gift</p>
            <p>New Arrival</p>
            <p>Accessories</p>
            <p>Hand Craft</p>
            <p>Home Decor</p>
            <p>Interior Design</p>
            <p>Secure Checkout</p>
            <p>HandCraft</p>
            <p>Money Back Gaurantee</p>
          </div>
        </div>
        </div>
        <div className="footer-Container">
          <div className="footerTop">
            <img src={logo} alt="#" />
            <h3>Happy Shop</h3>
            <p>
              <span className="heading">Address:</span>3B, Sectior 1, Address,
              City, Country.
            </p>
            <p>
              <span className="heading">Phone:</span>+0123-456789
            </p>
            <p>
              <span className="heading">Email:</span>example@example.com
            </p>
            <div className="socialIcon">
              <span>
                <FaFacebookF />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaYoutube />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <FaLinkedin />
              </span>
            </div>
          </div>
          <hr className="horizontal" />
          <div className="footerBottom">
            <div className="leftBottomText">
              <p>Copyright ©New99 All Right Reserved.</p>
            </div>
            <div className="rightBottomText">
              <p>Privacy Policy</p>
              <p>Refund Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
