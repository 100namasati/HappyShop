import React, { Component } from "react";
import "./NewArrival.css";
import Carousel from "react-elastic-carousel";
import book from "../../Images/book.png";
import bag from "../../Images/bag.png";
//import hat from "../Images/Hat.png";
import Bowl from "../../Images/Bowl.png";
import shoe from "../../Images/shoe.png";
import woolen from "../../Images/woolen.png";
import { FaRegEye, FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { Row, Col } from "antd";

type Props = {};
interface States {}

export default class NewArrival extends Component<Props, States> {
  breakPoints: (
    | {
        width: number;
        itemsToShow: number;
        itemsToScroll?: undefined;
        pagination?: undefined;
      }
    | {
        width: number;
        itemsToShow: number;
        itemsToScroll: number;
        pagination: boolean;
      }
    | {
        width: number;
        itemsToShow: number;
        itemsToScroll: number;
        pagination?: undefined;
      }
  )[];
  constructor(props: Props) {
    super(props);
    this.breakPoints = [
      {
        width: 376,
        itemsToShow: 1,
        itemsToScroll: 1,
      },
      {
        width: 576,
        itemsToShow: 3,
        itemsToScroll: 1,
      },
      { width: 768, itemsToShow: 3, itemsToScroll: 1 },
      { width: 992, itemsToShow: 4, itemsToScroll: 1 },
      { width: 1240, itemsToShow: 5, itemsToScroll: 1 },
    ];
  }
  render() {
    return (
      <div>
        <h1>New Arrival</h1>
        <p>There are many variations of passages</p>

        {/* @ts-ignore  */}
        <Carousel breakPoints={this.breakPoints}>
          <div>
            <Row>
              <Col lg={24} md={24} sm={24} className="productGird">
                <div className="productContainer">
                  <img src={book} alt="book" />
                  <div className="smallFeature">
                    <div className="feature-icon">
                      <FaRegEye />
                    </div>
                    <div className="feature-icon">
                      <FaShoppingCart />
                    </div>
                    <div className="feature-icon">
                      <FaRegHeart />
                    </div>
                    <div className="feature-icon">
                      <MdCompareArrows />
                    </div>
                  </div>
                </div>
                <h5>W.unit wise Product</h5>
                <p>$19.00</p>
              </Col>
              <Col lg={24} md={24} sm={24} className="productGird">
                <div className="productContainer">
                  <img src={bag} alt="book" />
                  <div className="smallFeature">
                    <div className="feature-icon">
                      <FaRegEye />
                    </div>
                    <div className="feature-icon">
                      <FaShoppingCart />
                    </div>
                    <div className="feature-icon">
                      <FaRegHeart />
                    </div>
                    <div className="feature-icon">
                      <MdCompareArrows />
                    </div>
                  </div>
                </div>
                <h5>W.unit wise Product</h5>
                <p>$19.00</p>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col lg={24} md={24} sm={24} className="productGird">
                <div className="productContainer">
                  <img src={shoe} alt="book" />
                  <div className="smallFeature">
                    <div className="feature-icon">
                      <FaRegEye />
                    </div>
                    <div className="feature-icon">
                      <FaShoppingCart />
                    </div>
                    <div className="feature-icon">
                      <FaRegHeart />
                    </div>
                    <div className="feature-icon">
                      <MdCompareArrows />
                    </div>
                  </div>
                </div>
                <h5>W.unit wise Product</h5>
                <p>$19.00</p>
              </Col>
              <Col lg={24} md={24} sm={24} className="productGird">
                <div className="productContainer">
                  <img src={shoe} alt="book" />
                  <div className="smallFeature">
                    <div className="feature-icon">
                      <FaRegEye />
                    </div>
                    <div className="feature-icon">
                      <FaShoppingCart />
                    </div>
                    <div className="feature-icon">
                      <FaRegHeart />
                    </div>
                    <div className="feature-icon">
                      <MdCompareArrows />
                    </div>
                  </div>
                </div>
                <h5>W.unit wise Product</h5>
                <p>$19.00</p>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col lg={24} md={24} sm={24} className="productGird">
                <div className="productContainer">
                  <img src={woolen} alt="book" />
                  <div className="smallFeature">
                    <div className="feature-icon">
                      <FaRegEye />
                    </div>
                    <div className="feature-icon">
                      <FaShoppingCart />
                    </div>
                    <div className="feature-icon">
                      <FaRegHeart />
                    </div>
                    <div className="feature-icon">
                      <MdCompareArrows />
                    </div>
                  </div>
                </div>
                <h5>W.unit wise Product</h5>
                <p>$19.00</p>
              </Col>
              <Col lg={24} md={24} sm={24} className="productGird">
                <div className="productContainer">
                  <img src={book} alt="book" />
                  <div className="smallFeature">
                    <div className="feature-icon">
                      <FaRegEye />
                    </div>
                    <div className="feature-icon">
                      <FaShoppingCart />
                    </div>
                    <div className="feature-icon">
                      <FaRegHeart />
                    </div>
                    <div className="feature-icon">
                      <MdCompareArrows />
                    </div>
                  </div>
                </div>
                <h5>W.unit wise Product</h5>
                <p>$19.00</p>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col lg={24} md={24} sm={24} className="productGird">
                <div className="productContainer">
                  <img src={woolen} alt="book" />
                  <div className="smallFeature">
                    <div className="feature-icon">
                      <FaRegEye />
                    </div>
                    <div className="feature-icon">
                      <FaShoppingCart />
                    </div>
                    <div className="feature-icon">
                      <FaRegHeart />
                    </div>
                    <div className="feature-icon">
                      <MdCompareArrows />
                    </div>
                  </div>
                </div>
                <h5>W.unit wise Product</h5>
                <p>$19.00</p>
              </Col>
              <Col lg={24} md={24} sm={24} className="productGird">
                <div className="productContainer">
                  <img src={book} alt="book" />
                  <div className="smallFeature">
                    <div className="feature-icon">
                      <FaRegEye />
                    </div>
                    <div className="feature-icon">
                      <FaShoppingCart />
                    </div>
                    <div className="feature-icon">
                      <FaRegHeart />
                    </div>
                    <div className="feature-icon">
                      <MdCompareArrows />
                    </div>
                  </div>
                </div>
                <h5>W.unit wise Product</h5>
                <p>$19.00</p>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col lg={24} md={24} sm={24} className="productGird">
                <div className="productContainer">
                  <img src={book} alt="book" />
                  <div className="smallFeature">
                    <div className="feature-icon">
                      <FaRegEye />
                    </div>
                    <div className="feature-icon">
                      <FaShoppingCart />
                    </div>
                    <div className="feature-icon">
                      <FaRegHeart />
                    </div>
                    <div className="feature-icon">
                      <MdCompareArrows />
                    </div>
                  </div>
                </div>
                <h5>W.unit wise Product</h5>
                <p>$19.00</p>
              </Col>
              <Col lg={24} md={24} sm={24} className="productGird">
                <div className="productContainer">
                  <img src={bag} alt="book" />
                  <div className="smallFeature">
                    <div className="feature-icon">
                      <FaRegEye />
                    </div>
                    <div className="feature-icon">
                      <FaShoppingCart />
                    </div>
                    <div className="feature-icon">
                      <FaRegHeart />
                    </div>
                    <div className="feature-icon">
                      <MdCompareArrows />
                    </div>
                  </div>
                </div>
                <h5>W.unit wise Product</h5>
                <p>$19.00</p>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col lg={24} md={24} sm={24} className="productGird">
                <div className="productContainer">
                  <img src={woolen} alt="book" />
                  <div className="smallFeature">
                    <div className="feature-icon">
                      <FaRegEye />
                    </div>
                    <div className="feature-icon">
                      <FaShoppingCart />
                    </div>
                    <div className="feature-icon">
                      <FaRegHeart />
                    </div>
                    <div className="feature-icon">
                      <MdCompareArrows />
                    </div>
                  </div>
                </div>
                <h5>W.unit wise Product</h5>
                <p>$19.00</p>
              </Col>
              <Col lg={24} md={24} sm={24} className="productGird">
                <div className="productContainer">
                  <img src={shoe} alt="book" />
                  <div className="smallFeature">
                    <div className="feature-icon">
                      <FaRegEye />
                    </div>
                    <div className="feature-icon">
                      <FaShoppingCart />
                    </div>
                    <div className="feature-icon">
                      <FaRegHeart />
                    </div>
                    <div className="feature-icon">
                      <MdCompareArrows />
                    </div>
                  </div>
                </div>
                <h5>W.unit wise Product</h5>
                <p>$19.00</p>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col lg={24} md={24} sm={24} className="productGird">
                <div className="productContainer">
                  <img src={Bowl} alt="book" />
                  <div className="smallFeature">
                    <div className="feature-icon">
                      <FaRegEye />
                    </div>
                    <div className="feature-icon">
                      <FaShoppingCart />
                    </div>
                    <div className="feature-icon">
                      <FaRegHeart />
                    </div>
                    <div className="feature-icon">
                      <MdCompareArrows />
                    </div>
                  </div>
                </div>
                <h5>W.unit wise Product</h5>
                <p>$19.00</p>
              </Col>
              <Col lg={24} md={24} sm={24} className="productGird">
                <div className="productContainer">
                  <img src={book} alt="book" />
                  <div className="smallFeature">
                    <div className="feature-icon">
                      <FaRegEye />
                    </div>
                    <div className="feature-icon">
                      <FaShoppingCart />
                    </div>
                    <div className="feature-icon">
                      <FaRegHeart />
                    </div>
                    <div className="feature-icon">
                      <MdCompareArrows />
                    </div>
                  </div>
                </div>
                <h5>W.unit wise Product</h5>
                <p>$19.00</p>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col lg={24} md={24} sm={24} className="productGird">
                <div className="productContainer">
                  <img src={woolen} alt="book" />
                  <div className="smallFeature">
                    <div className="feature-icon">
                      <FaRegEye />
                    </div>
                    <div className="feature-icon">
                      <FaShoppingCart />
                    </div>
                    <div className="feature-icon">
                      <FaRegHeart />
                    </div>
                    <div className="feature-icon">
                      <MdCompareArrows />
                    </div>
                  </div>
                </div>
                <h5>W.unit wise Product</h5>
                <p>$19.00</p>
              </Col>
              <Col lg={24} md={24} sm={24} className="productGird">
                <div className="productContainer">
                  <img src={book} alt="book" />
                  <div className="smallFeature">
                    <div className="feature-icon">
                      <FaRegEye />
                    </div>
                    <div className="feature-icon">
                      <FaShoppingCart />
                    </div>
                    <div className="feature-icon">
                      <FaRegHeart />
                    </div>
                    <div className="feature-icon">
                      <MdCompareArrows />
                    </div>
                  </div>
                </div>
                <h5>W.unit wise Product</h5>
                <p>$19.00</p>
              </Col>
            </Row>
          </div>
        </Carousel>
      </div>
    );
  }
}
