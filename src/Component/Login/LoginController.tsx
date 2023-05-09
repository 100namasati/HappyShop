import React, { Component } from "react";
import {
  Auth,
  provider,
  providerFaceBook,
  providerTwitter
} from "../../firebase_setup/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
interface States {
  email: string;
  password: string;
}
type Props = {
  router: any;
};
export class LoginController extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleLogin = () => {
    signInWithPopup(Auth, provider)
      .then(async (result) => {
        const user = result.user;
        // console.log(user);
        await this.props.router.navigate("/");
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
  handleFacebookLogin = () => {
    signInWithPopup(Auth, providerFaceBook)
      .then((result) => {
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log(error);
      });
  };
  handleTwitterLogin=()=>{
    signInWithPopup(Auth,  providerTwitter)
  .then((result) => {
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const user = result.user;
    
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = TwitterAuthProvider.credentialFromError(error);
    console.log(error);
    
    // ...
  });
  }
  onFinish = (values: any) => {
    // console.log("Success:", values);
    this.setState({ email: values.email, password: values.password }, () => {
     
      signInWithEmailAndPassword(Auth, this.state.email, this.state.password)
        .then(async (res) => {
          // console.log("@@@@_______", res.user.uid);
          let user = localStorage.getItem("token");
          if (user) {
            await localStorage.clear();
            await localStorage.setItem("token", JSON.stringify(res.user.uid));
            await this.forceUpdate();

            await this.props.router.navigate("/");
          } else {
            await localStorage.setItem("token", JSON.stringify(res.user.uid));
            await this.props.router.navigate("/");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.message);
        });
    });
  };
  onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
}
export default LoginController;
