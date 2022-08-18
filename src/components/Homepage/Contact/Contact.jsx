import React from "react";
import { Link } from "react-router-dom";
import GoToTop from "../../others/MoveToTop";
import "./Contact.css";
import { InPhotoText } from "../../ReUsableCode/InPhotoText";
import Map from "./Map";
export const Contact = () => {
  return (
    <div>
      <InPhotoText
        props={{
          name: "Contact Us",
          link: "contact",
          heading: "Contact Us",
        }}
      />

      <div className="contact-us">
        <div>
          <h3>Connect With Us</h3>
          <p>Achhalda Road Bidhuna</p>
          <p>Auraiya Uttar Pradesh 206243</p>
          <p>9170597957, 9634946398</p>
        </div>
        <div>
          <h3>Connect With Us</h3>
          <p>Kachora Road</p>
          <p>Etwah Uttar Pradesh 206001</p>
          <p>
            <b>Under Construction</b>
          </p>
        </div>
      </div>
      <h3>We are happy to serve you.</h3>
      <div className="map">
        <Map props={{ height: "350px" }} />
      </div>
      <GoToTop />
    </div>
  );
};
