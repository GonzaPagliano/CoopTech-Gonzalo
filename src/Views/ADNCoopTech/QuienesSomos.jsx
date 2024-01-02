import React from "react";
import styles from "./ADNcooptech.module.css";

const Quienessomos = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <div>
          <img
            className="w-full"
            src="src/assets/ADN-quienessomos.jpg"
            alt=""
          />
        </div>
        <h1
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
            fontSize: "50px",
          }}
          className="w-3/4 z-50 text-white"
        >
          QUIENES SOMOS
        </h1>
        <h1
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
            fontSize: "20px",
          }}
          className="w-3/4 z-50 text-white "
        >
          Nuestros talentos, evolucionan los negocios.
          <br />
        </h1>
      </div>

      <div className="flex flex-row justify-content-center p-14">
        <div className={"col-md-8 p-8 " + styles.textcard}>
          <div className="flex px-8">
            Nos especializamos en el desarrollo de soluciones integrales, tanto
            de software como de hardware, para el monitoreo, control y gestión
            de sistemas complejos: redes eléctricas, de agua potable,
            telecomunicaciones y sistemas de gestión operativa del equipo de
            trabajo, abordando desafíos comunes en empresas y organizaciones que
            ofrecen servicios esenciales.
          </div>
        </div>
      </div>
    </>
  );
};

export default Quienessomos;
