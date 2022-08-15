import React from "react";
import "./PrivacyPolicy.css";
export const PrivacyPolicy = () => {
  return (
    <div className="privacy-outer-container">
      <h2>Privacy Policy</h2>
      <article className="privacy-inner-container">
        <p>
          The Yogm Hospital is committed to protecting your privacy. It is
          important to us that our customers retain their privacy while taking
          advantage of the services that we have to offer. To this end, we
          adhere to the following basic principles: We employ the highest levels
          of security to keep your personal information strictly confidential.
          We will not disclose or sell any of your personal information,
          including your name, address, age, sex or medical history to any third
          party without your permission.
        </p>
        <p>
          Although we use cookie technology to help users navigate our site
          efficiently we never use cookies to store personal information, such
          as credit card numbers. Please be aware, however, that our site
          contains link to other sites and that the privacy practices of other
          sites may differ from those of Yogm Hospital . If you have any
          additional questions or concerns regarding our privacy policies,
          please email us at{" "}
          <a style={{ color: "black" }} href="mailto:yogmhospital22@gmail.com">
            yogmhospital22@gmail.com
          </a>{" "}
          and we'll respond within 24 hours.
        </p>
        <h4>Our Privacy Policy explains:</h4>
        <p>
          What information we collect from you How we use that information Your
          privacy is of utmost importance to us . If you have any questions you
          can reach out to us at{" "}
          <a style={{ color: "black" }} href="mailto:yogmhospital22@gmail.com">
            yogmhospital22@gmail.com
          </a>{" "}
          Information we collect We collect information to provide better
          services to you, and we use it to improve our services as per your
          experience.
        </p>
        <p>We collect information in the following ways:-</p>

        <p>Information you give us: Name, phone number, email id.</p>
        <p>
          Information we automatically collect: Device & Hardware information -
          We collect device-specific information such as device make & model,
          network information, advertiser ID (to uniquely identify your device)
          and email address, if available Location information - We
          automatically capture your public IP address, and your geo coordinates
        </p>
      </article>
    </div>
  );
};
