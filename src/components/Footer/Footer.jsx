import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
export const Footer = () => {
  return (
    <footer className="footer-container display-flex-horizontal align-left ">
      <div>
        <h3>Address</h3>
        <p>Achalda Road Bidhuna</p>
        <p>Auraiya Uttar Pradesh 206243</p>
        <p>9170597957, 9634946398</p>
        <p>
          <a href="mailto: yogmhospital22@gmail.com">
            yogmhospital22@gmail.com
          </a>
        </p>
        <p></p>
      </div>
      <div>
        <h3 className="useful-links">Useful Links</h3>
        <div className="display-flex-vertical align-left footer-links">
          <Link to="contact">Contact</Link>
          <Link to="Gallery">Gallery</Link>
          <Link to="privacypolicy">Privacy Policy</Link>
          <Link to="Refundpolicy">Refund Policy</Link>
          <Link to="termsAndConditions">Terms &amp; Conditions </Link>
        </div>
      </div>
      <div>
        <h3>Quik Links</h3>
        <div className="display-flex-vertical align-left footer-links">
          <Link to="Specialities">Specialities</Link>
          <Link to="doctors">Doctors</Link>
          <Link to="Facilities"> Facilities</Link>
          {/* <Link></Link> */}
        </div>
      </div>
      <div>
        <h3>Follow Us</h3>
        <div className="display-flex-vertical align-left footer-links">
          <a href="instagram">instagram</a>
          <a href="linkedIn">Linked In</a>
          <a href="twitter">Twitter</a>
          <a href="facebook">Facebook</a>
        </div>
      </div>
    </footer>
  );
};
