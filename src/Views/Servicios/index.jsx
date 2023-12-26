import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./services.module.css";
import HubIcon from "@mui/icons-material/Hub";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import StormIcon from "@mui/icons-material/Storm";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import WebhookIcon from "@mui/icons-material/Webhook";

const MediaCard = () => {
  const botonabajo = () => {
    const elementoObjetivo = document.getElementById("miElemento");

    elementoObjetivo.scrollIntoView({
      behavior: "smooth",
      block: "start", // Ajusta la posición del bloque de inicio
      inline: "nearest" // Ajusta la posición lateral para que sea la más cercana
    });
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <video
          className={"w-full flex " + styles.video}
          loop={true}
          muted={true}
          autoplay="true"
          playsinline={true}
        >
          <source src="src/assets/vecteezy_animacion-de-fondo-de-tecnologia-cibernetica_10172081.mp4" />
        </video>
        <h1
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
            fontSize: "50px",
          }}
          className="w-3/4 z-50 text-white b"
        >
          Servicios
        </h1>
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
            fontSize: "20px",
          }}
          className="w-3/4 z-50 text-white"
        >
          "Nos especializamos en servicios unicos para mejorar la experiencia
          del cliente"
          <br />
          <div className="mt-4">
            <button onClick={botonabajo} className={"border-2 border-white-900 " + styles.boton}>
              ver más
            </button>
          </div>
        </h1>
      </div>

      {/* --------- */}
      <section id="miElemento">
        <div className="flex justify-evenly p-8">
          <Card
            sx={{
              maxWidth: 345,
              background: "#278e9b",
              boxShadow: "black 8px 7px 27.5px",
            }}
          >
            <CardMedia
              sx={{ height: 150, border: "black" }}
              image="src/assets/Logo-CoopTech.jpg"
              title="Oficina Virtual"
            />
            <CardContent className="text-white">
              <Typography gutterBottom variant="h5" component="div">
                <HubIcon /> Oficina Virtual
              </Typography>
              <Typography variant="body2" color="text.white">
                Aprovechá todos los beneficios que tiene! Una forma distinta y
                nueva de administrar tus servicios...
              </Typography>
            </CardContent>
            <CardActions>
              <a className="text-white" href="https://app.coopmorteros.coop/">
                Ver Más
              </a>
            </CardActions>
          </Card>
          {/* ------ */}
          <Card
            sx={{
              maxWidth: 345,
              background: "#278e9b",
              boxShadow: "black 8px 7px 27.5px",
            }}
          >
            <CardMedia
              sx={{ height: 150 }}
              image="src/assets/Logo-CoopTech.jpg"
              title="Reconecta"
            />
            <CardContent className="text-white">
              <Typography gutterBottom variant="h5" component="div">
                <ElectricalServicesIcon /> Reconecta
              </Typography>
              <Typography variant="body2" color="text.white">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <a className="text-white" href="https://app.coopmorteros.coop/">
                Ver Más
              </a>
            </CardActions>
          </Card>
          {/* ------ */}
          <Card
            sx={{
              maxWidth: 345,
              background: "#278e9b",
              boxShadow: "black 8px 7px 27.5px",
            }}
          >
            <CardMedia
              sx={{ height: 150 }}
              image="src/assets/Logo-CoopTech.jpg"
              title="+ Agua"
            />
            <CardContent className="text-white">
              <Typography
                gutterBottom
                color="text.white"
                variant="h5"
                component="div"
              >
                <StormIcon /> + Agua
              </Typography>
              <Typography variant="body2" color="text.white">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <a className="text-white" href="https://app.coopmorteros.coop/">
                Ver Más
              </a>
            </CardActions>
          </Card>
        </div>

        {/* ----- */}
        <div className="flex justify-evenly p-8">
          <Card
            sx={{
              maxWidth: 345,
              background: "#278e9b",
              boxShadow: "black 8px 7px 27.5px",
            }}
          >
            <CardMedia
              sx={{ height: 150, border: "black" }}
              image="src/assets/Logo-CoopTech.jpg"
              title="Oficina Virtual"
            />
            <CardContent className="text-white">
              <Typography gutterBottom variant="h5" component="div">
                <CloudCircleIcon /> Cloud Services
              </Typography>
              <Typography variant="body2" color="text.white">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <a className="text-white" href="https://app.coopmorteros.coop/">
                Ver Más
              </a>
            </CardActions>
          </Card>
          {/* ------ */}
          <Card
            sx={{
              maxWidth: 345,
              background: "#278e9b",
              boxShadow: "black 8px 7px 27.5px",
            }}
          >
            <CardMedia
              sx={{ height: 150 }}
              image="src/assets/Logo-CoopTech.jpg"
              title="Reconecta"
            />
            <CardContent className="text-white">
              <Typography gutterBottom variant="h5" component="div">
                <HubIcon /> Provisión
              </Typography>
              <Typography variant="body2" color="text.white">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <a className="text-white" href="https://app.coopmorteros.coop/">
                Ver Más
              </a>
            </CardActions>
          </Card>
          {/* ------ */}
          <Card
            sx={{
              maxWidth: 345,
              background: "#278e9b",
              boxShadow: "black 8px 7px 27.5px",
            }}
          >
            <CardMedia
              sx={{ height: 150 }}
              image="src/assets/Logo-CoopTech.jpg"
              title="+ Agua"
            />
            <CardContent className="text-white">
              <Typography
                gutterBottom
                color="text.white"
                variant="h5"
                component="div"
              >
                <WebhookIcon /> Desarrollos Especiales
              </Typography>
              <Typography variant="body2" color="text.white">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <a className="text-white" href="https://app.coopmorteros.coop/">
                Ver Más
              </a>
            </CardActions>
          </Card>
        </div>
      </section>
    </>
  );
};
export default MediaCard;
