import React from 'react';

import bookimage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around items-center p-10 w-full'>
            <div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus perferendis autem consectetur cupiditate labore commodi atque porro quibusdam nihil.</h1>
                <button className="btn btn-primary">Test test</button>
            </div>
            <div>
                <img className='w-4/12' src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;