import { Form, Input, Button, Row, Col, Spin } from "antd";
import "./Login.css";
import LoginController from "./LoginController";
import { FcGoogle } from "react-icons/fc";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { withRouter } from "../../HOC";
import { Link } from "react-router-dom";

export class Login extends LoginController {
  render() {
    return (
      <div>
        <div className="login-form">
          {this.state.loading ? (
            <Spin tip="Loading" size="large">
              <div className="content" />
            </Spin>
          ) : (
            ""
          )}
        </div>
        <div>
          <div>
            <h1
              style={{
                textAlign: "center",
                margin: "20px 0px",
                color: "orangered",
              }}
            >
              Login
            </h1>
            <p style={{ textAlign: "center" }}>
              Please Login using account detail below.
            </p>

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
                    <Col
                      lg={24}
                      md={24}
                      sm={24}
                      xs={24}
                      className="loginButton"
                    >
                      <Form.Item>
                        <Button htmlType="submit">Login</Button>
                      </Form.Item>
                    </Col>
                    <Col lg={24} md={24} sm={24} className="social-section">
                      <hr className="login-horizontal"/>
                      <h6>Or sign Up with</h6>
                    </Col>
                    <Col lg={24} md={24} sm={24} className="socialLogin">
                      <Form.Item className="socialLogin-item">
                        <Button onClick={this.handleLogin}>
                          <span className="loginIcons">
                            <FcGoogle />
                          </span>
                        </Button>
                      </Form.Item>
                      <Form.Item className="socialLogin-item">
                        <Button onClick={this.handleTwitterLogin}>
                          <span className="twitterIcons">
                            <AiFillTwitterCircle />
                          </span>
                        </Button>
                      </Form.Item>
                      <Form.Item className="socialLogin-item">
                        <Button onClick={this.handleFacebookLogin}>
                          <span className="loginIcons">
                            <FaFacebookSquare />
                          </span>
                        </Button>
                      </Form.Item>
                    </Col>
                    <Col lg={24} md={24} sm={24} className="register-section">
                      <Link to="/register">Sign Up</Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
