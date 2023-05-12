import React, { Component } from "react";
import { Link } from "react-router-dom";
import product from "../../Images/product.png";
import { productImages } from "./images";
import ProductSlider from "./ProductSlider";
import ProductController from "./ProductController";
import { AiOutlineStar } from "react-icons/ai";
import { Row, Col } from "antd";
export default class Products extends ProductController {
  renderProductNavbar = () => {
    return (
      <div className="product-Navbar">
        <div className="product-left">
          <h2>Product</h2>
          <div className="product-text">
            <span>
              {" "}
              <Link to="/">Home</Link>
            </span>
            <span>
              {" "}
              <Link to="/myaccount" id="active">
                Product
              </Link>
            </span>
          </div>
        </div>
        <div className="product-img">
          <img src={product} />
        </div>
      </div>
    );
  };
  renderProductDetails = () => {
    return (
      <div className="prodcut-details">
        <div className="review">
          <span>
            <AiOutlineStar />
          </span>
          <span>
            <AiOutlineStar />
          </span>
          <span>
            <AiOutlineStar />
          </span>
          <span>
            <AiOutlineStar />
          </span>
          <span>No Reviews</span>
        </div>
        <h3>C.v Products</h3>
        <div className="price">
          <h4>
            {" "}
            <del>$65.00</del>
          </h4>
          <h3>$70.00</h3>
          <div className="discount">
            <p>Save -18%</p>
          </div>
        </div>
        <div className="productText">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
            ducimus dolores dolor sit amet consectetur adipisicing elit. Culpa
            ducimus dolores ut voluptas saepe corporis quae deleniti aperiam
            tempore debitis.
          </p>
        </div>
        <hr className="horizontal" />
        <div className="productFeature">
          <div className="featureItem">
            <h6>SKU:</h6>
            <p>11000</p>
          </div>
          <div className="featureItem">
            <h6>Availibity:</h6>
            <p>6 left in stock</p>
          </div>
          <div className="featureItem">
            <h6>Vendor:</h6>
            <p>Vendor C</p>
          </div>
          <div className="featureItem">
            <h6>Type:</h6>
            <p>Type C</p>
          </div>
        </div>
        <hr className="horizontal" />
        <div className="productFeature">
          <div className="featureItem">
            <h6>Size:</h6>
            <div className="sizeSection">
              {this.state.productSizeData.map((item: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="size"
                    onClick={() => {
                      this.changeSizeBackground(index);
                    }}
                    style={{
                      backgroundColor: item.active ? "coral" : "white",
                      color: item.active ? "white" : "black",
                    }}
                  >
                    {item.sizeValue}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="featureItem">
            <h6>Color:</h6>
            <div className="sizeSection">
              {this.state.productColorData?.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className={item.active === true ? "active color" : "color"}
                    style={{ backgroundColor: `${item.color}` }}
                    onClick={() => {
                      this.changeBorder(index);
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="featureItem">
            <h6>Material:</h6>
            <div className="sizeSection">
              {this.state.productMaterialData.map((item: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="material"
                    onClick={() => {
                      this.changeProductMaterial(index);
                    }}
                    style={{
                      backgroundColor: item.active ? "coral" : "white",
                      color: item.active ? "white" : "black",
                      borderColor: item.active ? "white" : "black",
                    }}
                  >
                    {item.mateiralValue}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };
  renderProduct = () => {
    return (
      <div className="product-container">
        <Row>
          <Col lg={12} md={12} sm={24} xs={24}>
            <div className="product-preview">
              <ProductSlider images={productImages} />
            </div>
          </Col>

          <Col lg={12} md={12} sm={24} xs={24}>
            {this.renderProductDetails()}
          </Col>
        </Row>
      </div>
    );
  };
  render() {
    // console.log(this.state.productColorData);
    return (
      <div>
        {this.renderProductNavbar()}
        {this.renderProduct()}
      </div>
    );
  }
}
