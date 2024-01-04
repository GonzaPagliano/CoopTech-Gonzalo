import React from "react";
import styles from "./casosexito.module.css";

// Media

import Empresas from "/src/assets/EmpresaConfian.jpg";
import Lomanegra from "/src/assets/LomaNegra.png";
import Hsbc from "/src/assets/HSBC.png";
import coopmorteros from "/src/assets/CoopMorteros.png";
import coopporteña from "/src/assets/CoopPorteña.png";
import coopbrinkmann from "/src/assets/CoopBrk.png";

const Casosexitos = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <div>
          <img className="w-full" src={Empresas} alt="" />
        </div>
        <h1
          style={{
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
            fontSize: "50px",
          }}
          className="w-3/4 z-50 text-white"
        >
          CASOS DE EXITO
        </h1>
      </div>

      <div className={"flex justify-center " + styles.titulo}>
        <h1>Personas y Empresas que confian en Nosotros..</h1>
      </div>

      <div className="flex flex-row justify-center m-12">
        <img className="w-40 mr-8 " src={Lomanegra} alt="" />
        <img className="w-40 mr-8 " src={Hsbc} alt="" />
        <img className="w-40 mr-8 " src={coopmorteros} alt="" />
        <img className="w-40 mr-8 " src={coopporteña} alt="" />
        <img className="w-40" src={coopbrinkmann} alt="" />
      </div>

      <div className="flex flex-row justify-center m-24">
        <img className="w-40 mr-8" src={coopbrinkmann} alt="" />
        <img className="w-40 mr-8 " src={Lomanegra} alt="" />
        <img className="w-40 mr-8 " src={coopporteña} alt="" />
        <img className="w-40 mr-8 "src={Hsbc} alt="" />
        <img className="w-40 mr-8 " src={coopmorteros} alt="" />
      </div>
    </>
  );
};

export default Casosexitos;
