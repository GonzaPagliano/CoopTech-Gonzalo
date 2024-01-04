import React from 'react';


// Media 

import Imagenlogin from "/src/assets/Iniciosesion.jpg"

export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (

    <>
      <div style={{ position: "relative" }}>
        <div>
          <img className="w-full" src={Imagenlogin} alt="" />
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
          Iniciar Sesión
        </h1>
      </div>
      <div className="flex justify-center py-20 text-[25px]">
        <h1>Inice sesion y accedea a nuestros servicios..</h1>
      </div>
      <div className="flex justify-center py-20">
        <h3>
          Servivio garantizado para su experiencia 
        </h3>
      </div>
      
    </>
  );
}