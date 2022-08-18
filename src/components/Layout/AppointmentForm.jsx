import React, { useState } from "react";
import "./Form.css";
import { Helmet } from "react-helmet-async";
import GoToTop from "../others/MoveToTop";
export const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    age: "",
    gender: "",
    address: "",
    appointmentdate: "",
    description: "",
  });
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  function submitForm(e) {
    e.preventDefault();
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
        <form action={submitForm}>
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
            />
            <input
              type="text"
              name="address"
              id="address"
              onChange={handleInputChange}
              placeholder="Address(optional)"
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
