import React from "react";
import { Service } from "./Service";
import "./Services.css";
export const Services = () => {
  const data = [
    {
      img_link: "https://www.thepanaceahospital.com/images/main-slider/icu.PNG",
      heading: "24x7 Oxygen facility available",
      discriptions:
        "Intensive care units (ICU) and high dependency units (HDU) are specialist wards providing intensive care (treatment and monitoring) for people who are in a critically ill or unstable condition.",
    },
    {
      img_link: "https://www.thepanaceahospital.com/images/main-slider/icu.PNG",
      heading: "ICU& HDU",
      discriptions:
        "Intensive care units (ICU) and high dependency units (HDU) are specialist wards providing intensive care (treatment and monitoring) for people who are in a critically ill or unstable condition.",
    },
    {
      img_link: "https://www.thepanaceahospital.com/images/main-slider/icu.PNG",
      heading: "ICU& HDU",
      discriptions:
        "Intensive care units (ICU) and high dependency units (HDU) are specialist wards providing intensive care (treatment and monitoring) for people who are in a critically ill or unstable condition.",
    },
  ];
  return (
    <div className="services-container display-flex-horizontal">
      {data.map((el) => {
        return <Service data={{ el }}></Service>;
      })}
    </div>
  );
};
