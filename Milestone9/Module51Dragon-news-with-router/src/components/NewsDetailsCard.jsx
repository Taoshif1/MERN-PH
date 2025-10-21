import React from 'react';
import { Link } from 'react-router';
import { IoArrowBackCircleSharp } from "react-icons/io5";

const NewsDetailsCrad = ({news}) => {
    console.log(news);
    return (
        <div className='space-y-5'>
            <img className='w-full h-[450px] object-cover' src={news.image_url} alt="" />
            <h2 className='text-2xl'>{news.title} </h2>
            <p>{news.details}</p>
            <Link className='btn btn-secondary' 
                to={`/category/${news.category_id}`}>
                    <IoArrowBackCircleSharp size={22} />
                    go back to Category</Link>
        </div>
    );
};

export default NewsDetailsCrad;