import React from "react";
export interface states {
  drawer: boolean;
  drawerDirection: any;
  closeDrawer: boolean;
  //user menu state
  openMenu: boolean;
}
export type Props = {};
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
  openDrawer = () => {
    this.setState({ drawer: true });
    // console.log("@@--", typeof this.state.drawerDirection);
  };
  closeDrawer = () => {
    this.setState({ drawer: false });
  };
  openUserMenu = () => {
    this.setState({ openMenu: !this.state.openMenu });
  };
  
}
