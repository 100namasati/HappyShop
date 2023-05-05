import React, { Component } from "react";
import ProjectNavbar from "./ProjectNavbar";
import NavbarController from "./NavbarController";
import HomeSilder from "./HomeSilder";
import MiddleDiv from "./MiddleDiv";
import NewArrival from "./NewArrival";
import SubsriberComponent from "./SubsriberComponent";
import Footer from "./Footer";

export default class Home extends Component {
  //   constructor(props: any) {
  //     super(props);
  //   }
  render() {
    return (
      <div>
        <ProjectNavbar />
        <HomeSilder />
        <MiddleDiv />
        <NewArrival />
        <SubsriberComponent />
        <Footer />
      </div>
    );
  }
}
