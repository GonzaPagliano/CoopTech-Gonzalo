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
          <source src="src/assets/Principal-1.mp4" />
        </video>
        <img
          src="src/assets/Logo-CoopTech5.png"
          style={{
            position: "absolute",
            top: "30%",
            left: "30%",
            width: "40",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
          }}
          alt=""
        />
        <h1
          style={{
            position: "absolute",
            top: "45%",
            left: "20%",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
            fontSize: "30px"
          }}
          className="w-1/4 z-50 text-black"
        >
          SOMOS LO QUE ESTAS BUSCANDO
        </h1>
      </div>

      
    </>
  );
};

export default Home;
