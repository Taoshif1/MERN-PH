import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utils/addToDB';


const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();    
    // console.log(data);
    const singleBook = data.find(book=>book.bookId===bookId);
    const {bookName, image, author, category, publisher, rating, review, totalPages, yearOfPublishing} = singleBook;

    const handleMarkAsRead = id =>{
        //store with id & where to store (array or collection), 
        // if book already exist then show a alert, if not then push in array/collection

        addToStoredDB(id);

    }

    return (
        <div className='w-2/3 mx-auto'>
            <img className='w-45' src={image} alt="image" />
            <h1>{bookName}</h1>

            <button onClick={()=>handleMarkAsRead(id)} className='btn  btn-accent m-2'>Mark as Read </button>
            <button className='btn  btn-accent m-2'>Add to Wishlist</button>
        </div>
    );
};

export default BookDetails;