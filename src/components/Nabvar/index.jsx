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
      navbarRef.current.style.height = "4rem";
    }
  };

  return (
    <section>
      <div
        id="navbar"
        ref={navbarRef}
        style={{ height: "4rem" }}
        className="fixed w-full duration-300 transition-all overflow-hidden top-0 z-50 bg-gradient-to-b from-[#1a3137] to-[#0c3b49]"
      >
        <div className={"flex " + styles.hNavbar}>
          <div className="w-1/2 flex">
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
              <button className="mx-5 text-white ">INTRANET</button>
            </Link>
          </div>
          <div className="w-1/2 flex justify-center">
            <Link to="/">
              <img
                src="src/assets/Logo-3-sinfondo.png"
                className="w-48"
                alt=""
              />
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
      <div className="flex flex-col gap-4 md:flex-row my-12 mt-20">
        <div className=" grid basis-1/2 ">
          <Link className="mx-auto mb-2" to="/services">
            <button className="text-xl font-semibold text-white underline">
              SERVICIOS
            </button>
          </Link>
          <div className="mx-auto mb-2">
            <ul
              className={" justif-content-center text-gray-500" + styles.list}
            >
              <li className="text-gray-500">
                <DoneIcon /> Oficina Virtual
              </li>
              <li className="text-gray-500">
                <DoneIcon /> Reconecta
              </li>
              <li className="text-gray-500">
                <DoneIcon /> + Agua
              </li>
              <li className="text-gray-500">
                <DoneIcon /> Cloud Services
              </li>
              <li className="text-gray-500">
                <DoneIcon /> Provisión
              </li>
              <li className="text-gray-500">
                <DoneIcon /> Desarrollos Especiales
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mb-2 grid basis-1/2">
          <Link className="mx-auto mb-2" to="/ADNCoopTech">
            <button className="text-xl font-semibold text-white underline">
              ADN COOPTECH
            </button>
          </Link>
          <div className="mx-auto mb-2">
            <ul className={" justif-content-center text-white" + styles.list}>
              <li className="text-gray-500">
                <DoneIcon /> Como Somos
              </li>
              <li className="text-gray-500">
                <DoneIcon /> Quienes Somos
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row my-12 mt-20">
        <div className=" grid basis-1/2">
          <Link className="mx-auto mb-2" to="/">
            <button className="text-xl font-semibold text-white underline">
              CASOS DE EXITO
            </button>
          </Link>
          <div className="mx-auto mb-2">
            <ul className={" justif-content-center text-white" + styles.list}>
              <li className="text-gray-500">
                <DoneIcon /> Caso 1
              </li>
              <li className="text-gray-500">
                <DoneIcon /> Caso 2
              </li>
              <li className="text-gray-500">
                <DoneIcon /> Caso 3
              </li>
              <li className="text-gray-500">
                <DoneIcon /> Caso 4
              </li>
            </ul>
          </div>
        </div>
        <div className=" grid basis-1/2">
          <Link className="mx-auto mb-2" to="/">
            <button className="text-xl font-semibold text-white underline">
              CARRERA
            </button>
          </Link>
          <div className="mx-auto mb-2">
            <ul className={" justif-content-center text-white" + styles.list}>
              <li className="text-gray-500">
                <DoneIcon /> Kind Job
              </li>
              <li className="text-gray-500">
                <DoneIcon /> Ofertas de Empleo
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>

          <img className='w-40 mb-20' src="src/assets/Logo-1.jpg" alt="" />

      </div>
    </>
  );
};

export default Navbar;
