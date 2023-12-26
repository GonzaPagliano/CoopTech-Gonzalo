import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import MenuIcon from "@mui/icons-material/Menu";

const Footer = () => {
  return (
    <div class={" flex justify-content " + styles.footer}>
      <div className="w-80 flex">
        <div class="w-2/5 pl-24 flex-grow flex justify-start items-center">
          <img src="src/assets/Logo-1-sinfondo.png" class="w-80" alt="" />
        </div>
              
      </div>
      
    </div>
  );
};

export default Footer;
