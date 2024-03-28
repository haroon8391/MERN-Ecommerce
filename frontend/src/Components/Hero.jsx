import React from "react";
import AllProducts from "./AllProducts";

const Hero = () => {
  return (
    <div className="">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=435&q=80"
              className="d-block w-100"
              alt="Error"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Welcome to Shopify</h1>
              <h5>Your One-Stop Shop for All Your Shopping Needs.</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=435&q=80"
              className="d-block w-100"
              alt="Error"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Experience hassle-free shopping</h1>
              <h5>
                Stay ahead of the curve with our regular updates on new
                arrivals, flash sales, and seasonal promotions.
              </h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=435&q=80"
              className="d-block w-100"
              alt="Error"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Shop with confidence</h1>
              <h5>
                Join our growing community of satisfied shoppers and elevate
                your online shopping experience.
              </h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <AllProducts />
    </div>
  );
};

export default Hero;
