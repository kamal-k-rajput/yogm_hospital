import React from "react";
import "./SuperSpecialityServices.css";

export const SuperSpecialityServices = () => {
  const data = [
    {
      heading: "24/7 Emergency Services",
      details:
        "24×7 support of fully equipped Operation Theater, Pathology & Radiology services with Central Line Kits, Tracheotomy Sets, Intubation Sets, and ECG .",
      img_link:
        "https://images.unsplash.com/photo-1513224502586-d1e602410265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
    },
    {
      heading: "24/7 Emergency Services",
      details:
        "24×7 support of fully equipped Operation Theater, Pathology & Radiology services with Central Line Kits, Tracheotomy Sets, Intubation Sets, and ECG .",
      img_link:
        "https://images.unsplash.com/photo-1513224502586-d1e602410265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
    },
    {
      heading: "24/7 Emergency Services",
      details:
        "24×7 support of fully equipped Operation Theater, Pathology & Radiology services with Central Line Kits, Tracheotomy Sets, Intubation Sets, and ECG .",
      img_link:
        "https://images.unsplash.com/photo-1513224502586-d1e602410265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
    },
    {
      heading: "24/7 Emergency Services",
      details:
        "24×7 support of fully equipped Operation Theater, Pathology & Radiology services with Central Line Kits, Tracheotomy Sets, Intubation Sets, and ECG .",
      img_link:
        "https://images.unsplash.com/photo-1513224502586-d1e602410265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
    },
    {
      heading: "24/7 Emergency Services",
      details:
        "24×7 support of fully equipped Operation Theater, Pathology & Radiology services with Central Line Kits, Tracheotomy Sets, Intubation Sets, and ECG .",
      img_link:
        "https://images.unsplash.com/photo-1513224502586-d1e602410265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
    },
  ];
  return (
    <div>
      <h3>WE CARE ABOUT PATIENT</h3>
      <h2>OUR OUTSTANDING SERVICES</h2>
      <div className="speciality-services-container">
        {data.map((el) => {
          return (
            <article className="display-flex-horizontal ">
              <div className="speciality-icon">
                <img src={el.img_link} alt="medical equipment" />
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
