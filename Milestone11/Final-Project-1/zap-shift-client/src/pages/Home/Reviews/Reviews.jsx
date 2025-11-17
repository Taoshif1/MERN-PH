import React, { use } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);
    console.log("reviews from reviews page:", reviews);
    return (
        
        <div>
            <div className='text-center'> 
                <h2 className='text-3xl font-bold  my-8'>Customer Reviews</h2>
                <p className='mb-5'>This is the reviews section. Please check back later for more updates.</p>
            </div>
            <>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination ]}
                    className="mySwiper"
                >
                {
                    reviews.map( review => 
                    <SwiperSlide key={review.id}>
                        <ReviewCard review={review} ></ReviewCard>
                    </SwiperSlide>
                    )
                }

                </Swiper>
            </>
        </div>
    );
};

export default Reviews;