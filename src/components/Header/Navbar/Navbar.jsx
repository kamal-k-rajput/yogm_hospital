import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../assets/logo/logo.png";

import { ImMenu3 } from "react-icons/im";
import { NavLinks } from "./NavLinks";

export const Navbar = () => {
  const [hiddenLink, setHiddenLink] = useState(false);
  return (
    <div>
      <div className="navbar-container">
        <Link to="/">
          <img src={logo} alt="logo" className="logo-navbar" />
        </Link>
        <span className="icon-for-nav-links">
          <ImMenu3
            onClick={(e) => {
              e.preventDefault();
              setHiddenLink(!hiddenLink);
            }}
          >
            {" "}
          </ImMenu3>
        </span>

        <nav className="nav-link-container">
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
      <div>{hiddenLink ? <NavLinks /> : ""}</div>
    </div>
  );
};
