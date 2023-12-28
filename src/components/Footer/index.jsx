import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div class={" flex justify-around " + styles.footer}>
      <div className="w-80 flex">
        <div class="w-2/5 flex-grow flex justify-start items-center">
          <img src="src/assets/Logo-1-sinfondo.png" class="w-80" alt="" />
        </div>
      </div>
      <div className="w-80 flex">
        <h1>Redes Sociales</h1>
        <div class="w-2/5 flex-grow flex justify-start items-center">
          <InstagramIcon />
          <FacebookIcon />
          <LinkedInIcon />
        </div>
      </div>
      <div className="w-80 flex">
        <h1>Productos</h1>
        <div class="w-2/5 flex-grow flex justify-start items-center">

        </div>
      </div>

    </div>
  );
};

export default Footer;
