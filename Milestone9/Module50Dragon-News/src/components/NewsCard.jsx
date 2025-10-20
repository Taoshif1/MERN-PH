import React from "react";
import { FaStar, FaEye, FaShareAlt  } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const NewsCard = ({ news }) => {
    const { title, author, rating, total_view, thumbnail_url,details, tags } = news;

    const publishedDate = new Date(author.published_date).toLocaleDateString(
    "en-GB", { year: "numeric", month: "short", day: "numeric" }
    );

    return (
        <div className="card bg-base-200 shadow-md  overflow-hidden hover:shadow-xl transition-all duration-300 mx-5">
    
        {/* Author Section */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
            <div className="flex items-center gap-3">
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src={author.img} alt={author.name} />
                    </div>
                </div>
                <div className="">
                    <h2 className="font-semibold text-gray-800">{author.name}</h2>
                    <p className="text-sm text-gray-500">{publishedDate}</p>
                </div>
            </div>
            
            <div>
                <button className="btn btn-ghost btn-sm text-xl ">
                <FaShareAlt />
            </button>
            <button className="btn btn-ghost btn-sm text-xl ">
                <CiBookmark size={23}></CiBookmark>
            </button>
            </div>
        </div>

        {/* Title */}
        <div className="px-4 pt-3">
            <h3 className="font-bold text-lg text-gray-900 leading-snug">
                {title}
            </h3>
        </div>

        {/* Image */}
        <figure className="px-4 pt-3">
            <img
            src={thumbnail_url}
            alt={title}
            className="rounded-xl w-full object-cover h-56"/>
        </figure>

        {/* Details */}
        <div className="px-4 py-3">
            <p className="text-gray-600 text-sm">
            {details.slice(0, 220)}...
                <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                    Read More
                </span>
            </p>
        </div>

        {/* Tags */}
        <div className="px-4 pb-3 flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
            <span
                key={idx}
                className="badge badge-outline text-xs text-gray-600 hover:bg-gray-100">
            #{tag}
            </span>
            ))}
        </div>

        {/* Footer: Rating + Views */}
        <div className="flex justify-between items-center px-4 py-3 border-t text-sm text-gray-700">
            <div className="flex items-center gap-1 text-orange-500">
                {[...Array(rating.number)].map((_, i) => (
                <FaStar key={i} />
            ))}
                <span className="ml-1 text-gray-700 font-medium">
                    {rating.number.toFixed(1)}
                </span>
            </div>

            <div className="flex items-center gap-2">
                <FaEye className="text-gray-500" />
                <span>{total_view.toLocaleString()}</span>
            </div>
        </div>
        </div>
    );
};

export default NewsCard;
