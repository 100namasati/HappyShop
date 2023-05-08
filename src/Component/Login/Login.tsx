import React, { Component } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
import "./Login.css";
import LoginController from "./LoginController";
export class Login extends LoginController {
  handleSubmit = (testdata) => {
    const ref = collection(firestore, "test_data"); // Firebase creates this automatically
    let data = {
      testData: testdata,
    };
    try {
      addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    // @ts-ignore
    console.log(firebase);

    return (
      <div className="login-form">
        <h1
          style={{
            textAlign: "center",
            margin: "50px 0px",
            color: "orangered",
          }}
        >
          User Login
        </h1>
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 2 }}
          style={{ maxWidth: 625, margin: "auto" }}
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          autoComplete="off"
          labelAlign="left"
        >
          <Row>
            <Col lg={24} md={24} sm={24} xs={24}>
              <Form.Item
                label={<label>Email</label>}
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email address",
                  },
                  {
                    pattern: new RegExp(
                      /^[a-zA-z_0-9]{3,}@[a-zA-Z]{3,}.{3}[a-zA-Z.]{3,3}$/
                    ),
                    message: "Invalid email",
                  },
                ]}
                hasFeedback
              >
                <Input
                  style={{ width: 500 }}
                  placeholder="Enter your email address"
                />
              </Form.Item>
            </Col>

            <Col lg={24} md={24} sm={24} xs={24}>
              <Form.Item
                label={<label>Password</label>}
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please enter password",
                  },
                  {
                    pattern: new RegExp(
                      /^(?=.*[0-9])(?=.*[!@£$%^&*])(?=.*[A-Z])[a-zA-z0-9!@£$%^&*]{12,16}$/
                    ),
                    message:
                      "Minimum 12 characters and one uppercase, lowercase, number and special character.",
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  style={{ width: 500 }}
                  placeholder="Enter password"
                  onPaste={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                  onCopy={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                />
              </Form.Item>
            </Col>

            <Col
              lg={24}
              md={24}
              sm={24}
              xs={24}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Row style={{ width: "100%" }}>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <h6>Create new account</h6>
                </Col>
                <Col
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignContent: "flex-end",
                  }}
                >
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: "200px", alignItems: "flex-end" }}
                    >
                      Login
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Login;
