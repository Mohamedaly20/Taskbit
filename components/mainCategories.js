import React from "react";
import styles from "../styles/components/MainCategories.module.css";
const MainCategories = ({ image, title, brands }) => {
  return (
    <div className={styles.categoryCon}>
      <div
        className={`${
          brands ? `${(styles.imgCategory, styles.brand)}` : styles.imgCategory
        }`}
      >
        <img src={image} />
      </div>
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default MainCategories;
