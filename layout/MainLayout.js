import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useRouter } from "next/router";
import styles from "../styles/layout/MainLayout.module.css";
const MainLayout = ({ children }) => {
  return (
    <div style={{width:"100%"}}>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
