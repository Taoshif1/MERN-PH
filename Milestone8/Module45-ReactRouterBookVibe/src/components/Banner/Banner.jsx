import React from "react";

import bookimage from "../../assets/books.jpg";

const Banner = () => {
    return (
        <div class=" bg-slate-800 ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={bookimage} />
                <div>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-4">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                    excepturi exercitationem quasi. In deleniti eaque aut repudiandae eta id nisi.
                    </p>
                    <button class="btn btn-success">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
