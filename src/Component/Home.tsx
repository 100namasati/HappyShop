import React, { Component } from "react";
import HomeSilder from "./HomeSilder";
import MiddleDiv from "./MiddleDiv";
import NewArrival from "./NewArrival";
import SubsriberComponent from "./SubsriberComponent";
import Footer from "./Footer";

export default class Home extends Component {
 
  render() {
    return (
      <div>
        <HomeSilder />
        <MiddleDiv />
        <NewArrival />
        <SubsriberComponent />
        <Footer />
      </div>
    );
  }
}
