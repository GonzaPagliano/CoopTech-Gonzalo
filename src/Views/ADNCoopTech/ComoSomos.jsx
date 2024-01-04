import React from "react";
import styles from "./ADNcooptech.module.css";

// Media

import ADNComoSomos from "/src/assets/ADN-comosomos.png"
import ADNmision from "/src/assets/ADN-mision.jpg"
import ADNvision from "/src/assets/ADN-vision.jpg"
import ADNcultura from "/src/assets/ADN-cultura.png"

const Comosomos = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <div>
          <img className="w-full" src={ADNComoSomos} alt="" />
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
      <div class="grid justify-items-center m-[5rem]">
        <div className="flex flex-row justify-content-center mx-24">
          <div className={"col-md-6 p-8 " + styles.textcard}>
            <div className="flex px-8">
              Nuestro compromiso va más allá de la tecnología: buscamos generar
              bienestar en las personas, mediante servicios de calidad y
              accesibles, a través de la tecnología y la innovación.  
            </div>
          </div>
          <div className="col-md-6 p-8">
            <img
              className="w-full mb-8 rounded-[10px]"
              src={ADNmision}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-row justify-content-center mx-24">
          <div className="col-md-6 p-8">
            <img
              className="w-full mb-8 rounded-[10px]"
              src={ADNvision}
              alt=""
            />
          </div>
          <div className={"col-md-6 p-8 " + styles.textcard}>
            <div className="flex px-8">
              <ul>
                <li>
                  • Responsabilidad Social: Comprometidos con el impacto
                  positivo en las personas y el entorno en el que operamos.
                </li>
                <li>
                  • Cercanía y Calidez:Valoramos la atención personalizada y el
                  trato humano en todas nuestras interacciones.
                </li>
                <li>
                  • Honestidad del Equipo de Trabajo: La transparencia y la
                  integridad son la base de nuestras relaciones profesionales.
                </li>
                <li>
                  • Innovación e Iniciativa: Buscamos constantemente nuevas
                  formas de mejorar y crecer, promoviendo la creatividad y la
                  iniciativa en nuestro equipo.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-content-center mx-24">
          <div className={"col-md-6 p-8 " + styles.textcard}>
            <div className="flex px-8">
              Impulsamos la transformación digital en el ámbito de los servicios
              esenciales, y ofrecemos soluciones adaptadas y escalables en
              constante evolución, con el propósito de llevar nuestro impacto
              positivo y duradero a personas de otras localidades. 
            </div>
          </div>
          <div className="col-md-6 p-8">
            <img
              className="w-full mb-8 rounded-[10px]"
              src={ADNcultura}
              alt=""
            />
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Comosomos;
