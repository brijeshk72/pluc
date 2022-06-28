import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppLayout } from "../../components/Layout";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signin, setSignin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSignin({ ...signin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Api Call Here

    axios
      .post("https://api.staging.pluctv.online/api/v1/login", signin)
      .then(function (response) {
        console.log(response.data);
        const { access_token, status, errors, data } = response.data;
        if (status === "200") {
          
          localStorage.setItem("access_token", access_token);
          localStorage.setItem("userData", JSON.stringify(data));
          setSuccess("Login Success! Thank You!");
          setTimeout(() => {
            navigate("/dashboard", { replace: true });
          }, 2000);

        } else {

          let firstError = Object.entries(errors).map(([key, value]) => {
            return value[0];
          })[0];

          setError(firstError);
          setTimeout(() => {
            setError("");
          }, 3000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <AppLayout>
      <>
        <main className="px-3">
          <div className="container-fluid bg-dark py-5 container-vh">
            <div className="row">
              <div className="col-auto signup-box text-white mx-auto">
                <div className="row">
                  <div className="col-12">
                    <p>
                      Don't have an account?
                      <Link
                        to="/signup"
                        className="bg-none border-0 px-1 text-decoration-none text-warning"
                      >
                        Register
                      </Link>
                    </p>
                  </div>
                  <div className="col-12">
                    <h3>Welcome Back to Pluc.TV?</h3>
                  </div>
                  <div className="col-12 py-3">
                    <div className="row align-items-center">
                      <div className="col">
                        <div className="border"></div>
                      </div>
                      <div className="col-auto">Or</div>
                      <div className="col">
                        <div className="border"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row gy-4">
                      <div className="col-12">
                        <div className="custom-input">
                          <label
                            htmlFor=""
                            className="form-label text-secondary"
                          >
                            Email or Phone Number
                          </label>
                          <input
                            type="email"
                            className="form-control bg-none border-secondary"
                            name="email"
                            id=""
                            aria-describedby="helpId"
                            placeholder=""
                            autoComplete="off"
                            onChange={handleChange}
                          />
                          {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="custom-input">
                          <label
                            htmlFor=""
                            className="form-label text-secondary"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control bg-none border-secondary"
                            name="password"
                            id=""
                            aria-describedby="helpId"
                            placeholder=""
                            autoComplete="off"
                            onChange={handleChange}
                          />
                          <button className="btn text-secondary position-absolute bottom-0 end-0">
                            {/* <i className="bi bi-eye"></i> */}
                            <i className="bi bi-eye-slash"></i>
                          </button>
                          {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input rounded-circle bg-dark border-secondary"
                            type="checkbox"
                            value=""
                            id=""
                          />
                          <label className="form-check-label" htmlFor="">
                            Remember me
                          </label>
                        </div>
                      </div>
                      {error && <span className="text-danger">{error}</span>}
                      {success && (
                        <span className="text-success">{success}</span>
                      )}

                      <div className="col-12">
                        <button
                          onClick={handleSubmit}
                          className="btn btn-warning w-100 py-2"
                        >
                          Continue
                        </button>
                      </div>

                      <div className="col-12 text-center">
                        <div>
                          <a
                            href="/login"
                            className="bg-none border-0 px-1 text-decoration-none text-warning"
                          >
                            Forgot Password
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    </AppLayout>
  );
};

export default Login;
