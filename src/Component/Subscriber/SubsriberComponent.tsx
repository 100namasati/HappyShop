import React, { Component } from "react";
import "./SubsriberComponent.css";
export default class SubsriberComponent extends Component {
  render() {
    return (
      <div className="subContainer">
        <h2>Newsletter</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia esse
          ad, iusto eos quod in.
        </p>
        <div className="inputDiv">
          <input type="text" placeholder="example@gmail.com" />
          <button>Subcriber</button>
        </div>
      </div>
    );
  }
}
