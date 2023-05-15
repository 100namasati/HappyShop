import React, { Component } from "react";
import { Link } from "react-router-dom";
import product from "../../Images/product.png";
import { AiOutlineMail } from "react-icons/ai";
import { TbPhoneCall } from "react-icons/tb";
import { GoLocation } from "react-icons/go";
import {FaUserAlt,FaBook} from 'react-icons/fa'
// import {SlNote} from 'react-icons/sl'
import { Row, Col, Input, Form, Button } from "antd";
import "./ContactUs.css";
import Footer from "../Footer/Footer";
const { TextArea } = Input;

export default class ContactUs extends Component {
  renderContactNavbar = () => {
    return (
      <div className="product-Navbar">
        <div className="product-left">
          <h2>Contact Us</h2>
          <div className="product-text">
            <span>
              {" "}
              <Link to="/">Home</Link>
            </span>
            <span>
              {" "}
              <Link to="/ContactUs" id="active">
                Contact
              </Link>
            </span>
          </div>
        </div>
        <div className="product-img">
          <img src={product} />
        </div>
      </div>
    );
  };
  renderContactDetails = () => {
    return (
      <Row className="contactDetails" gutter={[16,16]}>
        <Col lg={8} md={24} sm={24} xs={24}  className="contactDetailItem">
          <div style={{width:"90%",margin:"auto",border:"1px solid gainsboro"}}>
          <span>{<AiOutlineMail />}</span>
          <h3>Email Address</h3>
          <p>sonam@softopstechnologies.com</p>
          <p>chandrabhan@softopstechnologies.com</p>
          </div>
         
        </Col>
        <Col lg={8} md={24} sm={24}  xs={24} className="contactDetailItem">
          <div style={{width:"90%",margin:"auto",border:"1px solid gainsboro"}}>
            <span>{<TbPhoneCall />}</span>
          <h3>Phone Number</h3>
          <p>+91 9616000016</p>
          <p>+91 9616000016</p>
          </div>
        </Col>
        <Col lg={8} md={24} sm={24}  xs={24} className="contactDetailItem">
          <div style={{width:"90%",margin:"auto",border:"1px solid gainsboro"}}>
          <span>{<GoLocation />}</span>
          <h3>Office Address</h3>
          <p>
            Satguru Parinay,5th floor (506,507) PVVR+MPC, AB Rd, Scheme 54 PU4,
            Indore, 452011
          </p>
          </div>
         
        </Col>
      </Row>
    );
  };
  renderMap = () => {
    return (
      <div className="mapSection">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.572502283743!2d75.89144817493354!3d22.7441256266625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd541cc92fb7%3A0x84fe7fdd973a8f3e!2sC21%20Mall!5e0!3m2!1sen!2sin!4v1683881641851!5m2!1sen!2sin"
          width="100%"
          height="500"
        ></iframe>
      </div>
    );
  };
  renderMessage = () => {
    return (
      <div className="messageContainer">
        <h3>Send Message</h3>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 32,
          }}
          style={{
            maxWidth: 1000,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Row gutter={[32,16]}>
            <Col lg={12} sm={24} md={24} xl={12} >
              <Form.Item
                name="username"
              
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input className="send-message-input"  placeholder="Enter Your Name" suffix={<FaUserAlt style={{fontSize:"20px", color:"coral"}}/>}/>
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} md={24} xl={12}>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input className="send-message-input"  placeholder="Enter Your Email" suffix={<AiOutlineMail style={{fontSize:"20px", color:"coral"}}/>}/>
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} md={24} xl={12}>
              <Form.Item
                name="phoneno"
                rules={[
                  {
                    required: true,
                    message: "Please input your Phone Number",
                  },
                ]}
              >
                <Input className="send-message-input" placeholder="Enter Your Phone" suffix={<TbPhoneCall style={{fontSize:"20px", color:"coral"}}/>}/>
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} md={24} xl={12}>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Phone!",
                  },
                ]}
              >
                <Input  className="send-message-input" placeholder="Enter Your Subject" suffix={<FaBook style={{fontSize:"20px", color:"coral"}}/>}/>
              </Form.Item>
            </Col>
            <Col lg={24} sm={24} md={24} xl={12}>
              <Form.Item
                name="message"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <TextArea
                  maxLength={100}
                  className="send-message-textarea"
                />
              </Form.Item>
            </Col>
            
          </Row>
          <div className="submit-button">
          <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button htmlType="submit" className="send-Message-button">
        Submit
      </Button>
    </Form.Item>

          </div>
         
        </Form>
      </div>
    );
  };
  render() {
    return (
      <div>
        {this.renderContactNavbar()}
        {this.renderContactDetails()}
        {this.renderMap()}
        {this.renderMessage()}
        <Footer/>
      </div>
    );
  }
}
