import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar-container display-flex-horizontal">
      <Link to="/">LOGO</Link>
      <nav>
        {/* <Link to="appointment">Appointment</Link> */}
        <Link to="doctors">Doctors</Link>
        <Link to="facilities">Facilities</Link>
        <Link to="specialities">Specialites</Link>
        <Link to="gallery">Gallery</Link>
        <Link to="management">Management</Link>
        <Link to="contact">Contact</Link>
        {/* <Link to="admin">Admin</Link> */}
      </nav>
    </div>
  );
};
