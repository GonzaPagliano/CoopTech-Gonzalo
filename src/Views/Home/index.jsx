import React from "react";
import styles from "./Home.module.css";

// Media
import Imageninicio from "/src/assets/ciudad.jpg";
import Logocooptech5 from "/src/assets/Logo-CoopTech5.png";

const Home = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <div>
          <img
            className={"w-full flex " + styles.video}
            src={Imageninicio}
            alt=""
          />
          <div className={"w-full " + styles.divnegro}></div>
        </div>
        <img
          src={Logocooptech5}
          style={{
            position: "absolute",
            top: "30%",
            left: "30%",
            width: "60vw",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
          }}
          alt=""
        />
        <h1
          style={{
            position: "absolute",
            top: "45%",
            left: "35%",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
          }}
          className={"w-1/2 z-50 " + styles.texto}
        >
          Para evolucionar los servicios esenciales, con adaptabilidad y
          escalabilidad
        </h1>
      </div>
    </>
  );
};

export default Home;
