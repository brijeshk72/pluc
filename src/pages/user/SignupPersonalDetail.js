import React from "react";
import { Field } from "formik";

const SignupPersonalDetail = ({error, success, setIsRegisterComplete}) => {
  return (
    <main className="px-3">
      <div className="container-fluid bg-dark py-5 container-vh">
        <div className="row">
          <div className="col-auto signup-box text-white mx-auto">
            <div className="row">
              <div className="col-12">
                <h3>Welcome! First things first...</h3>
              </div>
              <div className="col-12">
                <p>You can always change these later</p>
              </div>
              <div className="col-12">
                <div className="row gy-4">
                  <div className="col-sm-6">
                    <div className="custom-input">
                      <label htmlFor="" className="form-label text-secondary">
                        First Name
                      </label>
                      <Field
                        type="text"
                        className="form-control bg-none border-secondary"
                        name="first_name"
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                        autoComplete="off"
                      />
                      {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="custom-input">
                      <label htmlFor="" className="form-label text-secondary">
                        Last Name
                      </label>
                      <Field
                        type="text"
                        className="form-control bg-none border-secondary"
                        name="last_name"
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                        autoComplete="off"
                      />
                      {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="custom-input">
                      <label htmlFor="" className="form-label text-secondary">
                        Username
                      </label>
                      <Field
                        type="text"
                        className="form-control bg-none border-secondary"
                        name="user_name"
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                        autoComplete="off"
                      />
                      {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="custom-input">
                          <label htmlFor="" className="form-label text-secondary">
                            Date of Birth
                          </label>
                          <Field
                            type="date"
                            className="form-control bg-none border-secondary"
                            name="dob"
                            id=""
                            aria-describedby="helpId"
                            placeholder=""
                            autoComplete="off"
                          />
                          {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="custom-input">
                          <label htmlFor="" className="form-label text-secondary">
                            Sex
                          </label>
                          <Field
                                className="form-select bg-dark border-secondary"
                                name="user_info.gender"
                                id=""
                                autoComplete="off"
                                as="select"
                              >
                                <option value="select">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                              </Field>
                          {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  
                  <div className="col-sm-12">
                    <div className="custom-input">
                      <label htmlFor="" className="form-label text-secondary">
                        Preferred Pronouns
                      </label>
                      <Field
                        type="text"
                        className="form-control bg-none border-secondary"
                        name="user_info.preferred_pronouns"
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                        autoComplete="off"
                      />
                      {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
                    </div>
                  </div>
          
                  {error && <span className="text-danger">{error}</span>}
                  {success && <span className="text-success">{success}</span>}
                  <div className="col-12">
                  <button type="submit" className="btn btn-warning w-100 py-2">
                      Continue
                    </button>

                    <button onClick={setIsRegisterComplete} type="button" className="btn btn-warning w-100 py-2 mt-2">
                      Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignupPersonalDetail;
