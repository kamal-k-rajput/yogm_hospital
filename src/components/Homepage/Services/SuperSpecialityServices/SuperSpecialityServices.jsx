import React from "react";
import "./SuperSpecialityServices.css";
import uniqid from "uniqid";
import dispensary from "../../../../assets/dispensary/dispensary.jpg";
import privateward from "../../../../assets/wards/privateWard/privateward.jpg";
import generalward from "../../../../assets/wards/GeneralWard/generalward.jpg";
import cctv from "../../../../assets/wards/cctv.jpg";
export const SuperSpecialityServices = () => {
  const data = [
    {
      heading: "24/7 Emergency Services",
      details:
        "24×7 support of fully equipped Pathology services all time oxygen facility with ECG .",
      img_link:
        "https://images.unsplash.com/photo-1513224502586-d1e602410265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
    },
    {
      heading: "Private ward available",
      details:
        "Private ward at pocket friendly price with 24x7 light facility. One care taker always available.",
      img_link: privateward,
    },
    {
      heading: "General Ward Available",
      details:
        "24×7 electricity available, paramedical staff also available at nights.",
      img_link: generalward,
    },
    {
      heading: "Integrated Dispensary Always Open",
      details:
        "24×7 support of fully equipped dispensary with computer generated bills.",
      img_link: dispensary,
    },
    {
      heading: "Full Hospital under CCTV",
      details:
        "24×7 CCTV Camera working at every room and every patient under the care unit.",
      img_link: cctv,
    },
  ];
  return (
    <div>
      <h3>WE CARE ABOUT PATIENT</h3>
      <h2>OUR OUTSTANDING SERVICES</h2>
      <div className="speciality-services-container">
        {data.map((el) => {
          return (
            <article className="speciality-service" key={uniqid()}>
              <div className="speciality-icon">
                <img
                  src={el.img_link}
                  alt="medical equipment"
                  title={"medical equipment"}
                />
              </div>
              <div className="speciality-content">
                <h3>{el.heading}</h3>
                <div>
                  <p>{el.details}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
