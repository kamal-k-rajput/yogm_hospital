import React from "react";
import { Link } from "react-router-dom";
export const NavLinks = ({ props }) => {
  const { hiddenLink, setHiddenLink } = props;
  function collapseMenu(e) {
    e.preventDefault();
    // setHiddenLink(!hiddenLink);
  }
  return (
    <nav className="nav-link-vertical">
      {/* <Link to="appointment">Appointment</Link> */}
      <Link to="doctors">
        <span onClick={collapseMenu}>Doctors</span>
      </Link>
      <Link to="facilities" onClick={collapseMenu}>
        Facilities
      </Link>
      <Link to="specialities" onClick={collapseMenu}>
        Specialites
      </Link>
      <Link to="gallery" onClick={collapseMenu}>
        Gallery
      </Link>
      <Link to="management" onClick={collapseMenu}>
        Management
      </Link>
      <Link to="contact" onClick={collapseMenu}>
        Contact
      </Link>
      {/* <Link to="admin">Admin</Link> */}
    </nav>
  );
};
