import React from "react";
import { InPhotoText } from "../../ReUsableCode/InPhotoText";
import { Helmet } from "react-helmet-async";
import yashrajImg from "../../../assets/management/yashraj.jpg";
import harbhanImg from "../../../assets/doctorsImages/drjiut.jpeg";
import pratibhaImg from "../../../assets/management/pratibha.png";
import dryogeshImg from "../../../assets/management/dryogesh.jpeg";
import uniqid from "uniqid";
import "./Management.css";
export const Management = () => {
  const management = [
    {
      name: "Yashraj Rajput",
      degree: "B.M.L.T.",
      img: yashrajImg,
      post: "C.E.O.",
    },
    {
      name: "Pratibha ",
      degree: "Advocate",
      img: pratibhaImg,
      post: "Administrator",
    },
    {
      name: "Dr. Yogesh Rajput",
      degree: "M.B.B.S. Gen. Physician",
      img: dryogeshImg,
      post: "Administrator",
    },
    {
      name: "Harbhan Rajput",
      degree: "Advocate",
      imh: harbhanImg,
      post: "Managing Director",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Management </title>
        <meta name="description" content="Check our management."></meta>
        <link rel="canonical" href="management"></link>
      </Helmet>
      <InPhotoText
        props={{
          name: "management",
          link: "management",
          heading: "MANAGEMENT",
        }}
      />
      <h2>Our Management</h2>
      <div className="management-container">
        {management.map((person) => {
          return (
            <div className="management-details" key={uniqid()}>
              <img src={person.img} alt={person.name} title={person.name} />
              <p>{person.degree}</p>
              <p className="management-name">{person.name}</p>
              <p className="management-post">{person.post}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
