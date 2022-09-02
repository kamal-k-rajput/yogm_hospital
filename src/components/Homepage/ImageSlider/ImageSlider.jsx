import React from "react";
import one from "../../../assets/homepageImages/one.jpg";
import two from "../../../assets/homepageImages/two.jpg";
import three from "../../../assets/homepageImages/three.jpg";
import four from "../../../assets/homepageImages/four.jpg";
import five from "../../../assets/homepageImages/reception.jpg";
import aug1 from "../../../assets/galleryImages/aug1.jpg";
import "./ImageSlider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const ImageSlider = () => {
  return (
    <div className="imageSlider-container">
      <Carousel autoPlay={true} dynamicHeight={true} infiniteLoop={true}>
        <div>
          <img
            src={one}
            alt="parking space"
            className="hm-slider-img"
            title="parking space"
          />
          <p className="legend">On Main road with lot of parking space</p>
        </div>
        <div>
          <img
            src={two}
            alt="easy access to hospital"
            className="hm-slider-img"
            title="easy access to hospital"
          />
          <p className="legend">Easily Assesible</p>
        </div>
        <div>
          <img
            src={three}
            alt="yogm waiting area"
            className="hm-slider-img"
            title="yogm waiting area"
          />
          <p className="legend">Large Waiting Area</p>
        </div>
        <div>
          <img
            src={four}
            alt="yogm hospital"
            className="hm-slider-img"
            title="yogm hospital"
          />
          <p className="legend">Road Side Opening</p>
        </div>
        <div>
          <img
            src={five}
            alt="yogm hospital reception"
            className="hm-slider-img"
            title="Yogm Hospital Reception"
          />
          <p className="legend">Reception</p>
        </div>
        <div>
          <img
            src={aug1}
            alt="hoempageImage"
            className="hm-slider-img"
            title="yogm hospital "
          />
          <p className="legend">Yogm hospital 15th aug. celebration.</p>
        </div>
      </Carousel>
    </div>
  );
};
