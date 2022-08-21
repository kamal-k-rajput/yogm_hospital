import React, { useState } from "react";
import "./Form.css";
import { Helmet } from "react-helmet-async";
import GoToTop from "../others/MoveToTop";
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
    appointmentdate: "",
    description: null,
  });
  const body = formData;
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  function submitForm(e) {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:5050/appointment", { ...formData })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // fetch("http://localhost:5050/appointment", {
    //   method: "POST",
    //   mode: "no-cors",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
    // console.log(formData);
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
        <form onSubmit={submitForm}>
          <div className="form-row">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleInputChange}
              required={true}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
              required={true}
            />
            <input
              type="number"
              placeholder="What App No."
              name="number"
              onChange={handleInputChange}
              required={true}
            />
          </div>
          <div className="form-row">
            <input
              type="number"
              placeholder="Age"
              name="age"
              onChange={handleInputChange}
              required={true}
            />
            <select onChange={handleInputChange} name="gender" required={true}>
              <option>Gender</option>
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
              <option value={"other"}>Prefer Not to Say</option>
            </select>
          </div>
          <div className="form-row">
            <input
              type="date"
              name="appointmentdate"
              id=""
              onChange={handleInputChange}
              required={true}
              placeholder="Appointment Date"
            />
            <input
              type="text"
              name="address"
              id="address"
              onChange={handleInputChange}
              placeholder="Address(optional)"
            />
          </div>
          <div>
            <input
              type="number"
              name="pincode"
              placeholder="Pincode"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-row">
            <textarea
              name="description"
              id="description"
              onChange={handleInputChange}
              placeholder="Describe Your Issue..."
            />
          </div>
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
