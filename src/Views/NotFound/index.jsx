import React from "react";

import Tarjeta from "../../components/Tarjeta";
import HubIcon from "@mui/icons-material/Hub";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import StormIcon from "@mui/icons-material/Storm";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import WebhookIcon from "@mui/icons-material/Webhook";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "1px solid #000",
  rounded: "12px",
  boxShadow: 24,
  p: 2,
};

const Notfound = () => {
  return (
    <>
      <section id="miElemento">
        <div className="flex justify-evenly my-24 text-center">
          <Tarjeta
            nombre="Oficina Virtual"
            img="/src/assets/Logo-CoopTech.jpg"
            icono={<HubIcon />}
            descripcion="Aprovechá todos los beneficios que tiene!
Una forma distinta y nueva de administrar tus servicios..."
          />
          <Tarjeta
            nombre="Reconecta"
            img="/src/assets/Logo-CoopTech.jpg"
            icono={<ElectricalServicesIcon />}
            descripcion="Aprovechá todos los beneficios que tiene!
Una forma distinta y nueva de administrar tus servicios..."
          />
          <Tarjeta
            nombre="+ AGUA"
            img="/src/assets/Logo-CoopTech.jpg"
            icono={<StormIcon />}
            descripcion="Aprovechá todos los beneficios que tiene!
Una forma distinta y nueva de administrar tus servicios..."
          />
        </div>

        {/* // SEGUNDA FILA //  */}

        <div className="flex justify-evenly my-24 text-center">
          <Tarjeta
            nombre="Cloud Service"
            img="/src/assets/Logo-CoopTech.jpg"
            icono={<CloudCircleIcon />}
            descripcion="Aprovechá todos los beneficios que tiene!
Una forma distinta y nueva de administrar tus servicios..."
          />
          <Tarjeta
            nombre="Provisión"
            img="/src/assets/Logo-CoopTech.jpg"
            icono={<WebhookIcon />}
            descripcion="Aprovechá todos los beneficios que tiene!
Una forma distinta y nueva de administrar tus servicios..."
          />
          <Tarjeta
            nombre="Desarrollos Especiales"
            img="/src/assets/Logo-CoopTech.jpg"
            icono={<HubIcon />}
            descripcion="Aprovechá todos los beneficios que tiene!
Una forma distinta y nueva de administrar tus servicios..."
          />
        </div>
      </section>
    </>
  );
};

export default Notfound;
