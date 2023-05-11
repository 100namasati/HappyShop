import { Component } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Auth } from "../../firebase_setup/firebase";
import { providerTwitter } from "../../firebase_setup/firebase";
import { provider } from "../../firebase_setup/firebase";
import { providerFaceBook } from "../../firebase_setup/firebase";
import React from "react";
interface States {
  name: string;
  email: string;
  phone: string;
  password: string;
  showotpbtn: boolean;
  otpArray: Array<string>;
  otp: string;
  otpVerified: boolean;
  register: boolean;
  loading: boolean;
}
type Props = {
  router: any;
};
export class RegisterController extends Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {
      //form state
      name: "",
      email: "",
      phone: "",
      password: "",
      showotpbtn: false,
      otpArray: [],
      otp: "",
      otpVerified: false,
      register: false,
      loading: false,
    };
  }

  handleGoogleRegister = () => {
    signInWithPopup(Auth, provider)
      .then(async (result) => {
        let user = localStorage.getItem("token");
        if (user) {
          localStorage.clear();
          localStorage.setItem("token", JSON.stringify(result.user.uid));
          this.forceUpdate();

          await this.props.router.navigate("/");
        } else {
          localStorage.setItem("token", JSON.stringify(result.user.uid));
          await this.props.router.navigate("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(errorMessage);
        this.props.router.navigate("/login");
      });
  };
  handleFacebookRegister = () => {
    signInWithPopup(Auth, providerFaceBook)
      .then(async (result) => {
        let user = localStorage.getItem("token");
        if (user) {
          localStorage.clear();
          localStorage.setItem("token", JSON.stringify(result.user.uid));
          this.forceUpdate();

          await this.props.router.navigate("/");
        } else {
          localStorage.setItem("token", JSON.stringify(result.user.uid));
          await this.props.router.navigate("/");
        }
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        console.log(error);
      });
  };
  handleTwitterRegister = () => {
    signInWithPopup(Auth, providerTwitter)
      .then(async (result: any) => {
        let user = localStorage.getItem("token");
        if (user) {
          localStorage.clear();
          localStorage.setItem("token", JSON.stringify(result.user.uid));
          this.forceUpdate();

          await this.props.router.navigate("/");
        } else {
          localStorage.setItem("token", JSON.stringify(result.user.uid));
          await this.props.router.navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  onFinish = (values: any) => {
    this.setState({ loading: true });
    this.setState(
      {
        name: values.name,
        email: values.email,
        phone: values.phone,
        password: values.password,
      },
      () => {
        this.setState({ register: true });
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.phone);
        console.log(this.state.password);
        createUserWithEmailAndPassword(
          Auth,
          this.state.email,
          this.state.password
        )
          .then((res) => {
            this.setState({ loading: true });
            this.setState({ loading: true });
            localStorage.setItem("token", JSON.stringify(res.user.uid));
            this.props.router.navigate("/");
            this.setState({ loading: false });
          })
          .catch(async (err) => {
            console.log(err.message);
            alert(err.message);
            await this.props.router.navigate("/register");
          });
      }
    );
  };
  onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  sendOtp = () => {
    var digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    console.log(OTP);
    this.state.otpArray.push(OTP);
    alert(this.state.otpArray[0]);
    this.setState({ showotpbtn: true });
  };
  verifyOtp = () => {
    let verifyStatus = this.state.otpArray.includes(this.state.otp);
    if (verifyStatus) {
      this.setState({ otpVerified: true }, () => {
        alert("Your mobile number is verfied");
      });
    } else {
      this.setState({ otpVerified: false });
      alert("Invalid Otp");
    }
  };
}

export default RegisterController;
