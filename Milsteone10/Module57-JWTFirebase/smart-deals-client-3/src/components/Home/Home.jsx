import React, { Suspense } from 'react';
import HeroSection from '../HeroSection/HeroSection';
import LatestProducts from '../LatestProducts/LatestProducts';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const LatestProductsPromise = fetch('http://localhost:3000/latest-products').then(res => res.json());

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      
      <Suspense fallback = {<LoadingSpinner></LoadingSpinner>}>
        <LatestProducts 
          LatestProductsPromise={LatestProductsPromise} >            
        </LatestProducts>
      </Suspense>


    </div>

  );
};

export default Home;
