import React from "react";
import styles from '../styles/components/Featured.module.css'
const FeatureComponents = ({price_after_sale,price_before_sale,image}) => {
  return (
    <div className={styles.featureCon}>
      <div className={styles.imgCategory}>
        <img src={image} />
      </div>
      <h2> Nike Jordan Kids Air Jordan 4</h2>
      <div className={styles.prices}>
        <h1
          className={`${
            price_before_sale - price_after_sale !== 0
              ? styles.redCol
              : styles.blueCol
          }`}
        >
          Egp {price_after_sale}
        </h1>
        {price_before_sale - price_after_sale !== 0 && (
          <span>save {price_before_sale - price_after_sale}</span>
        )}
      </div>
    </div>
  );
};

export default FeatureComponents;
