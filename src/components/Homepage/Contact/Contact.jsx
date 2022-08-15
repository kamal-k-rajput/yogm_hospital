import React from "react";
import { Link } from "react-router-dom";
import GoToTop from "../../others/MoveToTop";
import "./Contact.css";
import Map from "./Map";
export const Contact = () => {
  return (
    <div>
      <section className="contact-us">
        <div>
          <div>CONTACT US</div>
          <Link to="/">Home </Link>
          {" > "}
          <Link to="/contact">Contact</Link>
        </div>
      </section>
      <div className="connect-us display-flex-horizontal">
        <div>
          <h3>Connect With Us</h3>
          <p>Achhalda Road Bidhuna</p>
          <p>Auraiya Uttar Pradesh 206243</p>
          <p>9170597957, 9634946398</p>
        </div>
        <div>
          <h3>Connect With Us</h3>
          <p>Achhalda Road Bidhuna</p>
          <p>Auraiya Uttar Pradesh 206243</p>
          <p>9170597957, 9634946398</p>
        </div>
        <div>
          <h3>Connect With Us</h3>
          <p>Achhalda Road Bidhuna</p>
          <p>Auraiya Uttar Pradesh 206243</p>
          <p>9170597957, 9634946398</p>
        </div>
      </div>
      <div className="map">
        <Map props={{ height: "350px" }} />
      </div>
      <GoToTop />
    </div>
  );
};
