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
        </div>
      </div>
      <div>
        <h3>Follow Us</h3>
        <div className="display-flex-vertical align-left footer-links">
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
            <a href="https://www.yogmgroup.com">Facebook</a>
          </div>
        </div>
      </div>
      {/* <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
          width="200"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          title="map"
        >
        </iframe>
      </div> */}
      <div>
        {" "}
        <p style={{ color: "white" }}>
          <FaGlobe />
          <a href="https://kamalkishor.in">Contact developer</a>
        </p>
      </div>
    </footer>
  );
};

/* {(26.795139, 79.50075)} */
