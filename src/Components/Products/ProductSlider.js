import { productImages } from './images'
import React, { Component, useState } from 'react'
import {SwiperButton, SwipperButton2}from './SwiperButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination ,Thumbs} from 'swiper';
import ProductController from "./ProductController";
import { Button, Modal } from 'antd';
import '../Products/Products.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/thumbs'
import './Products.css'
// export default class ProductSlider extends ProductController {
  
//   render() {
//     return (
//         <div className="product-slider">
//         <Swiper
//          loop={true}
//             spaceBetween={10}
//             navigation={false}
//             modules={[Navigation, Thumbs]}
//             grabCursor={true}
//             thumbs={{ swiper: this.state.activeThumb }}
//        >
//          {
//                 this.props.images.map((item, index) => (
//                     <SwiperSlide key={index}>
//                         <img src={item} alt="product images" style={{height:"350px", width:"500px"}} />
//                     </SwiperSlide>
//                 ))
//             }
//             <SwiperButton/>
         
//        </Swiper>
//        <Swiper
//             // onSwiper={setActiveThumb}
//             loop={true}
//             spaceBetween={10}
//             slidesPerView={4}
//             modules={[Navigation, Thumbs]}
//             className='product-images-slider-thumbs'
//         >
//             {
//                 this.props.images.map((item, index) => (
//                     <SwiperSlide key={index}>
//                         <div className="product-images-slider-thumbs-wrapper">
//                             <img src={item} alt="product images" style={{height:"100px", width:"200px"}}/>
//                         </div>
//                     </SwiperSlide>
//                 ))
//             }
//             <SwipperButton2/>

//         </Swiper>

        
//    </div>
//     )
//   }
// }

const ProductSlider = (props) => {
    const [activeThumb,setActiveThumb]=useState()
    const [modalOpen, setModalOpen]=useState(false)
  return (
    <div>
         <div className="product-slider">
        <Swiper
         loop={true}
            spaceBetween={10}
            navigation={false}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
       >
         {
                props.images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} alt="product images" style={{height:"350px", width:"500px", marginBottom:"20px"}} />
                    </SwiperSlide>
                ))
            }
            <Button type="primary" onClick={() => setModalOpen(true)}>
        Vertically centered modal dialog
      </Button>
      
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
            
            {/* <SwiperButton/> */}
       </Swiper>
       <Swiper
            onSwiper={setActiveThumb}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            modules={[Navigation, Thumbs]}
            className='product-images-slider-thumbs'
        >
            {
                props.images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="product-images-slider-thumbs-wrapper">
                            <img src={item} alt="product images" style={{height:"100%", width:"100%"}}/>
                        </div>
                    </SwiperSlide>
                ))
            }
            <SwiperButton/>

        </Swiper>
        

        
   </div>
    </div>
  )
}

export default ProductSlider
