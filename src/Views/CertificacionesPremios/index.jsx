import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

const Certifpremios = () => {
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
        <h1>ESTOS SON ALGUNOS DE LAS DISTINCIONES QUE HEMOS RECIBIDO..</h1>
      </div>

      <div className="flex flex-row justify-center col-md-12 col-sm-12 m-24">
        <div className="col-md-3 col-md-6 p-8">
          <img src="src/assets/premio1.png" className="w-80" alt="" />
          <p className="text-center">PREMIO A APP DEL AÑO</p>
        </div>
        <div className="col-md-3 p-8">
          <img src="src/assets/premio1.png" className="w-80" alt="" />
          <p className="text-center">PREMIO A APP DEL AÑO</p>
        </div>

        <div className="col-md-3 col-md-6  p-8">
          <img src="src/assets/premio1.png" className="w-80" alt="" />
          <p className="text-center">PREMIO A APP DEL AÑO</p>
        </div>
        <div className="col-md-3 p-8">
          <img src="src/assets/premio1.png" className="w-80" alt="" />
          <p className="text-center">PREMIO A APP DEL AÑO</p>
        </div>
      </div>
      <div className="flex flex-row justify-center col-md-12 col-sm-12 m-24">
        <div className="col-md-3 col-md-6 p-8">
          <img src="src/assets/premio1.png" className="w-80" alt="" />
        </div>
        <div className="col-md-3 p-8">
          <img src="src/assets/premio1.png" className="w-80" alt="" />
        </div>

        <div className="col-md-3 col-md-6  p-8">
          <img src="src/assets/premio1.png" className="w-80" alt="" />
        </div>
        <div className="col-md-3 p-8">
          <img src="src/assets/premio1.png" className="w-80" alt="" />
        </div>
      </div>
    </>
  );
};

export default Certifpremios;
