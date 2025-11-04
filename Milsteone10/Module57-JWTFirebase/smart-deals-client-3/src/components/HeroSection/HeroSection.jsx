import React from 'react'
import bgLeft from '../../assets/bg-hero-left.png'
import bgRight from '../../assets/bg-hero-right.png'

const HeroSection = () => {
  return (
        <div className="relative min-h-[calc(70vh-64px)] flex items-center justify-center overflow-hidden bg-gradient-to-r from-pink-200 to-pink-50 ">
      
      {/* Background Images */}
      <img 
        src={bgLeft} // left background image
        alt="Background Left"
        className="absolute top-0 left-0 w-1/4 h-full object-contain opacity-70 transform -translate-x-1/4 hidden md:block"/>
      <img
        src={bgRight} // right background image
        alt="Background Right"
        className="absolute top-0 right-0 w-1/4 h-full object-contain opacity-70 transform translate-x-1/4 hidden md:block"/>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Deal Your <span className="text-primary">Products</span> <br /> In A <span className="text-primary">Smart</span> Way !
        </h1>
        <p className="text-lg text-gray-700 mb-8 ">
          SmartDeals helps you sell, resell and shop from trusted local sellers — all in one place!
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mb-8 ">
          <div className="join w-full max-w-md ">
            <input
              type="text"
              placeholder="search For Products, Categories..."
              className="input input-bordered join-item w-full rounded-l-3xl "
            />
            <button className="btn btn-primary join-item px-5 rounded-r-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <button className="btn btn-primary">Watch All Products</button>
          <button className="btn btn-outline text-primary  hover:bg-primary hover:text-white font-bold">
            Post a Product
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection