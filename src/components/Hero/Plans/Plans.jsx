import React from "react";
import "./Plans.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function Plans() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
  };

  return (
    <div className="patners-container">
      <div className="programs-header">
        <span className="stroke-text">Our Partners</span>
      </div>

      <div className="slider-container">
        <Slider {...sliderSettings}>
          <div>
            <img src="a.png" alt="" />
          </div>
          <div>
            <img src="2.png" alt="" />
          </div>
          <div>
            <img src="3.png" alt="" />
          </div>
          <div>
            <img src="4.png" alt="" />
          </div>
          <div>
            <img src="5.png" alt="" />
          </div>
          <div>
            <img src="7.png" alt="" />
          </div>
          <div>
            <img src="8.png" alt="" />
          </div>
          <div>
            <img src="9.png" alt="" />
          </div>
          <div>
            <img src="10.png" alt="" />
          </div>
          <div>
            <img src="11.png" alt="" />
          </div>

          <div>
            <img src="12.png" alt="" />
          </div>
          <div>
            <img src="13.png" alt="" />
          </div>
          <div>
            <img src="14.png" alt="" />
          </div>
          <div>
            <img src="19.png" alt="" />
          </div>
          <div>
            <img src="18.png" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
