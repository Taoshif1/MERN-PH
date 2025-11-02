import React from "react";
import { Link } from "react-router";

const Product = ({ product }) => {
  const { _id, title, price_min, price_max, image } = product;

  return (
    <div class="card bg-base-100 shadow-sm">
      <figure class="px-4 pt-4">
        <img
          src={image}
          alt="Shoes"
          class="rounded-xl"/>
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>
            Price: ${price_min} - ${price_max}
        </p>
        <div class="card-actions">
          <Link to={`/productDetails/${_id}`} class="btn btn-primary w-full">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
