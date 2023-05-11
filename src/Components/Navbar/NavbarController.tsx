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
  componentRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.componentRef = React.createRef();
    this.handleCloseUserMenu = this.handleCloseUserMenu.bind(this);
    this.state = {
      drawer: false,
      drawerDirection: "left",
      closeDrawer: false,
      //user menu state
      openMenu: false,
    };
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleCloseUserMenu);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleCloseUserMenu);
  }

  handleCloseUserMenu(event: MouseEvent) {
    if (
      this.componentRef.current &&
      !this.componentRef.current.contains(event.target as Node)
    ) {
      this.setState({
        openMenu: false,
      });
    }
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
        alert("User Logged Out");
        this.props.router.navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
