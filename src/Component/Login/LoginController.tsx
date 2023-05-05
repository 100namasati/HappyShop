import React, { Component } from "react";
interface States {
    email: string,
    password: string,
}
type Props = {};
export class LoginController extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  onFinish = (values:any) => {
    console.log("Success:", values);
    this.setState({ email: values.email, password: values.password }, () => {
      console.log(this.state.email, "  ", this.state.password);
    });
  };
  onFinishFailed = (errorInfo:any) => {
    console.log("Failed:", errorInfo);
  };
}

export default LoginController;
