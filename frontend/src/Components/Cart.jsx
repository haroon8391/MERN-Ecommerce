import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { removeCart } from "./Redux/action";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const stripePromise = loadStripe(
    "pk_test_51NaGtHDpRq1L8I0l29nhPeAPzvvJU5LXQYZdUj44c7n1DKPXQ86sguKlwtRWwZL8Ea9nd9T0JFk8saH7fLRnXGz100iR8G4dRB"
  );

  const state = useSelector((state) => state.handleCart);
  const arr = state.cartItems;
  console.log(arr);

  const totalPrice = cartProducts.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  );

  useEffect(() => {
    if (arr.length > 0) {
      setName(arr[number].title);
    } else if (arr.length === 0) {
      setName("");
    }
    setNumber(arr.length);
    setCartProducts(arr);

    // eslint-disable-next-line
  }, [arr]);

  const removeProduct = (product) => {
    dispatch(removeCart(product));
  };

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch(
      "http://localhost:5000/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          items: [
            {
              id: 1,
              name: name,
              quantity: number,
              price: Math.floor(totalPrice),
            },
          ],
        }),
      }
    );

    if (response.status === 200) {
      const result = await response.json();
      console.log("Result is :", result);
      window.location = result.url;
    }
  };

  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {cartProducts.length} items</h5>
                </div>
                {cartProducts.map((item) => {
                  return (
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          <div
                            className="bg-image hover-overlay hover-zoom ripple rounded"
                            data-mdb-ripple-color="light"
                          >
                            <img
                              src={item.image}
                              style={{ height: "160px" }}
                              className="w-100"
                              alt="Blue Jeans Jacket"
                            />
                            <a href="/">
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(251, 251, 251, 0.2)",
                                }}
                              ></div>
                            </a>
                          </div>
                        </div>

                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          <p>
                            <strong>{item.title}</strong>
                          </p>
                          <p>
                            <strong>Category:</strong> {item.category}
                          </p>
                          <p className="text-start ">
                            <strong>Price: {item.price}</strong>
                          </p>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm me-1 mb-2"
                            data-mdb-toggle="tooltip"
                            title="Remove item"
                            onClick={() => removeProduct(item)}
                          >
                            <i className="fa fa-trash" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                      <hr className="my-4" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>{arr.length}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Free</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>{totalPrice}</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                    onClick={handleCheckout}
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
