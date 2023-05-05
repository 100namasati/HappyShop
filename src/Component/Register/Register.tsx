import React, { Component } from "react";
import { Form, Input, Button, DatePicker, Select, Row, Col } from "antd";
import moment from "moment";
import "./Register.css";
import RegisterController from "./RegisterController";
export class Register extends RegisterController {
  dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  onChangeDatePicker = (date: any, dateString: any) => {
    this.setState({ DOB: dateString });
  };

  render() {
    return (
      <div className="register-form">
        <h1
          style={{
            textAlign: "center",
            margin: "50px 0px",
            color: "orangered",
          }}
        >
          User Registration
        </h1>
        <Form
          name="basic"
          labelCol={{
            span: 5,
          }}
          wrapperCol={
            {
              // span: 12,
            }
          }
          className="register-form-container"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          autoComplete="off"
          labelAlign="left"
        >
          <Row>
            <Col lg={12} md={24} sm={24} xs={24}>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your full name",
                  },
                  {
                    pattern: new RegExp(/^[a-zA-Z. ]{3,30}$/),
                    message: "Invalid Name",
                  },
                ]}
                hasFeedback
              >
                <Input style={{ width: 500 }} placeholder="Enter your name" />
              </Form.Item>
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
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
            <Col lg={12} md={24} sm={24} xs={24}>
              <Form.Item
                label={<label>Date of birth</label>}
                name="date_of_birth"
                rules={[
                  {
                    required: true,
                    message: "Please enter your date of birth",
                  },
                ]}
                hasFeedback
              >
                <DatePicker
                  picker="date"
                  name="date_of_birth"
                  placeholder="Choose your dob"
                  style={{ width: 500 }}
                  format={this.dateFormatList}
                  onChange={this.onChangeDatePicker}
                  disabledDate={(current) => {
                    let startCheck: any = true;
                    let endCheck: any = true;
                    let startDate: any = "01-01-1950";
                    let currentDate: any = new Date();
                    let endDate: any = currentDate.getDate();
                    if (startDate) {
                      startCheck =
                        current && current < moment(startDate, "DD-MM-YYYY");
                    }
                    if (endDate) {
                      endCheck =
                        current && current > moment(endDate, "DD-MM-YYYY");
                    }
                    return (startDate && startCheck) || (endDate && endCheck);
                  }}
                  // disabledDate={this.disabledDate}
                  // minDate={new Date("01-01-2023")}
                  // maxDate={new Date("10-04-2020")}
                ></DatePicker>
              </Form.Item>
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
              <Form.Item
                label={<label>Gender</label>}
                name="gender"
                rules={[
                  {
                    required: true,
                    message: "Please enter your gender",
                  },
                ]}
                hasFeedback
              >
                <Select
                  style={{ width: 500 }}
                  placeholder="Gender"
                  options={[
                    { value: "Male", label: "Male", name: "gender" },
                    { value: "Female", label: "Female", name: "gender" },
                    {
                      value: "Transgender",
                      label: "Transgender",
                      name: "gender",
                    },
                    { value: "Other", label: "Other", name: "gender" },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
              <Form.Item
                label={<label>Phone</label>}
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number ",
                  },
                  {
                    pattern: new RegExp(/^[6789][0-9]{9}$/),
                    message: "Invalid phone number",
                  },
                ]}
                hasFeedback
              >
                <Input
                  style={{ width: 500 }}
                  type="number"
                  placeholder="Please enter your phone number"
                />
              </Form.Item>
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
              <Form.Item
                label={<label>Designation</label>}
                name="designation"
                rules={[
                  {
                    required: true,
                    message: "Please enter your designation ",
                  },
                ]}
                hasFeedback
              >
                <Select
                  style={{ width: 500 }}
                  placeholder="Designation"
                  onChange={(e) => {
                    this.setState({ designation: e });
                    // console.log(e);
                  }}
                  options={[
                    {
                      value: "Developer",
                      label: "Developer",
                      name: "designation",
                    },
                    { value: "QA", label: "QA", name: "designation" },
                    {
                      value: "Database engineer",
                      label: "Database engineer",
                      name: "designation",
                    },
                    {
                      value: "Team Leader",
                      label: "Team Leader",
                      name: "designation",
                    },
                    {
                      value: "Project Manager",
                      label: "Project Manager",
                      name: "designation",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
              <Form.Item
                label={<label>Address</label>}
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Please enter your house number ",
                  },
                ]}
                hasFeedback
              >
                <Input
                  style={{ width: 500 }}
                  placeholder="Enter your house number"
                />
              </Form.Item>
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
              <Form.Item
                label={"Landmark"}
                name="landmark"
                rules={[
                  {
                    required: true,
                    message: "Landmark ",
                  },
                ]}
                hasFeedback
              >
                <Input style={{ width: 500 }} placeholder="Landmark" />
              </Form.Item>
            </Col>

            <Col lg={12} md={24} sm={24} xs={24}>
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

            <Col lg={12} md={24} sm={24} xs={24}>
              <Form.Item
                label={<label>Confrim</label>}
                name="confirm_password"
                dependencies={["password"]}
                rules={[
                  {
                    required: true,
                    message: "Please enter confirm password ",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject("Password mistached");
                    },
                  }),
                ]}
                hasFeedback
              >
                <Input.Password
                  style={{ width: 500 }}
                  placeholder="Enter confirm password"
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
              <Form.Item>
                <Button
                  type="primary"
                  style={{ width: "200px" }}
                  htmlType="submit"
                >
                  Register
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Register;
