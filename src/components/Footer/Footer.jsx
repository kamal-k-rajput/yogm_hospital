import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGlobe,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import Map from "../Homepage/Contact/Map";
export const Footer = () => {
  return (
    <footer className="footer-container align-left ">
      <div>
        <h3>Address</h3>
        <p>Achhalda Road Bidhuna</p>
        <p>Auraiya Uttar Pradesh 206243</p>
        <p>
          <FaPhoneAlt />
          9170597957, 9634946398
        </p>
        <p>
          <MdMailOutline />
          <a href="mailto: yogmhospital22@gmail.com">
            yogmhospital22@gmail.com
          </a>
        </p>
        <p></p>
      </div>
      <div>
        <Map props={{ height: "200px" }} />
      </div>
      <div>
        <h3 className="useful-links">Useful Links</h3>
        <div className="footer-vertical align-left footer-links">
          <Link to="contact">Contact</Link>

          <Link to="privacypolicy">Privacy Policy</Link>
          <Link to="Refundpolicy">Refund Policy</Link>
          <Link to="termsAndConditions">Terms &amp; Conditions </Link>
        </div>
      </div>
      <div>
        <h3>Quik Links</h3>
        <div className="footer-vertical align-left footer-links">
          <Link to="Specialities">Specialities</Link>
          <Link to="doctors">Doctors</Link>
          <Link to="Facilities"> Facilities</Link>
          <Link to="Gallery">Gallery</Link>
        </div>
      </div>
      <div>
        <h3>Follow Us</h3>
        <div className="footer-vertical align-left footer-links social-icons">
          <div className="footer-social-link">
            <FaInstagram />
            <a href="https://www.instagram.com/yogmhospital/">instagram</a>
          </div>
          <div className="footer-social-link">
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/yogm-hospital/">Linked In</a>
          </div>
          <div className="footer-social-link">
            <FaTwitter />
            <a href="https://twitter.com/YogmHospital">Twitter</a>
          </div>
          <div className="footer-social-link">
            <FaFacebook />
            <a href="https://www.facebook.com/yogmhospital">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
