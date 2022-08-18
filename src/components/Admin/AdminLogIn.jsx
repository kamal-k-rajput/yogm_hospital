import React from "react";
import "./AdminLogin.css";
export const AdminLogIn = () => {
  return (
    <>
      <h1>Admin log In </h1>
      <form className="login-form-container">
        <label>
          Enter Id:
          <input type="text" />
        </label>
        <label>
          Enter Password
          <input type="password" />
        </label>
      </form>
    </>
  );
};
