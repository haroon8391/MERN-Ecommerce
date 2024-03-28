import React from "react";
import { Link } from "react-router-dom";
import cancel from "./cancel.png";

const Error = () => {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 min-vh-100 font-raleway bg-light">
      <div className="container rounded d-flex flex-column align-items-center">
        <span className="text-success display-4">Something went wrong!</span>
        <span className="text-warning text-center mt-4 lead font-weight-bold">
          Please retry after sometime
        </span>
        <div className="d-flex justify-content-end align-items-center my-5">
          <img src={cancel} alt="error" style={{ width: "200px" }} />
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

export default Error;
