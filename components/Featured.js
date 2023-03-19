import React from "react";
import styles from "../styles/components/Featured.module.css";
const Featured = ({ image,priceAfter,priceBefore }) => {
  return (
    <div className={styles.featureCon}>
      <div className={styles.imgCategory}>
        <img src={image} />
      </div>
      <h2> Nike Jordan Kids Air Jordan 4</h2>
      <div className={styles.prices}>
        <h1>Egp {priceAfter}</h1>
        <span>save {priceBefore-priceAfter}</span>
      </div>
    </div>
  );
};

export default Featured;
