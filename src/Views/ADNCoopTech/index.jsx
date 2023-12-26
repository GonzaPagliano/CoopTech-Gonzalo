import React from "react";
import styles from "./ADNcooptech.module.css";

const ADNCoopTech = () => {
  return (
    <>
      <div className="w-full">
        <img src="src/assets/Quienes_Somos.png" alt="" />
      </div>

      <div className="flex flex-row justify-content-center">
        {/* SECCION QUIENES SOMOS */}
        <div className="col-md-6 px-8">
          <h1 className={"text-[50px] " + styles.text}>QUIENES SOMOS</h1>
          <img src="src/assets/Logo-3.jpg" alt="" />
        </div>

        {/* SECCION COMO SOMOS */}
        <div className={"col-md-6 px-8 " + styles.textcard}>
          <div className="flex px-8">
            Trabajamos con personas alineadas con nuestra visión, empleando la
            cercanía como vehículo de nuestros valores, porque sólo estando
            cerca es posible identificar los matices que hacen único el talento
            de las personas y grandes a los proyectos de nuestros
          </div>
        </div>
      </div>
<br />
      <div className="flex flex-row justify-content-center">
        {/* SECCION COMO SOMOS */}
        <div className={"col-md-6 px-8 " + styles.textcard}>
          <div className="flex px-8">
            Trabajamos con personas alineadas con nuestra visión, empleando la
            cercanía como vehículo de nuestros valores, porque sólo estando
            cerca es posible identificar los matices que hacen único el talento
            de las personas y grandes a los proyectos de nuestros
          </div>
        </div>

        {/* SECCION QUIENES SOMOS */}
        <div className="col-md-6 px-8">
          <h1 className={"text-[50px] " + styles.text}>COMO SOMOS</h1>
          <img src="src/assets/Logo-3.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default ADNCoopTech;
