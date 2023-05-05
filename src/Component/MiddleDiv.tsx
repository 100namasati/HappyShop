import React, { Component } from "react";
import { Row, Col } from "antd";
import Kattle from "../Images/katt.png";
import Bowl from "../Images/Bowl.png";
import { MdLocalShipping } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import "./MiddleDiv.css";

export default class MiddleDiv extends Component {
  render() {
    return (
      <div className="middleContainer">
        <Row gutter={[16, 32]} className="firstRow">
          <Col lg={8} md={24} sm={24}>
            <div className="middleItem">
              <span className="middleIcon">
                <MdLocalShipping />
              </span>
              <span className="middleText">
                <h4>Free Shipping</h4>
                <p>Free Shipping on orders over $99.</p>
              </span>
            </div>
          </Col>
          <Col lg={8} md={24} sm={24}>
            <div className="middleItem">
              <span className="middleIcon">
                <GiTakeMyMoney />
              </span>
              <span className="middleText">
                <h4>Money Back</h4>
                <p>15 days Money back guarantee.</p>
              </span>
            </div>
          </Col>
          <Col lg={8} md={24} sm={24}>
            <div className="middleItem">
              <span className="middleIcon">
                <RiSecurePaymentLine />
              </span>
              <span className="middleText">
                <h4>Secure Checkout</h4>
                <p>We ensure 100% payment secure.</p>
              </span>
            </div>
          </Col>
        </Row>
        <div className="secondRow">
          <Row gutter={[16, 32]}>
            <Col lg={12} md={24} sm={24}>
              <div className="leftDiv">
                <div className="hoverEffect">
                  <div className="leftMiddleItem">
                    <h3>Bowl & Spoon</h3>
                    <p>Wooden Product</p>
                    <a href="#">Explore All</a>
                  </div>
                  <div className="rightMiddleItem">
                    <img src={Bowl} alt="Bowl" />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={12} md={24} sm={24}>
              <div className="leftDiv">
                <div className="hoverEffect">
                  <div className="leftMiddleItem">
                    <h3>Colorful Kattel</h3>
                    <p>Ceramic Product</p>
                    <a href="#">Explore All</a>
                  </div>
                  <div className="rightMiddleItem">
                    <img src={Kattle} alt="Kattle" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
