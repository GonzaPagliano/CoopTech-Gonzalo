import { useState } from "react";
import "./App.css";
import Navbar from "./components/Nabvar";
import Home from "./Views/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Views/NotFound";
import Servicios from "./Views/Servicios";
import Login from "./Views/Login";
import ComoSomos from "./Views/ADNCoopTech/ComoSomos";
import QuienesSomos from "./Views/ADNCoopTech/QuienesSomos";
import CertificacionesPremios from "./Views/CertificacionesPremios";
import CasosExito from "./Views/CasosExito";
import CommunityNews from "./Views/CommunityNews";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <section className=" mt-16">
        <Routes>
          <Route path="/ComoSomos" element={<ComoSomos />} />
          <Route path="/QuienesSomos" element={<QuienesSomos />} />
          <Route path="/CertificacionesPremios" element={<CertificacionesPremios />} />
          <Route path="/CommunityNews" element={<CommunityNews />} />
          <Route path="/CasosExito" element={<CasosExito />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />

          <Route path="/services" element={<Servicios />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
