import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import React, { Component } from "react";
import { FaqData } from "./FAQData";

interface States {
  openPanel: boolean;
  panelData: any;
}
type Props = {};
export class FAQController extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      openPanel: false,
      panelData: FaqData,
    };
  }

  OpenPanel = () => {
    console.log();

    this.setState({ openPanel: !this.state.openPanel });
  };
  ExtraIcon = () =>
    !this.state.openPanel ? (
      <PlusOutlined
        onClick={() => this.OpenPanel()}
        className="faq-panel-icon"
      />
    ) : (
      <MinusOutlined
        onClick={() => this.OpenPanel()}
        className="faq-panel-icon faq-panel-icon-minus"
      />
    );
}

export default FAQController;
