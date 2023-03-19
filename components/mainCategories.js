import React from "react";
import styles from "../styles/components/MainCategories.module.css";
import "slick-carousel/slick/slick.css";
import '../styles/components/MainCategories.module.css'
import Slider from "react-slick";
const MainCategories = ({ category, brands }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  console.log(category);
  return (
    <Slider {...settings} style={{width:"95%",margin:"40px auto"}}>
      {category?.map(({ image, name }) => {
        return (
          <div className={styles.categoryCon}>
            <div
              className={`${
                brands
                  ? `${(styles.imgCategory, styles.brand)}`
                  : styles.imgCategory
              }`}
            >
              <img src={image} />
            </div>
            <div className={styles.title}>
              <h3 >{name}</h3>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default MainCategories;
