import React from "react";
import { InPhotoText } from "../../ReUsableCode/InPhotoText";
import drYogeshImg from "../../../assets/doctorsImages/dryogesh.jpeg";
import drJiutImg from "../../../assets/doctorsImages/drjiut.jpeg";
import drAjayImg from "../../../assets/doctorsImages/drajay.jpeg";
import "./Doctors.css";
import uniqid from "uniqid";
import GoToTop from "../../others/MoveToTop";
export const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Yogesh Rajput",
      degree: "M.B.B.S. Gen. Physician",
      img: drYogeshImg,
    },
    {
      name: "Dr. Jiut Yadav",
      degree: "M.B.B.S. Gen. Physician",
      img: drJiutImg,
    },
    {
      name: "Dr. Ajay Kumar",
      degree: "M.B.B.S. M.S. Gen. Surgery",
      img: drAjayImg,
    },
  ];
  return (
    <div id="doctors">
      <InPhotoText
        props={{
          name: "Doctors",
          link: "doctors",
          heading: "DOCTORS",
        }}
      />
      <p className="doctor-center-line">
        Finally this is our team of doctors, paramedical staff and technicians.{" "}
      </p>
      <h1>DOCTORS</h1>
      <div className="doctors-container">
        {doctors.map((doctor) => {
          return (
            <div className="doctors-details" key={uniqid()}>
              <img src={doctor.img} alt={doctor.name} />
              <p className="doctors-name">{doctor.name}</p>
              <p className="doctors-degree">{doctor.degree}</p>
            </div>
          );
        })}
      </div>
      <h1>Paramedical Staff</h1>
      <GoToTop/>
    </div>
  );
};
