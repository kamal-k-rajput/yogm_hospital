import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import GoToTop from "../others/MoveToTop";
import "./Form.css";
const axios = require("axios").default;
export const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: null,
    email: null,
    mobileNumber: "",
    age: "",
    gender: "",
    address: null,
    pincode: null,
  });
  //

  //
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // if (name === "appointmentdate") {
    //   var selectedText = value;
    //   var selectedDate = new Date(selectedText);
    //   console.log("value", value.split("-"));
    //   var now = new Date();
    //   if (selectedDate < now) {
    //     return alert("Date must be in the future");
    //   }
    // }

    setFormData({ ...formData, [name]: value });
  };
  function submitForm(e) {
    e.preventDefault();

    if (formData.pincode.length !== 6) {
      return alert("pin code is not correct");
    }
    axios
      .post("http://localhost:5050/appointment", { ...formData })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <Helmet>
        <title>Appointment </title>
        <meta name="description" content="Book online appointment."></meta>
        <link rel="canonical" href="appointment"></link>
      </Helmet>
      <div className="form-container">
        <h2>Book Online Appointment</h2>
        <div className="response-api"></div>
        <form onSubmit={submitForm}>
          <div className="form-row">
            <label>
              <div> First Name</div>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleInputChange}
                required={true}
              />
            </label>
            <label>
              <div> Last Name</div>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              <div> Email Address</div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleInputChange}
                required={true}
              />
            </label>
            <label>
              <div> Mobile Number</div>
              <input
                inputMode="numeric"
                placeholder="What App No. Without 0 "
                name="mobileNumber"
                onChange={handleInputChange}
                required={true}
                pattern="^[6789]\d{9}$"
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              <div> Age</div>
              <input
                type="number"
                placeholder="Age"
                name="age"
                onChange={handleInputChange}
                required={true}
                min="1"
                max={110}
              />
            </label>
            <label>
              <div> Gender </div>
              <select
                onChange={handleInputChange}
                name="gender"
                required={true}
              >
                <option>Gender</option>
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
                <option value={"other"}>Prefer Not to Say</option>
              </select>
            </label>
          </div>
          <div className="form-row">
            <label>
              <div> Appointment Date</div>
              <input
                type="date"
                name="appointmentdate"
                id=""
                onChange={handleInputChange}
                required={true}
                placeholder="Appointment Date"
                min={Date.now()}
                // onInvalid={`${this.setCustomValidity("Enter User Name Here")}`}
              />
            </label>
            <label>
              <div> Address</div>
              <input
                type="text"
                name="address"
                id="address"
                onChange={handleInputChange}
                placeholder="Address(optional)"
              />
            </label>
          </div>
          <div className="text-area-container">
            <label>
              <div> Pin Code</div>
              <input
                inputMode="numeric"
                name="pincode"
                placeholder="Pincode"
                onChange={handleInputChange}
              />
            </label>
            {/* <label>
              <div>Your Issue</div>
              <textarea
                name="description"
                id="description"
                onChange={handleInputChange}
                placeholder="Describe Your Issue..."
              />
            </label> */}
          </div>
          {/* <div className="form-row"></div> */}
          <input
            type="submit"
            value="Confirm Appointment"
            className="submit-button"
          />
        </form>
      </div>
      <GoToTop />
    </>
  );
};
