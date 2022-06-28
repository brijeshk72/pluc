import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppLayout } from "../../components/Layout";
import SignupPersonalDetail from "./SignupPersonalDetail";
import { Formik, Field, Form } from "formik";

const Signup = () => {
  const navigate = useNavigate();
  const [isRegisterComplete, setIsRegisterComplete] = useState(true);
  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  return (
    <AppLayout>
      <>
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            user_name: "",
            user_info: {
              age: "",
              gender: "",
              phone: "",
              preferred_pronouns: "",
            },
          }}
          onSubmit={async (values) => {

            axios
              .post("https://api.staging.pluctv.online/api/v1/register", values)
              .then(function (response) {
                console.log(response.data);
                const { access_token, status, errors, data } = response.data;
                if (status === "200") {
                  localStorage.setItem("access_token", access_token);
                  localStorage.setItem("userData",JSON.stringify(data));
                  setSuccess("Register Success! Thank You!");
                  setTimeout(() => {
                    navigate("/dashboard", { replace: true });
                  }, 3000);
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
          }}
        >
          <Form>
            {isRegisterComplete ? (
              <main className="px-3">
                <div className="container-fluid bg-dark py-5 container-vh">
                  <div className="row">
                    <div className="col-auto signup-box text-white mx-auto">
                      <div className="row">
                        <div className="col-12">
                          <p>
                            Already have an account?
                            <Link
                              to="/"
                              className="bg-none border-0 px-1 text-decoration-none text-warning"
                            >
                              Log In
                            </Link>
                          </p>
                        </div>
                        <div className="col-12">
                          <h3>New to Pluc.TV?</h3>
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
                                  Email
                                </label>
                                <Field
                                  type="email"
                                  className="form-control bg-none border-secondary"
                                  name="email"
                                  id=""
                                  aria-describedby="helpId"
                                  placeholder=""
                                  autoComplete="off"
                                />
                                {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="row">
                                <div className="col-auto">
                                  <div className="custom-input">
                                    <label
                                      htmlFor=""
                                      className="form-label text-secondary"
                                    >
                                      Country
                                    </label>
                                    <select
                                      className="form-select bg-dark border-secondary"
                                      name="countryCode"
                                      id=""
                                      autoComplete="off"
                                    >
                                      <option value="+91">+91</option>
                                      <option value="">New Delhi</option>
                                      <option value="">Istanbul</option>
                                      <option value="">Jakarta</option>
                                    </select>
                                    {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="custom-input">
                                    <label
                                      htmlFor=""
                                      className="form-label text-secondary"
                                    >
                                      Phone Number
                                    </label>
                                    <Field
                                      type="tel"
                                      className="form-control bg-none border-secondary"
                                      name="user_info.phone"
                                      id=""
                                      aria-describedby="helpId"
                                      placeholder=""
                                      autoComplete="off"
                                    />
                                    {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
                                  </div>
                                </div>
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
                                <Field
                                  type="password"
                                  className="form-control bg-none border-secondary"
                                  name="password"
                                  id=""
                                  aria-describedby="helpId"
                                  placeholder=""
                                  autoComplete="off"
                                />
                                <button className="btn text-secondary position-absolute bottom-0 end-0">
                                  {/* <i className="bi bi-eye"></i> */}
                                  <i className="bi bi-eye-slash"></i>
                                </button>
                                {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
                              </div>
                            </div>

                            <div className="col-12 small text-end">
                              <div>
                                By Clicking the register button you agree to our
                                <a
                                  href="/login"
                                  className="bg-none border-0 px-1 text-decoration-none text-warning"
                                >
                                  Terms & Conditions
                                </a>
                              </div>
                            </div>

                            <div className="col-12">
                              <button
                                onClick={() => setIsRegisterComplete(false)}
                                type="button"
                                className="btn btn-warning w-100 py-2"
                              >
                                Register
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            ) : (
              <SignupPersonalDetail
                error={error}
                success={success}
                setIsRegisterComplete={setIsRegisterComplete}
              />
            )}
          </Form>
        </Formik>
      </>
    </AppLayout>
  );
};

export default Signup;
