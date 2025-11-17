import React from 'react';
import 'swiper/css';
import { Swiper , SwiperSlide} from 'swiper/react';
import amazon from '../../../assets/brands/amazon.png';
import casio from '../../../assets/brands/casio.png';
import moonstar from '../../../assets/brands/moonstar.png';
import star from '../../../assets/brands/star.png';
import randstad from '../../../assets/brands/randstad.png';

const Brands = () => {
    return (
        <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            pagination={{
                clickable: true,
            }}
            className="mySwiper"
        >
            <SwiperSlide><img src={amazon} alt="Amazon" /></SwiperSlide>
            <SwiperSlide><img src={casio} alt="Casio" /></SwiperSlide>
            <SwiperSlide><img src={moonstar} alt="Moonstar" /></SwiperSlide>
            <SwiperSlide><img src={star} alt="Star" /></SwiperSlide>
            <SwiperSlide><img src={randstad} alt="Randstad" /></SwiperSlide>
        </Swiper>
    );
};

export default Brands;