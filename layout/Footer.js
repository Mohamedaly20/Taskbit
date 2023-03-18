import React from "react";
import styles from "../styles/layout/Footer.module.css";
const Footer = () => {
  return (
    <div>
      <hr />
      <div className={styles.footer}>
        <div>
          <ul>
            <li>
              <h2>Active Trending</h2>
            </li>
            <li>Men</li>
            <li>Woman</li>
            <li>Kids</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h2>About Us</h2>
            </li>
            <li>About Company</li>
            <li>Connect Us</li>
            <li>Our Branches</li>
          </ul>
        </div>
      </div>
      <hr />
      <h4 className={styles.copyrights}>Copyright © 2022 All Rights Reserved</h4>
    </div>
  );
};

export default Footer;
