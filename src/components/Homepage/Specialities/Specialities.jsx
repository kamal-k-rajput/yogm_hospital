import React from "react";
import GoToTop from "../../others/MoveToTop";
import { InPhotoText } from "../../ReUsableCode/InPhotoText";
import { Helmet } from "react-helmet-async";
export const Specialities = () => {
  return (
    <div>
      <Helmet>
        <title>Specialities </title>
        <meta
          name="description"
          content="Explore our hospital specialities."
        ></meta>
        <link rel="canonical" href="specialities"></link>
      </Helmet>
      <InPhotoText
        props={{
          heading: "OUR SPECIALTIES AND SUPER SPECIALTIES",
          link: "specialities",
          name: "Specialities",
        }}
      />
      <GoToTop />
    </div>
  );
};
