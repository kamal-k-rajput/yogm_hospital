import React from "react";
import GoToTop from "../../others/MoveToTop";
import { InPhotoText } from "../../ReUsableCode/InPhotoText";
import { Helmet } from "react-helmet-async";
export const Facilities = () => {
  return (
    <>
      <Helmet>
        <title>Facilities </title>
        <meta
          name="description"
          content="Facilities that are available in yogm hospital."
        ></meta>
        <link rel="canonical" href="facilities"></link>
      </Helmet>
      <InPhotoText
        props={{
          name: "Facilities",
          heading: "FACILITIES",
          link: "facilities",
        }}
      />
      <GoToTop />
    </>
  );
};
