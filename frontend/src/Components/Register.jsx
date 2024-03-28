import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPass, setCheckPass] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckPassword = (e) => {
    setCheckPass(e.target.value);
  };

  const handleSubmit = async () => {
    if (!name || !email || !password || !checkPass) {
      setError(true);
      return;
    } else if (password !== checkPass) {
      alert("Passwords do not match. Please retype your password correctly.");
      return;
    } else {
      const response = await fetch("https://mern-ecommerce-api-chi.vercel.app/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const result = await response.json();
      if (result.success) {
        console.log("Register result : ", result.message);
        localStorage.setItem("user", JSON.stringify(result.data));
        localStorage.setItem("token", JSON.stringify(result.token));
        setName("");
        setEmail("");
        setPassword("");
        setCheckPass("");
        navigate("/");
      }
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
                        Sign up
                      </p>

                      <form className="mb-5">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill text-center">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              onChange={handleName}
                              value={name}
                              placeholder="Your Name"
                            />
                            {error && !name && (
                              <span className="invalidData">
                                Enter valid name
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill text-center">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              onChange={handleEmail}
                              value={email}
                              required
                              placeholder="Your Email"
                            />
                            {error && !email && (
                              <span className="invalidData">
                                Enter valid email
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill text-center">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              onChange={handlePassword}
                              value={password}
                              placeholder="Password"
                            />
                            {error && !password && (
                              <span className="invalidData">
                                Enter valid password
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-5">
                          <i className="fa fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill text-center">
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              onChange={handleCheckPassword}
                              value={checkPass}
                              placeholder="Retype Your password"
                            />
                            {error && !checkPass && (
                              <span className="invalidData">
                                Retype your password
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mb-3">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                            onClick={handleSubmit}
                          >
                            Register
                          </button>
                        </div>
                        <div className="text-center">
                          <p>Already have an account?</p>
                          <Link to="/api/auth/login">Login</Link>
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

export default Register;
