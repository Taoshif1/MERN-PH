import React from 'react';
import 'swiper/css';
import { Swiper , SwiperSlide} from 'swiper/react';
import amazon from '../../../assets/brands/amazon.png';
import amazon_vector from '../../../assets/brands/amazon_vector.png';
import casio from '../../../assets/brands/casio.png';
import moonstar from '../../../assets/brands/moonstar.png';
import star from '../../../assets/brands/star.png';
import start_people from '../../../assets/brands/start_people.png';
import randstad from '../../../assets/brands/randstad.png';
import { Autoplay, Pagination } from 'swiper/modules';


const brandLogos = [ amazon, amazon_vector, casio, moonstar, star, start_people, randstad ];

const Brands = () => {
    return (
        <Swiper
            loop={true}
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            modules={[Autoplay, Pagination ]}
            autoplay={{
                delay: 1500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            className="mySwiper"
        >
            {
                brandLogos.map((logo, index) =>
                    <SwiperSlide key={index}>
                        <img src={logo} alt="Brand" />
                    </SwiperSlide> )
            }
            
        </Swiper>
    );
};

export default Brands;