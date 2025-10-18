import React, { use } from 'react';



const categoryPromise = fetch("/categories.json").then(res=>res.json());
// console.log(categoryPromise);


const CategoryNews = () => {

    const categories = use(categoryPromise);

    return (
        <div>
            <h4>Category News!!</h4>
        </div>
    );
};

export default CategoryNews;