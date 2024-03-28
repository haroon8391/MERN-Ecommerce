import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    setProducts(result);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleCategory = (cat) => {
    setCategory(cat);
  };

  const filterProduct = (products) => {
    if (category === "All") {
      return products;
    } else {
      return products.filter((prod) => {
        return prod.category === category;
      });
    }
  };

  return (
    <div>
      <div>
        <h1
          style={{
            marginTop: "80px",
            textAlign: "center",
            fontSize: "3.5rem",
            fontWeight: "bolder",
          }}
        >
          Latest Products
        </h1>
        <hr />
      </div>
      <div className="text-center" style={{ margin: "60px 0px 90px 0px" }}>
        <button
          type="button"
          className="btn btn-info mx-2"
          onClick={() => {
            handleCategory("All");
          }}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-info mx-2"
          onClick={() => {
            handleCategory("men's clothing");
          }}
        >
          Men's Clothing
        </button>
        <button
          type="button"
          className="btn btn-info mx-2"
          onClick={() => {
            handleCategory("women's clothing");
          }}
        >
          Women's Clothing
        </button>
        <button
          type="button"
          className="btn btn-info mx-2"
          onClick={() => {
            handleCategory("electronics");
          }}
        >
          Electronics
        </button>
        <button
          type="button"
          className="btn btn-info mx-2"
          onClick={() => {
            handleCategory("jewelery");
          }}
        >
          Jewelery
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          textAlign: "center",
          marginLeft: "100px",
        }}
      >
        {products &&
          products.length > 0 &&
          filterProduct(products).map((item) => (
            <div
              key={item.id}
              className="card"
              style={{
                width: "18rem",
                border: "1px solid #ccc",
                marginBottom: "100px",
              }}
            >
              <img
                className="card-img-top"
                src={item.image}
                alt="error"
                style={{ height: "300px" }}
              />
              <hr />
              <div className="card-body">
                <h5 className="card-title">{item.title.substring(0, 17)}...</h5>
                <p className="card-text">
                  {item.description.substring(0, 108)}...
                </p>
                <NavLink
                  to={`/products/${item.id}`}
                  className="btn btn-outline-dark"
                >
                  Show Details
                </NavLink>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
