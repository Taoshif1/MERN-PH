import React, { use } from 'react';
import Product from '../Product/Product';
import { useLoaderData } from 'react-router';

const ProductDetails = () => {
    const Product = useLoaderData();
    console.log(Product)
  
    return (
    <div>
        pdeatils page;
    </div>
  )
}

export default ProductDetails