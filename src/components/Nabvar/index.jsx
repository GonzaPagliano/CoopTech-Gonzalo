import React, { useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import DoneIcon from "@mui/icons-material/Done";

const Navbar = () => {
  const navbarRef = useRef(null);

  var expand = false;
  const expandir = () => {
    expand = !expand;
    if (expand) {
      navbarRef.current.style.height = "100%";
    } else {
      navbarRef.current.style.height = "4.5rem";
    }
  };

  return (
    <section>
      <div
        id="navbar"
        ref={navbarRef}
        style={{ height: "4.5rem" }}
        className="fixed w-full duration-300 transition-all bg-[#231f1e] overflow-hidden top-0"
      >
        <div className={"w-full flex " + styles.hNavbar}>
          <div className="w-1/2 px-auto flex">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={expandir}
            >
              <MenuIcon
                sx={{ fontSize: 30, color: "white" }}
                className="mx-5"
              />
            </IconButton>
            <Link className="my-auto mr-auto" to="/login">
              <button className="mx-5 text-white">INTRANET</button>
            </Link>
          </div>
          <div className="w-1/2">
            <Link to="/">
              <img src="src/assets/Logo-2.jpg" className="w-44" alt="" />
            </Link>
          </div>
        </div>

        <Contenido />
      </div>
    </section>
  );
};

const Contenido = () => {
  return (
    <>
      <div className="flex justify-around ">
        <div className="flex">
          <Link className="my-auto mr-auto" to="/services">
            <button className="mx-5 text-white">SERVIVIOS</button>
          </Link>
          <ul className={" flex justif-content-center text-white" + styles.list}>
            <li>
              <DoneIcon /> Oficina Virtual
            </li>
            <li>
              <DoneIcon /> Reconecta
            </li>
            <li>
              <DoneIcon /> + Agua
            </li>
            <li>
              <DoneIcon /> Cloud Services
            </li>
            <li>
              <DoneIcon /> Provisión
            </li>
            <li>
              <DoneIcon /> Desarrollos Especiales
            </li>
          </ul>
        </div>
        <div className="flex">
          <Link className="my-auto mr-auto" to="/services">
            <button className="mx-5 text-white">ADN COOPTECH</button>
          </Link>
        </div>
      </div>
      <div className="flex justify-around my-12 ">
        <div className="flex">
          <Link className="my-auto mr-auto" to="/services">
            <button className="mx-5 text-white">CASOS DE EXITO</button>
          </Link>
        </div>
        <div className="flex">
          <Link className="my-auto mr-auto" to="/services">
            <button className="mx-5 text-white">CARRERA</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
