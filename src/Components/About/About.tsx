import AboutController from "./AboutController";
import "./About.css";
import { Button, Card, Col, Modal, Popconfirm, Row } from "antd";
import HeroImage from "../../Images/about-hero-image.webp";
import VideoPlayButton from "../../Images/play-button.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { MdLocalShipping } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

export class About extends AboutController {
  breakpoints: any = {
    // when window width is >= 320px
    474: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1240: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  };
  render() {
    return (
      <div>
        <div
          className="about-hero-section"
          style={{ width: "90%", margin: "auto" }}
        >
          <Row>
            <Col
              lg={12}
              md={12}
              sm={24}
              xs={24}
              className="about-hero-section-left-text"
            >
              <h5>Provide the best</h5>
              <h1>Handmade Products.</h1>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC.
              </p>
              <p>
                This book is a treatise on the theory of ethics, very popular
                during the Renaissance. The first line of Lorem Ipsum, "Lorem
                ipsum dolor sit amet..", comes from a line in section 1.10.32.≈
              </p>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <img src={HeroImage} alt="" style={{ width: "100%" }} />
            </Col>
          </Row>
          <Row>
            <Col lg={24} md={24} sm={24} xs={24}>
              <div className="hero-section-video-image-container">
                {" "}
                <p></p>{" "}
                <div className="hero-section-video-play-image-container">
                  <img
                    src={VideoPlayButton}
                    alt="video_image"
                    onClick={() => this.setState({ openModal: true })}
                  />
                </div>
              </div>
              <Modal
                footer={null}
                open={this.state.openModal}
                closable={true}
                onCancel={this.handleCancel}
              >
                <iframe
                  width="650"
                  height="350"
                  src="https://www.youtube.com/embed/WcIcVapfqXw"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </Modal>
            </Col>
          </Row>
        </div>
        <hr />

        <div
          className="about-journey-section-container"
          style={{ width: "90%", margin: "auto" }}
        >
          <Row gutter={[16, 20]} style={{ marginTop: "-50px" }}>
            {this.state.yearData.map((item: any, index: number) => {
              return (
                <Col
                  lg={4}
                  md={12}
                  sm={12}
                  xs={24}
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    // border: "1px solid red",
                    height: "120px",
                  }}
                >
                  <Popconfirm
                    placement="topLeft"
                    title={item.title}
                    description={item.description}
                  >
                    <Button className="about-journey-section-year-item">
                      <h6>{item.year}</h6>
                    </Button>
                  </Popconfirm>
                </Col>
              );
            })}
          </Row>
        </div>
        <hr />

        <div className="about-team-container">
          <Row gutter={[16, 20]}>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h1 style={{ fontSize: "45px" }}>Team Member</h1>
              <p style={{ fontSize: "20px" }}>Our Creative Team Members</p>
            </Col>
            {this.state.teamData.map((item: any, index: number) => {
              return (
                <Col
                  key={index}
                  lg={6}
                  md={12}
                  sm={24}
                  xs={24}
                  style={{
                    width: "400",
                    // height: "350px",
                    // border: "1px solid red",
                  }}
                >
                  <Card className="about-team-card">
                    <img alt="example" src={item.image} />
                    <h6>{item.designation}</h6>
                    <h3 className="team-name">{item.name}</h3>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
        <hr />
        <div className="about-creativeDesign-logo">
          <Row>
            {this.state.CreativeDesignData.map((item: any, index: number) => {
              return (
                <Col lg={4} md={8} sm={12} xs={24}>
                  <div>
                    <img src={item} alt="" />
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
        <div>
          <Row>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h1>Client Feedback</h1>
              <p>The valuable opinion of our clients.</p>
            </Col>

            <Col lg={24} md={24} sm={24} xs={24}>
              {/* @ts-ignore */}
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                pagination={false}
                navigation={true}
                modules={[Navigation]}
                loop={true}
                breakpoints={this.breakpoints}
              >
                {this.state.ClientFeedBackData.map(
                  (item: any, index: number) => {
                    return (
                      <SwiperSlide key={index}>
                        <Row className="about-carousel-card">
                          <Col lg={12} md={12} sm={12} xs={12}>
                            <img src={item.image} alt="" />
                          </Col>
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            xs={12}
                            className="card-content"
                          >
                            <p>{item.feedback}</p>
                            <h5>{item.name}</h5>
                          </Col>
                        </Row>
                      </SwiperSlide>
                    );
                  }
                )}
              </Swiper>
            </Col>
          </Row>
        </div>
        <div className="middleContainer">
          <Row gutter={[16, 32]} className="firstRow">
            <Col lg={8} md={24} sm={24}>
              <div className="middleItem">
                <span className="middleIcon">
                  <MdLocalShipping />
                </span>
                <span className="middleText">
                  <h4>Free Shipping</h4>
                  <p>Free Shipping on orders over $99.</p>
                </span>
              </div>
            </Col>
            <Col lg={8} md={24} sm={24}>
              <div className="middleItem">
                <span className="middleIcon">
                  <GiTakeMyMoney />
                </span>
                <span className="middleText">
                  <h4>Money Back</h4>
                  <p>15 days Money back guarantee.</p>
                </span>
              </div>
            </Col>
            <Col lg={8} md={24} sm={24}>
              <div className="middleItem">
                <span className="middleIcon">
                  <RiSecurePaymentLine />
                </span>
                <span className="middleText">
                  <h4>Secure Checkout</h4>
                  <p>We ensure 100% payment secure.</p>
                </span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default About;
