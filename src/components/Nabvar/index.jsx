import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen flex flex-justify-content items-center ">
      <div className="w-[10rem] flex flex-justify-center">
        <img src="src/assets/Logo-4.png" alt="" />
      </div>
      {/* <div>
        <Link to="/">
          <button className="text-white font-semibold mx-8">Inicio</button>
        </Link>
      </div>
      <div>
        <Link to="/products">
          <button className="text-white font-semibold mx-8">Productos</button>
        </Link>
      </div> */}
    </div>
  );
};

export default Navbar;
