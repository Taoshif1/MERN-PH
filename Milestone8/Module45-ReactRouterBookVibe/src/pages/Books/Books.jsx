import React from 'react';
import { useState, useEffect, Suspense } from 'react';
import { data } from 'react-router';
import Book from '../Book/Book';

const Books = () => {
    const [allBooks, setAllBooks] = useState([]);

    // how to load/fetch data way- 1
    // useEffect(()=>{
    //     fetch("booksData.json")
    //     .then(res => res.json())
    //     .then(data =>
    //         console.log(data)
    //     )
    // },[])

    // how to load/fetch data way- 2
    const bookPromise = fetch('../../../public/booksData.json')
    .then(res=>res.json())


    return (
        <div>
            <h1 className='text-3xl text-center p-5'>Hello ami books</h1>
            <Suspense fallback={<p>Loading...</p>}>
                <Book bookPromise={bookPromise}></Book>
            </Suspense>
        </div>
    );
};

export default Books;