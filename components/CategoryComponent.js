import React from "react";
import styles from "../styles/components/MainCategories.module.css";

const CategoryComponent = ({image,name,brands}) => {
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
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default CategoryComponent;
