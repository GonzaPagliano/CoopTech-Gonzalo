import { useState } from "react";
import "./App.css";
import Navbar from "./components/Nabvar";
import Home from "./Views/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Views/NotFound";
import Servicios from "./Views/Servicios";
import Login from "./Views/Login";
import ADNCoopTech from "./Views/ADNCoopTech";
import Footer from "./components/Footer";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      
      <section className=" mt-16">
        <Routes>
        <Route path="/ADNCoopTech" element={<ADNCoopTech />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />

          <Route path="/services" element={<Servicios />} />
          <Route path="/login" element={<Login />} />
          
          
        </Routes>
      </section>
      <Footer/>
    </>
  );
}

export default App;
