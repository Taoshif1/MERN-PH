import React from 'react';
import { use } from 'react';


const categoryPromise = fetch("/categories.json").then(res=>res.json());
// console.log(categoryPromise);

const Categories = () => {

    const categories = use(categoryPromise);

    return (
        <div>
            <h4 className='font-bold'>All Categories({categories.length})</h4>
        </div>
    );
};

export default Categories;