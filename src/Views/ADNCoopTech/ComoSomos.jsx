import React from "react";
import styles from "./ADNcooptech.module.css";

const ADNCoopTech = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <div>
          <img className="w-full" src="src/assets/ADN-comosomos.png" alt="" />
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
          COMO SOMOS
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
          className="w-3/4 z-50 text-white"
        >
          "Nos especializamos en servicios unicos para mejorar la experiencia
          del cliente"
          <br />
        </h1>
      </div>

      <div className="flex flex-row justify-content-center p-24">
        {/* SECCION QUIENES SOMOS */}
        <div className="col-md-6 p-8">
          <img
            className="w-screen mb-8 rounded-[10px]"
            src="src/assets/ADN-comosomos2.jpg"
            alt=""
          />
        </div>

        {/* SECCION COMO SOMOS */}
        <div className={"col-md-6 p-8 " + styles.textcard}>
          <div className="flex px-8">
            "Trabajamos con personas alineadas con nuestra visión, empleando la
            cercanía como vehículo de nuestros valores, porque sólo estando
            cerca es posible identificar los matices que hacen único el talento
            de las personas y grandes a los proyectos de nuestros"
          </div>
        </div>
      </div>
      <br />
      <div className="flex flex-row justify-content-center p-12">
        {/* SECCION COMO SOMOS */}
        <div className="col-md-4 w-4/5">
          <img src="src/assets/ADN-mision.jpg" alt="" />
        </div>
        <div className="col-md-4 w-4/5">
          <img src="src/assets/ADN-vision.jpg" alt="" />
        </div>
        <div className="col-md-4 w-4/5">
          <img src="src/assets/ADN-cultura.png" alt="" />
        </div>
      </div>
      <div className="flex flex-row justify-content-center p-12">
        {/* SECCION COMO SOMOS */}
        <div className={"col-md-4 " + styles.textcard}>
        <div className="flex px-8">
            "Trabajamos con personas alineadas con nuestra visión, empleando la
            cercanía como vehículo de nuestros valores, porque sólo estando
            cerca es posible identificar los matices que hacen único el talento
            de las personas y grandes a los proyectos de nuestros"
          </div>
        </div>
        <div className={"col-md-4 " + styles.textcard}>
        <div className="flex px-8">
            "Trabajamos con personas alineadas con nuestra visión, empleando la
            cercanía como vehículo de nuestros valores, porque sólo estando
            cerca es posible identificar los matices que hacen único el talento
            de las personas y grandes a los proyectos de nuestros"
          </div>
        </div>
        <div className={"col-md-4 " + styles.textcard}>
        <div className="flex px-8">
            "Trabajamos con personas alineadas con nuestra visión, empleando la
            cercanía como vehículo de nuestros valores, porque sólo estando
            cerca es posible identificar los matices que hacen único el talento
            de las personas y grandes a los proyectos de nuestros"
          </div>
        </div>
      </div>
    </>
  );
};

export default ADNCoopTech;
