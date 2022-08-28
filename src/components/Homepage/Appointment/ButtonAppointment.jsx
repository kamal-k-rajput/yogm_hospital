import React from "react";
import { Link } from "react-router-dom";
import "./ButtonAppointment.css";
import { useSelector, useDispatch } from "react-redux";
// import store from "../../../store/store";
export const ButtonAppointment = () => {
  const btn_status = useSelector((store) => {
    return store.appointmentButton;
  });
  const dispatch = useDispatch();
  console.log(btn_status, "btn_status");
  return (
    <span
      style={{ display: btn_status }}
      onClick={(e) => {
        e.preventDefault();
        dispatch({
          type: "appointment-btn-status",
          payload: "none",
        });
        console.log("buttonclicked");
        console.log(btn_status, "btn_status");
      }}
    >
      <Link to="/appointment" className="appointment-button">
        Book Appointment
      </Link>
    </span>
  );
};
