import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "./Redux/action";

const ProductDetails = () => {
  const [prod, setProd] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();

  const addProduct = (prod) => {
    dispatch(addCart(prod));
  };

  const getProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const result = await response.json();
    setProd(result);
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={prod.image} alt="loading..." height="400px" width="400px" />
        </div>
        <div className="col-md-6">
          <h3 className="text-uppercase text-black-50">{prod.category}</h3>
          <h1 className="display-6">{prod.title}</h1>
          <p className="lead fw-bolder">
            Rating {prod.rating && prod.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {prod.price}</h3>
          <p className="lead">{prod.description}</p>
          <Link to="/cart">
            <button
              className="btn btn-outline-dark"
              onClick={() => {
                addProduct(prod);
              }}
            >
              Add to Cart
            </button>
          </Link>
          <Link to="/cart" className="btn btn-dark mx-2">
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
