import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen flex flex justify-center bg-gray-950 p-auto ">
      <div className="w-1/3">
        <Link to="/">
          <img src="src/assets/Logo-2.jpg" className="w-40 "  alt="" />
        </Link>
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
