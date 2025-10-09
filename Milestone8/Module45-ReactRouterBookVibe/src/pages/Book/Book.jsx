import React, { use } from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';

const Book = ({singleBook}) => {
    // const  data = use(bookPromise);  // Instead i will pass from ROUTES
    // console.log(data)
    // console.log(singleBook);
    const{bookId, bookName, author, image, rating, review, yearOfPublishing, category, totalPages, tags, publisher} = singleBook;
    
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div class="card bg-base-100 w-96 shadow-sm border p-4">
            <figure className='p-5 bg-gray-200 w-4/6 mx-auto' >
                <img className='w-30 h-40'
                    src={image}
                    alt="" />
            </figure>
            <div class="card-body">
                
                <div className='flex justify-center'>
                    {
                    tags.map(tag=><button className='pr-3 mb-2'>{tag}</button>)
                }
                
                </div>
                    <h2 class="card-title p-1">
                        {bookName}
                        <div class="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p className='mb-1 p-1'>
                        Published by : {publisher}
                        <div className='border-t-1 border-dashed m-2'></div>
                    </p>
                    <div class="card-actions justify-end -m-1">
                        <div class="badge badge-outline">{author}</div>
                        <div class="badge badge-outline">{rating}<CiStar /></div>
                        <div class="badge badge-outline">{category}</div>
                        <div class="badge badge-outline">{totalPages}</div>

                    </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;