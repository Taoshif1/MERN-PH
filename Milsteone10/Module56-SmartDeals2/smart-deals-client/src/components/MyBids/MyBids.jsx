import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const MyBids = () => {
  const { user } = useContext(AuthContext);
  const [bids, setBids] = useState([]);

  useEffect(() => {
  if (user?.email) {
    fetch(`http://localhost:3000/bids?email=${user.email}`)
      .then(res => res.json())
      .then(async (bidsData) => {
        // Fetch all products
        const res = await fetch(`http://localhost:3000/products`);
        const products = await res.json();

        // Merge data
        const merged = bidsData.map(bid => {
          const product = products.find(p => p._id === bid.product);
          return {
            ...bid,
            productName: product?.title,
            productPrice: product?.price_min,
            productImage: product?.image,
            sellerName: product?.seller_name,
            sellerEmail: product?.email,
            sellerImage: product?.seller_image,
          };
        });

        setBids(merged);
      })
      .catch(error => console.error("Error fetching bids:", error));
  }
}, [user?.email]);

  const handleRemoveBid = (id) => {
    fetch(`http://localhost:3000/bids/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setBids(bids.filter((bid) => bid._id !== id));
      });
  };

  return (
    <div className="p-6 overflow-x-auto">
      <h3 className="text-2xl font-bold text-center mb-6">
        My Bids: <span className="text-indigo-600">{bids.length}</span>
      </h3>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="table w-full">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th>SL No</th>
              <th>Product</th>
              <th>Seller</th>
              <th>Bid Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {bids.map((bid, index) => (
              <tr key={bid._id} className="hover:bg-gray-50">
                <td>{index + 1}</td>

                {/* Product info */}
                <td className="flex items-center gap-3">
                  <img
                    src={bid.productImage}
                    alt={bid.productName}
                    className="w-10 h-10 rounded-md object-cover"
                  />
                  <div>
                    <p className="font-semibold">{bid.productName}</p>
                    <p className="text-gray-500 text-sm">${bid.productPrice}</p>
                  </div>
                </td>

                {/* Seller info */}
                <td>
                  <div className="flex items-center gap-2">
                    <img
                      src={bid.sellerImage}
                      alt={bid.sellerName}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="font-medium">{bid.sellerName}</p>
                      <p className="text-gray-500 text-xs">{bid.sellerEmail}</p>
                    </div>
                  </div>
                </td>

                <td className="font-medium">${bid.bid_price}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      bid.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : bid.status === "Accepted"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {bid.status}
                  </span>
                </td>

                <td>
                  <button
                    onClick={() => handleRemoveBid(bid._id)}
                    className="btn btn-xs btn-outline btn-error"
                  >
                    Remove Bid
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
