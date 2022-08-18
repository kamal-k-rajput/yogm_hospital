import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import logo from "../../../assets/logo/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavbarLinks = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" className="navbar-logo" title={"logo"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              {/* <Nav.Link href="appointment">Appointment</Nav.Link> */}

              <Nav.Link href="doctors">Doctors</Nav.Link>
              <Nav.Link href="facilities">Facilities</Nav.Link>

              <Nav.Link href="specialities">Specialites</Nav.Link>
              <Nav.Link href="gallery">Gallery</Nav.Link>
              <Nav.Link href="management">Management</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
