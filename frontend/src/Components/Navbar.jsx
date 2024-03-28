import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Navbar = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state.handleCart);

  const auth = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div style={{ position: "sticky", top: "0", zIndex: "100" }}>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ height: "65px" }}
      >
        <div className="container-fluid">
          <div
            className="navbar-brand"
            style={{
              fontSize: "1.8rem",
              textAlign: "center",
              marginRight: "50px",
            }}
          >
            BuyNow
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link
                  className="nav-link active navLink"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link active navLink"
                  aria-current="page"
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active navLink"
                  aria-current="page"
                  to="/cart"
                >
                  Cart ({state.cartItems.length})
                </Link>
              </li>
            </ul>
            {auth ? (
              <form className="d-flex" role="search">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </form>
            ) : (
              <>
                <Link to="/api/auth/login">
                  <button className="btn btn-success mx-2" type="submit">
                    Login
                  </button>
                </Link>
                <Link to="/api/auth/register">
                  <button className="btn btn-success mx-2" type="submit">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
