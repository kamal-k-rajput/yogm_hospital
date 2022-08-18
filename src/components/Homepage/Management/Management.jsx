import React from "react";
import { InPhotoText } from "../../ReUsableCode/InPhotoText";
import { Helmet } from "react-helmet-async";
export const Management = () => {
  return (
    <div>
      <Helmet>
        <title>Management </title>
        <meta
          name="description"
          content="Check our management."
        ></meta>
        <link rel="canonical" href="management"></link>
      </Helmet>
      <InPhotoText
        props={{
          name: "management",
          link: "management",
          heading: "MANAGEMENT",
        }}
      />
      This is management page
    </div>
  );
};
