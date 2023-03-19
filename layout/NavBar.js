import React, { useState } from "react";
import styles from "../styles/layout/NavBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className={styles.nav}>
      <div className={styles.sale}>White Friday Up to 70% Sale</div>
      <div className={styles.searchInfo}>
        <div className={styles.store}>
          <img
            src="../assets/storelocator.png"
            style={{ width: "24px", height: "24px" }}
          />
          <h3>Store Locator</h3>
        </div>
        <div className={styles.toggler}>
          <FiMenu size={24} onClick={() => setMenuToggle(true)} />
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Search" />
          <AiOutlineSearch />
        </div>
        <div className={styles.cartinfo}>
          <span className={styles.language}>العربية</span>
          <span>
            <BiUser size={24}/>
          </span>
          <span>
            <FaShoppingCart size={24} />
          </span>
        </div>
      </div>
      <div className={styles.ulContainer}>
        <ul className={styles.myUl}>
          <li>Top Deals</li>
          <li>Deals of the day</li>
          <li>Men</li>
          <li>Woman</li>
          <li>Kids</li>
          <li>New</li>
          <li>Brands</li>
          <li>Sports</li>
          <li>Accesories</li>
          <li style={{ color: "#FFD800" }}>Sale</li>
        </ul>
        <div className={styles.searchinput}>
          <input type="text" placeholder="بحث" />
          <AiOutlineSearch />
        </div>
      </div>
      {menuToggle && (
        <div className={styles.ulMobileCon}>
          <div className={styles.ulMobile}>
            <AiOutlineClose size={23} onClick={() => setMenuToggle(false)} />
            <hr style={{ height: "2px", width: "100%" }} />
            <div className={styles.store1}>
              <img
                src="../assets/storelocator.png"
                style={{ width: "24px", height: "24px" }}
              />
              <h2>Store Locator</h2>
            </div>
            <hr style={{ height: "2px", width: "100%" }} />
            <ul>
              <li>Top Deals</li>
              <li>Deals of the day</li>
              <li>Men</li>
              <li>Woman</li>
              <li>Kids</li>
              <li>New</li>
              <li>Brands</li>
              <li>Sports</li>
              <li>Accesories</li>
              <li>sale</li>
              <li>العربية</li>
            </ul>
          </div>
          <div
            className={styles.darkSide}
            onClick={() => setMenuToggle(false)}
          ></div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
