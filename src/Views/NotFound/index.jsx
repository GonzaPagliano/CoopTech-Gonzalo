import React from "react";

// Media

import LogoFueraservicio from "/src/assets/NotFound.png";

const NotFound = () => {
  return (
    <>
      <div className="flex justify-center py-20 text-[25px]">
        <h1>PAGINA NO ENCONTRADA</h1>
      </div>
      <div className="w-full flex justify-center">
        <img src={LogoFueraservicio} alt="" />
      </div>
    </>
  );
};

export default NotFound;
