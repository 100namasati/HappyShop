import React from 'react';
import { useSwiper } from 'swiper/react';
import {AiOutlineDoubleLeft,AiOutlineDoubleRight} from 'react-icons/ai'

export const SwiperButton = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      {/* <button onClick={() => swiper.slidePrev()}></button>
      <button onClick={() => swiper.slideNext()}></button> */}
      <button onClick={() => swiper.slidePrev()}>{<AiOutlineDoubleLeft/>}</button>
      <button onClick={() => swiper.slideNext()}>{<AiOutlineDoubleRight/>}</button>
    </div>
  );
};
// export const SwipperButton2=()=>{
//     const swiper = useSwiper();

//     return (
//       <div className="swiper-nav-btns">
//         <button onClick={() => swiper.slidePrev()}>{<AiOutlineDoubleLeft/>}</button>
//         <button onClick={() => swiper.slideNext()}>{<AiOutlineDoubleRight/>}</button>
//       </div>
//     );
// }