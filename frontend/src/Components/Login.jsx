import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      if (result.success) {
        console.log(result.message);
        localStorage.setItem("user", JSON.stringify(result.data));
        localStorage.setItem("token", JSON.stringify(result.token));
        setEmail("");
        setPassword("");
        navigate("/");
      }
    } catch (err) {
      alert("Please Enter Correct Email and Password!");
    }
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div>
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Login
                      </p>

                      <form className="mb-5">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa fa-envelope-o fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              required
                              placeholder="Email"
                              onChange={handleEmail}
                              value={email}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              placeholder="Password"
                              onChange={handlePassword}
                              value={password}
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mb-3">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                            onClick={handleSubmit}
                          >
                            Login
                          </button>
                        </div>
                        <div className="text-center">
                          <p>Don't have an account?</p>
                          <Link to="/api/auth/register">Register</Link>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Error"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
