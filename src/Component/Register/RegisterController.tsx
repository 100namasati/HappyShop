import  { Component } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../../firebase_setup/firebase";
interface States {
  name: string;
  email: string;
  phone: string;
  password: string;
}
type Props = {
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
    };
  }

  onFinish = (values: any) => {
    this.setState(
      {
        name: values.name,
        email: values.email,
        phone: values.phone,
        password: values.password,
      },
      () => {
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.phone);
        console.log(this.state.password);
        // let userDetails = {
        //   name: this.state.name,
        //   email: this.state.email,
        //   phone: this.state.phone,
        //   password: this.state.password,
        // };
        // let newUser: any = {
        //   name: this.state.name,
        //   email: this.state.email,
        //   phone: this.state.phone,
        //   password: this.state.password,
        // };

        createUserWithEmailAndPassword(
          Auth,
          this.state.email,
          this.state.password
        )
          .then((res) => {
            // console.log("@@@@_______", res.user.uid);
            localStorage.setItem("token", JSON.stringify(res.user.uid));
          })
          .catch((err) => console.log(err.message));
      }
    );
  };
  onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
}

export default RegisterController;
