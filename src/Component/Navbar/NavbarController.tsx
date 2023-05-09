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
    };
  }
  Protected = () => {
    let isLoggedIn = false;
    let user = localStorage.getItem("token");
    if (!user) {
      isLoggedIn = false;
    } else {
      isLoggedIn = true;
    }
    return isLoggedIn;
  };
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
        this.props.router.navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
