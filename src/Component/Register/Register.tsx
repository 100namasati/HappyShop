import { Form, Input, Button, Row, Col } from "antd";
import "./Register.css";
import RegisterController from "./RegisterController";
import { withRouter } from "../../HOC";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
class Register extends RegisterController {
  dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  // onChangeDatePicker = (date: any, dateString: any) => {
  //   this.setState({ DOB: dateString });
  // };

  render() {
    return (
      <div className="register-form">
        <h1
          style={{
           
          }}
          className="register-form-heading"
        >
          Register
        </h1>
        <p>Please register your with account detail below.</p>

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
            <Col lg={24} md={24} sm={24} xs={24}>
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

            <Col lg={24} md={24} sm={24} xs={24}>
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
              <Row style={{ width: "100%" }}>
                <Col lg={24} md={24} sm={24} xs={24} className="loginButton">
                  <Form.Item>
                    <Button htmlType="submit">Register</Button>
                  </Form.Item>
                </Col>
                <Col lg={24} md={24} sm={24} className="social-section">
                  <hr />
                  <h6>Or sign Up with</h6>
                </Col>
                <Col lg={24} md={24} sm={24} className="socialLogin">
                  <Form.Item className="socialLogin-item">
                    <Button onClick={this.handleGoogleRegister}>
                      <span className="loginIcons">
                        <FcGoogle />
                      </span>
                    </Button>
                  </Form.Item>
                  <Form.Item className="socialLogin-item">
                    <Button onClick={this.handleTwitterRegister}>
                      <span className="twitterIcons">
                        <AiFillTwitterCircle />
                      </span>
                    </Button>
                  </Form.Item>
                  <Form.Item className="socialLogin-item">
                    <Button onClick={this.handleFacebookRegister}>
                      <span className="loginIcons">
                        <FaFacebookSquare />
                      </span>
                    </Button>
                  </Form.Item>
                </Col>
                <Col lg={24} md={24} sm={24} className="register-section">
                  <Link to="/login">Sign In</Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default withRouter(Register);
