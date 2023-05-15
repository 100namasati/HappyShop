import "./Services.css";
import { Col, Row } from "antd";
import ServicesController from "./ServicesController";
export class Services extends ServicesController {
  render() {
    return (
      <div className="serices-main-container">
        <Row gutter={[16, 30]} style={{ marginTop: "100px" }}>
          {this.state.serviceData.map((item: any, index: number) => {
            return (
              <Col key={index} lg={8} md={12} sm={24} xs={24}>
                <div className="services-card-wrapper">
                  <img src={item.image} alt="service_image" />
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <button className="service-card-button">{item.button}</button>
                </div>
              </Col>
            );
          })}
        </Row>
        <Row className="services-bottom-section">
          <Col lg={24} md={24} sm={24} xs={24}>
            <h6>Custom Order</h6>
            <h1>+0123-456789</h1>
            <div className="services-bottom-section-button-wrapper">
              <button className="btn-one">Make a call</button>
              <button className="btn-two">Send Message</button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Services;
