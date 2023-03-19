import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slider1 = ({ data }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} style={{width:"97.5%",margin:"auto"}}>
      <div style={{ width: "100%" }}>
        <img src={data} style={{ width: "100%", objectFit: "contain" }} />
      </div>
      <div style={{ width: "100%" }}>
        <img src={data} style={{ width: "100%", objectFit: "contain" }} />
      </div>
    </Slider>
  );
};

export default Slider1;
