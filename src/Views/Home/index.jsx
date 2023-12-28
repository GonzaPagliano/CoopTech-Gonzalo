import React from "react";

import styles from "./Home.module.css"

const Home = () => {
  return (
    <>
      <div style={{ position: "relative"}}>
        <video
          className={"w-full flex " + styles.video}
          loop={true}
          muted={true}
          autoplay="true"
          playsinline={true}
        >
          <source src="src/assets/Principal-4.mp4" />
        </video>
        <img
          src="src/assets/Logo-CoopTech5.png"
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
          Para evolucionar los servicios esenciales, con adaptabilidad y escalabilidad
        </h1>
      </div>

      
    </>
  );
};

export default Home;
