import React from 'react';
import Banner from '../Banner/Banner';
import Swiper from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';


const reviewsPromise = fetch('/reviews.json')
.then(res => res.json());


const Home = () => {
    return (
        <div>
           <h3>This is Home</h3> 
           <Banner></Banner>
           <Swiper></Swiper>
           <Reviews reviewsPromise={reviewsPromise} ></Reviews>
        </div>
    );
};

export default Home;