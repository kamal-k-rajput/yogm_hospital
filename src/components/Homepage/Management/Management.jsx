import React from "react";
import { InPhotoText } from "../../ReUsableCode/InPhotoText";
import { Helmet } from "react-helmet-async";
import "./Management.css";
export const Management = () => {
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

    </>
  );
};
