import React from "react";
import { InPhotoText } from "../../ReUsableCode/InPhotoText";
import drYogeshImg from "../../../assets/doctorsImages/dryogesh2.jpg";
import drJiutImg from "../../../assets/doctorsImages/drjiut.jpeg";
import drAjayImg from "../../../assets/doctorsImages/drajay.jpeg";
import drSaumyaImg from "../../../assets/doctorsImages/drsaumya2.jpg";
import "./Doctors.css";
import uniqid from "uniqid";
import { Helmet } from "react-helmet-async";
import GoToTop from "../../others/MoveToTop";
export const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Yogesh Rajput",
      degree: "M.B.B.S. Gen. Physician",
      img: drYogeshImg,
    },
    {
      name: "Dr. Saumya Rajput",
      degree: "M.B.B.S. M.D. Pathology",
      img: drSaumyaImg,
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
      <Helmet>
        <title>Doctors </title>
        <meta name="description" content="Meet our doctors."></meta>
        <link rel="canonical" href="doctors"></link>
      </Helmet>
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
              <img src={doctor.img} alt={doctor.name} title={doctor.name} />
              <p className="doctors-name">{doctor.name}</p>
              <p className="doctors-degree">{doctor.degree}</p>
            </div>
          );
        })}
      </div>
      <h1>Paramedical Staff</h1>
      <GoToTop />
    </div>
  );
};
