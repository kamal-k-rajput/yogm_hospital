import React from "react";
import { Link } from "react-router-dom";
import "./ButtonAppointment.css";
import { useSelector, useDispatch } from "react-redux";
// import store from "../../../store/store";
export const ButtonAppointment = () => {
  const btn_status = useSelector((store) => store.appointmentButton);
  const dispatch = useDispatch();
  return (
    <span
      style={{ display: btn_status }}
      onClick={(e) => {
        e.preventDefault();
        dispatch({
          type: "appointment-btn-status",
          payload: "none",
        });
      }}
    >
      <Link to="/appointment" className="appointment-button">
        Book Appointment
      </Link>
    </span>
  );
};
