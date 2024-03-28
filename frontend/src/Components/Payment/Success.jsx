import React from "react";
import success from "./success.png";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 min-vh-100 font-raleway bg-light">
      <div className="container rounded d-flex flex-column align-items-center">
        <span className="text-success display-4">Payment successful</span>
        <span className="text-warning text-center mt-4 lead font-weight-bold">
          Your order is in our system
        </span>
        <div className="d-flex justify-content-center align-items-center my-5">
          <img src={success} alt="error" style={{ width: "200px" }} />
        </div>
        <div className="my-3">
          <Link to="/" className="btn btn-primary btn-lg">
            Back to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
