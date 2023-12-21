import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import MenuIcon from "@mui/icons-material/Menu";

const Footer = () => {
  return (
    <div class={"w-screen w-full flex justify-content p-auto " + styles.navbar}>
      <div className="w-2/5 flex">
      <div class=" flex flex-start items-center">
        <Link to="/">
          <button class="text-white font-semibold mx-8">
            <MenuIcon />
          </button>
        </Link>
      </div>
      <div class=" flex flex-start items-center">
        <Link to="/products">
          <button class="text-white font-semibold mx-8">INTRANET</button>
        </Link>
      </div>
      </div>
      
      <div class="w-2/5 pl-24 flex-grow flex justify-start items-center">
        <img src="src/assets/Logo-2.jpg" class="w-40" alt="" />
      </div>
    </div>
    
  );
};

export default Footer;