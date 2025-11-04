import { useContext, useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const product = useLoaderData(); // full product info
  const { _id: productId } = product;
  const [bids, setBids] = useState([]);
  const bidModalRef = useRef(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/products/bids/${productId}`,{
      headers: {
        authorization: `Bearer ${user.accessToken}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Bids for this product -> ", data);
        setBids(data);
      });
  }, [productId, user]);

  const handleBidModalOpen = () => bidModalRef.current.showModal();

  const handleBidSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const bid = e.target.bid.value;

    const newBid = {
      product: productId,
      buyer_name: name,
      buyer_email: email,
      // buyer_image: user?.photoURL,
      bid_price: bid,
      status: "pending",
    };

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          bidModalRef.current.close();
          // sweet alert for toast notification
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your bid has been saved!",
            showConfirmButton: false,
            timer: 1500,
          });
          // add new bid to state
          newBid._id = data.insertedId;
          const newBids =  [...bids, newBid];
          newBids.sort((a,b) => {b.bid_price - a.bid_price});
          setBids(newBids);
        }
      })
      .catch(console.error);
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-5 md:px-10">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center items-center bg-gray-100 rounded-xl p-4">
          <img src={product.image} alt={product.title}
            className="rounded-xl w-full max-h-[400px] object-cover"/>
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <p onClick={() => window.history.back()}
            className="text-sm text-purple-600 font-semibold cursor-pointer">
            ← Back To Products
          </p>

          <h2 className="text-3xl font-bold">{product.title}</h2>
          <p className="text-green-600 text-2xl font-semibold">
            <span className="text-gray-500 text-base font-normal ml-2">
              Price starts from:     
            </span>
             ${product.price_min} – {product.price_max}
          </p>

          {/* Product Meta */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-lg mb-2">Product Details</h3>
            <p>Product ID: {productId}</p>
            <p>Posted: {new Date(product.created_at).toLocaleDateString()}</p>
          </div>

          {/* Seller Info */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-lg mb-2">Seller Information</h3>
            <div className="flex items-center gap-4">
              <img src={product.seller_image} alt={product.seller_name}
                className="w-14 h-14 rounded-full" />
              <div>
                <p className="font-semibold">{product.seller_name}</p>
                <p className="text-sm text-gray-600">{product.email}</p>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Location: {product.location}
            </p>
            <p className="text-sm text-gray-600">
              Contact: {product.seller_contact}
            </p>
            <p className="text-sm text-gray-600">
              Status:{" "}
              <span className="font-semibold text-yellow-600">
                {product.status}
              </span>
            </p>
          </div>

          <button onClick={handleBidModalOpen}
            className="btn bg-purple-600 hover:bg-purple-700 text-white w-full mt-5">
              I Want Buy This Product
          </button>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-3">Product Description</h3>
        <div className="bg-gray-50 p-5 rounded-lg shadow-sm border">
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-semibold text-blue-600">Condition:</span>{" "}
            {product.condition} |{" "}
            <span className="font-semibold text-blue-600">Usage Time:</span>{" "}
            {product.usage}
          </p>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
        </div>
      </div>

      {/* Bids Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          Bids For This Product:{" "}
          <span className="text-purple-600">{bids?.length || 0}</span>
        </h3>

        <div className="overflow-x-auto rounded-lg shadow-sm border">

          <table className="table w-full">
            
            <thead className="bg-purple-50 text-gray-700">
              
              <tr>
                <th>#</th>
                <th>Buyer Name</th>
                <th>Bid Price</th>
                <th>Status</th>
              </tr>
            
            </thead>
            
            <tbody> 
              {bids.length > 0 ? (bids.map((bid, index) => (
                  <tr key={bid._id} className="hover:bg-gray-50">
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <img src={bid.buyer_image || "https://i.pravatar.cc/50"} alt={bid.buyer_name} className="w-10 h-10 rounded-full" />
                        
                        <div>
                          <p className="font-semibold">{bid.buyer_name}</p>
                          <p className="text-sm text-gray-500">
                            {bid.buyer_email}
                          </p>
                        </div>
                      </div>
                    </td>
                    
                    <td>${bid.bid_price}</td>
                    
                    <td>
                      <span
                        className={`px-3 py-1 text-sm rounded-full ${
                          bid.status === "confirmed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700" }`} >
                            {bid.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-gray-500 py-4">
                    No bids yet. Be the first to make an offer!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bid Modal */}
      <dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Place Your Bid</h3>
          <p className="py-2 text-sm text-gray-600">
            Offer something the seller can’t resist!
          </p>

          <form onSubmit={handleBidSubmit}>
            <div className="space-y-2">
              <label className="label text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full"
                defaultValue={user?.displayName}
                readOnly
              />

              <label className="label text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                defaultValue={user?.email}
                disabled
              />

              <label className="label text-sm font-medium">Your Offer</label>
              <input
                type="number"
                name="bid"
                placeholder="Enter your offer"
                className="input input-bordered w-full"
                required
              />

              <button className="btn btn-neutral w-full mt-3">
                Place Your Bid
              </button>
            </div>
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProductDetails;
