import React, { Component } from "react";
import HomeSilder from "../HomeSlider/HomeSilder";
import MiddleDiv from "../MiddleDiv/MiddleDiv";
import NewArrival from "../NewArrivals/NewArrival";
import SubsriberComponent from "../Subscriber/SubsriberComponent";
import Footer from "../Footer/Footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <HomeSilder />
        <MiddleDiv />
        <NewArrival />
        <SubsriberComponent />
      </div>
    );
  }
}
