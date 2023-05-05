import React, { Component } from "react";
// import Carousel from "react-elastic-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import coffee from "../Images/coffeeImg.png";
import woolen from "../Images/woolen.png";
import "./HomeSilder.css";
export class HomeSilder extends Component {
  render() {
    return (
      <div>
        <div className="Home-Carousel">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="carousel-content">
                <div className="left-carousel-content">
                  <h4>Special Offers</h4>
                  <h2>Winter Collection Knitting Stocking</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Illo excepturi dolore eligendi!
                  </p>
                  <button>Shop Now</button>
                </div>
                <div className="right-carousel-image">
                  <img src={woolen} alt="Coffee Image" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="carousel-content">
                <div className="left-carousel-content">
                  <h4>Life is very easy with</h4>
                  <h2>Coffee Machine Handmade Collection</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Illo excepturi dolore eligendi!
                  </p>
                  <button>Shop Now</button>
                </div>
                <div className="right-carousel-image">
                  <p>
                    <img src={coffee} alt="Coffee Image" />
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
  }
}

export default HomeSilder;
