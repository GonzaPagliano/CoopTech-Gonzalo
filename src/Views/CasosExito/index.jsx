import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

const Casosexitos = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <div>
          <img className="w-full" src="src/assets/premios.jpg" alt="" />
        </div>
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
            fontSize: "50px",
          }}
          className="w-3/4 z-50 text-white"
        >
          CERTIFICACIONES Y PREMIOS
        </h1>
      </div>

      <div className="flex justify-center py-20 text-[25px]">
        <h1>Personas y Empresas que confian en Nosotros..</h1>
      </div>

      <div className="flex flex-row justify-center m-24">
        <div className="col-md-3 p-8">
          <div className=" border-dotted border-2 border-sky-500 col-md-3 p-8">
            <img
              className="w-80 mb-8 rounded-[10px]"
              src="src/assets/C50_Blanco_envivo.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-3 p-8">
          <div className="border-dotted border-2 border-sky-500 col-md-6 p-8">
            <img
              className="w-80 mb-8 rounded-[10px]"
              src="src/assets/CoopCloud_No_Fondo.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-3  p-8">
          <div className="border-dotted border-2 border-sky-500 col-md-3 p-8">
            <img
              className="w-80 mb-8 rounded-[10px]"
              src="src/assets/Iso_Ofi_Blanco_Logo_Blanco.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-3 p-8">
          <div className="border-dotted border-2 border-sky-500 col-md-6 p-8">
            <img
              className="w-80 mb-8 rounded-[10px]"
              src="src/assets/logo-coop.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center m-24">
        <div className="col-md-3 p-8">
          <div className=" border-dotted border-2 border-sky-500 col-md-3 p-8">
            <img
              className="w-80 mb-8 rounded-[10px]"
              src="src/assets/C50_Blanco_envivo.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-3 p-8">
          <div className="border-dotted border-2 border-sky-500 col-md-6 p-8">
            <img
              className="w-80 mb-8 rounded-[10px]"
              src="src/assets/CoopCloud_No_Fondo.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-3  p-8">
          <div className="border-dotted border-2 border-sky-500 col-md-3 p-8">
            <img
              className="w-80 mb-8 rounded-[10px]"
              src="src/assets/Iso_Ofi_Blanco_Logo_Blanco.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-3 p-8">
          <div className="border-dotted border-2 border-sky-500 col-md-6 p-8">
            <img
              className="w-80 mb-8 rounded-[10px]"
              src="src/assets/logo-coop.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Casosexitos;
