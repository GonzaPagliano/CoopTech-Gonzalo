import React, { useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import DoneIcon from "@mui/icons-material/Done";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

//media

import LogoBlancoSinfondo from "/src/assets/LogoBlancoSinfondo.png"

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
        className="fixed w-full duration-1000 transition-all overflow-hidden top-0 z-50 bg-gradient-to-b from-[#1a3137] to-[#114859]"
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
                src={LogoBlancoSinfondo}
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
      {/* INICIO PRIMERA SECCION */}
      <div className="flex flex-col gap-4 md:flex-row mt-8 text-xl">
        <div className="flex flex-col basis-1/3">
          <Link className="mx-auto mb-2" to="/services">
            <button className="text-xl font-semibold text-black underline">
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
        <div className="flex flex-col basis-1/3 text-2xl">
          <button className="text-xl font-semibold text-black underline">
            ADN COOPTECH
          </button>
          <div className="mx-auto mb-2">
            <ul className={" justif-content-center text-white" + styles.list}>
              <Link className="mx-auto mb-2" to="/ComoSomos">
                <li className="text-gray-500">
                  <DoneIcon /> Como Somos
                  <ul className={"text-start pl-6 " + styles.submenu}>
                    <li className="size-[4rem]">
                      <ArrowRightIcon /> Misión
                    </li>
                    <li className="size-[4rem]">
                      <ArrowRightIcon /> Visión
                    </li>
                    <li className="size-[4rem]">
                      <ArrowRightIcon /> Cultura
                    </li>
                  </ul>
                </li>
              </Link>
              <Link className="mx-auto mb-2" to="/QuienesSomos">
                <li className="text-gray-500">
                  <DoneIcon /> Quienes Somos
                  <ul className={"text-start pl-6 " + styles.submenu}>
                    <li className="size-[4rem]">
                      <ArrowRightIcon /> Modelo de negocios
                    </li>
                    <li className="size-[4rem]">
                      <ArrowRightIcon /> Detalle del equipo
                    </li>
                    <li className="size-[4rem]">
                      <ArrowRightIcon /> Certificaciones y premios
                    </li>
                  </ul>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col basis-1/3">
          <Link className="mx-auto mb-2" to="/CasosExito">
            <button className="text-xl font-semibold text-black underline">
              CASOS DE EXITO
            </button>
          </Link>
        </div>
      </div>

      {/* FIN PRIMERA SECCION */}
      {/* INICIO SEGUNDA SECCION */}
      <div className="flex flex-col gap-4 md:flex-row mt-4 text-2xl">
        <div className="flex flex-col basis-1/3">
          <Link className="mx-auto mb-2" to="/CertificacionesPremios">
            <button className="text-xl font-semibold text-black underline">
              CERTIFICACIONES Y PREMIOS
            </button>
          </Link>
        </div>
        <div className="flex flex-col basis-1/3">
          <Link className="mx-auto mb-2" to="/CommunityNews">
            <button className="text-xl font-semibold text-black underline">
              COMUNIDAD / NOTICIAS
            </button>
          </Link>
        </div>
        <div className="flex flex-col basis-1/3">
          <button className="text-xl font-semibold text-black underline">
            CARRERA
          </button>
          <div className="mx-auto mb-2">
            <ul className={" justif-content-center text-white" + styles.list}>
              <Link className="mx-auto mb-2" to="/Kindjob">
                <li className="text-gray-500">
                  <DoneIcon /> Kind Job
                </li>
              </Link>
              <Link to={"https://coopmorteros.com/?8"} target="blank">
                <li className="text-gray-500">
                  <DoneIcon /> Ofertas de Empleo
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {/* FIN SEGUNDA SECCION */}
      <div className="flex justify-center  opacity-25">
        <img
          className="w-60 mb-20"
          src={LogoBlancoSinfondo}
          alt=""
        />
      </div>
    </>
  );
};

export default Navbar;
