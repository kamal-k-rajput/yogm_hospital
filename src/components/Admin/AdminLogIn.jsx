import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import "./AdminLogin.css";
export const AdminLogIn = () => {
  const dispatch = useDispatch();
  const [moderator, setModerator] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function handleChange(e) {
    e.preventDefault();
    console.log(formData);
    const { name, value } = e.target;
    setFormData((formData) => {
      return { ...formData, [name]: value };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5050/admin/login", formData)
      .then((res) => {
        if (res.statusText === "OK") {
          localStorage.setItem(
            "admin_auth_bearer_token",
            JSON.stringify(res.data.token)
          );
          dispatch({ type: "loggedin", payload: res.data.moderator });
          setModerator(res.data.moderator);
        }
      })
      .catch((err) => setError(err.message))
      .then(() => {
        console.log(localStorage.getItem("admin_auth_bearer_token"));
      });
  }
  return (
    <>
      <h1>Admin Panel </h1>
      {error && <p>{error.message}</p>}
      {moderator && <Navigate to="/admindashboard" replace={true} />}
      <form className="login-form-container" onSubmit={handleSubmit}>
        <label>
          <span> Enter Email</span>
          <input
            type="email"
            placeholder="Enter email "
            name="email"
            required
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Enter Password</span>
          <input
            type="password"
            name="password"
            placeholder="enter password"
            required
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="LOG IN" />
      </form>
    </>
  );
};
