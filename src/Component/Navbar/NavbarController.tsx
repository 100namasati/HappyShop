import React from "react";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";
import {
  Auth,
  provider,
  providerFaceBook,
} from "../../firebase_setup/firebase";

export interface states {
  drawer: boolean;
  drawerDirection: any;
  closeDrawer: boolean;
  //user menu state
  openMenu: boolean;
  isTokenAvailable: boolean;
}

export type Props = {
  router: any;
};
export default class first extends React.Component<Props, states> {
  constructor(props: Props) {
    super(props);
    this.state = {
      drawer: false,
      drawerDirection: "left",
      closeDrawer: false,
      //user menu state
      openMenu: false,
      //token
      isTokenAvailable: false,
    };
  }
  componentDidMount(): void {
    let user: any = localStorage.getItem("token");
    if (user === null) {
      return this.setState({ isTokenAvailable: false });
    } else if (user !== "") {
      return this.setState({ isTokenAvailable: true });
    }
    // if (user !== "") {
    //   this.setState({ isTokenAvailable: true }, () => {
    //     console.log("@@@@@----", this.state.isTokenAvailable);
    //   });
    // } else {
    //   this.setState({ isTokenAvailable: false }, () => {
    //     console.log("######-----", this.state.isTokenAvailable);
    //   });
    // }
    // console.log(this.state.isTokenAvailable);
  }
  openDrawer = () => {
    this.setState({ drawer: true });
  };
  closeDrawer = () => {
    this.setState({ drawer: false });
  };
  openUserMenu = () => {
    this.setState({ openMenu: !this.state.openMenu });
  };
  logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.clear();
        this.setState({ isTokenAvailable: false });
        this.props.router.navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
