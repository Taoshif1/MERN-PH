import React from "react";

const Product = ({ product }) => {
  const { title, price_min, price_max, image } = product;

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
          <button class="btn btn-primary w-full">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
