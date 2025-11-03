import { use, useContext, useRef } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const ProductDetails = () => {
  const {_id: productId}  = useLoaderData();
  const bidModalRef = useRef(null);
  const { user } = use(AuthContext);

  // console.log("Loaded Products: ",product);  // product = _id
  // console.log("User ",user);

  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  }

  const handleBidSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const bid = e.target.bid.value;

    console.log("Name email bid -> ", productId, name, email, bid);

    const newBid = {
      product: productId,
      buyer_name: name,
      buyer_email: email,
      bid_price: bid,
      status: 'pending'
    }

    fetch('http://localhost:3000/bids', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newBid)
    })
    .then(res => res.json())
    .then(data =>{
      console.log('After placing bid: ', data);
    })
    .catch(err => {
      console.log(err);
    })

  }

  return (
    <div>

      {/* product info */}

      <div>
        <div></div>

        <div>

          <button 
            onClick={handleBidModalOpen}
            className="btn btn-primary">
              I want to buy this product!
          </button>


          <dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
              <h3 class="text-lg font-bold">Give the best offer!</h3>
              <p class="py-4">
                Offer something seller can not resist
              </p>

              {/* form */}
              <form onSubmit={handleBidSubmit}>
                <fieldset class="fieldset">
                  
                  <label class="label">Name</label>
                  <input type="text" class="input" name="name" defaultValue=
                  {user.displayName} readOnly />
                  
                  <label class="label">Email</label>
                  <input type="email" class="input" name="email" defaultValue={user.email} disabled />
                  
                  <label class="label">Bid</label>
                  <input type="number" class="input" name="bid" placeholder=" Your Bid" />
          
                  <button class="btn btn-neutral mt-4">Place Your Bid</button>
                
                </fieldset>
              </form>

              <div class="modal-action">
                <form method="dialog">
                  {/* <!-- if there is a button in form, it will close the modal --> */}
                  <button class="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>

        </div>
      </div>

      {/* bids for this product  */}
    </div>
  );
};

export default ProductDetails;
