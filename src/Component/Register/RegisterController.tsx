import React, { Component } from "react";

interface States {
  name: string;
  email: string;
  DOB: string;
  gender: string;
  phone: string;
  designation: string;
  address: string;
  landmark: string;
  state: string;
  city: string;
  password: string;
}
type Props = {};
export class RegisterController extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      //form state
      name: "",
      email: "",
      DOB: "",
      gender: "",
      phone: "",
      designation: "",
      address: "",
      landmark: "",
      state: "",
      city: "",
      password: "",
    };
  }

  onChangeDatePicker = (date: any, dateString: any) => {
    this.setState({ DOB: dateString });
  };
  onFinish = (values: any) => {
    console.log("Success:", values);
    this.setState(
      {
        name: values.name,
        email: values.email,
        gender: values.gender,
        phone: values.phone,
        designation: values.designation,
        address: values.address,
        landmark: values.landmark,
        state: values.state,
        city: values.city,
        password: values.password,
      },
      () => {
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.DOB);
        console.log(this.state.gender);
        console.log(this.state.phone);
        console.log(this.state.designation);
        console.log(this.state.address);
        console.log(this.state.landmark);
        console.log(this.state.state);
        console.log(this.state.city);
        console.log(this.state.password);
        let userDetails = {
          name: this.state.name,
          email: this.state.email,
          gender: this.state.gender,
          phone: this.state.phone,
          designation: this.state.designation,
          address: this.state.address,
          landmark: this.state.landmark,
          state: this.state.state,
          city: this.state.city,
          password: this.state.password,
        };
        localStorage.setItem("user", JSON.stringify(userDetails));
      }
    );
  };
  onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
}

export default RegisterController;
