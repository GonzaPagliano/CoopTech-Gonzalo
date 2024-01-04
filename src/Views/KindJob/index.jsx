import React from "react";
import styles from "./Kindjob.module.css";

const Quienessomos = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <div>
          <img className="w-full" src="src/assets/empleo.jpg" alt="" />
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
          KIND JOB
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
            Buscamos talentos, innovadores, capaces trabajar en equipo para
            crear productos de impacto, para la gestión de servicios
            esenciales. 
          </div>
        </div>
      </div>
    </>
  );
};

export default Quienessomos;
