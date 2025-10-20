import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";



const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold space-y-5'>Find Us On</h2>
            <div className="">
                <div class="join join-vertical w-full">
                    <button class="btn join-item bg-base-200 justify-start">
                        <FaFacebook />
                        Facebook
                    </button>
                    <button class="btn join-item bg-base-200 justify-start">
                        <FaLinkedin />
                        LinkedIn
                    </button>
                    <button class="btn join-item bg-base-200 justify-start">
                        <FaInstagramSquare />
                        Instagram
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;