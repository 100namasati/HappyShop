import { Component } from "react";
import {
  AboutYearData,
  CreativeDesignData,
  TeamData,
  ClientFeedback,
} from "./AboutData";
interface States {
  yearData: any;
  teamData: any;
  CreativeDesignData: any;
  ClientFeedBackData: any;
  openModal: boolean;
}
type Props = {};
export class AboutController extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      yearData: AboutYearData,
      teamData: TeamData,
      CreativeDesignData: CreativeDesignData,
      ClientFeedBackData: ClientFeedback,
      openModal: false,
    };
  }
  handleCancel = () => {
    this.setState({ openModal: false });
  };
}

export default AboutController;
