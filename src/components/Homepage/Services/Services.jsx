import React from "react";
import { Service } from "./Service";
import "./Services.css";
import oxygen from "../../../assets/equipments/oxygen.jpeg";
import oxygen_small from "../../../assets/equipments/oxygen_small.jpeg";
import oxygen_medium from "../../../assets/equipments/oxygen_medium.jpeg";
import sign_hospital from "../../../assets/equipments/sign_hospital.jpeg";
import opd from "../../../assets/equipments/opd.jpeg";
import uniqid from "uniqid";
export const Services = () => {
  const data = [
    {
      img_link: {
        src: oxygen,
        small: oxygen_small,
        medium: oxygen_medium,
      },
      heading: "Emergency Services",
      discriptions:
        "We porvide 24x7 Oxygen, one staff nurse for critical patients. All time doctors availability.",
    },
    {
      img_link: {
        src: sign_hospital,
        small: sign_hospital,
        medium: sign_hospital,
      },
      heading: "ICU& HDU",
      discriptions:
        "Intensive care units (ICU) and high dependency units (HDU) are specialist wards providing intensive care (treatment and monitoring) for people who are in a critically ill or unstable condition.",
    },
    {
      img_link: {
        src: opd,
        small: opd,
        medium: opd,
      },
      heading: "OPD/IPD",
      discriptions:
        "Intensive care units (ICU) and high dependency units (HDU) are specialist wards providing intensive care (treatment and monitoring) for people who are in a critically ill or unstable condition.",
    },
  ];
  return (
    <div className="services-container">
      {data.map((el) => {
        return <Service data={{ el }} key={uniqid()}></Service>;
      })}
    </div>
  );
};
