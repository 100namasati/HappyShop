import "./FAQ.css";
import { Collapse } from "antd";
import { MinusOutlined, PhoneFilled, PlusOutlined } from "@ant-design/icons";
import FAQController from "./FAQController";
const { Panel } = Collapse;

export class FAQ extends FAQController {
  render() {
    return (
      <div>
        <div className="faq-container">
          <h1 className="faq-container-heading">FAQ's</h1>
          <Collapse
            bordered={true}
            expandIconPosition="right"
            expandIcon={({ isActive }) =>
              isActive ? (
                <MinusOutlined className="faq-panel-icon faq-panel-icon-minus" />
              ) : (
                <PlusOutlined className="faq-panel-icon " />
              )
            }
          >
            {this.state.panelData.map((item: any, index: number) => {
              return (
                <Panel
                  //   className={"ant-collapse-item-active" ? this.OpenPanel : ""}
                  //   showArrow={false}
                  header={item.header}
                  key={index}
                >
                  <p>{item.p}</p>
                </Panel>
              );
            })}
          </Collapse>
          <div className="faq-bottom-contactus">
            <h2>For furthermore help, contact with our support team.</h2>
            <button>Contact Us</button>
            <h3
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PhoneFilled style={{ fontSize: "24px" }} /> +0123-456-789
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
