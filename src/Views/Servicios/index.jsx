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
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

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

const MediaCard = () => {
  const botonabajo = () => {
    const elementoObjetivo = document.getElementById("miElemento");

    elementoObjetivo.scrollIntoView({
      behavior: "smooth",
      block: "start", // Ajusta la posición del bloque de inicio
      inline: "nearest", // Ajusta la posición lateral para que sea la más cercana
    });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div style={{ position: "relative" }}>
        <div>
          <img
            className="w-full opacity-70"
            src="src/assets/persona-celu.jpg"
            alt=""
          />
        </div>
        <h1
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
            fontSize: "40px",
          }}
          className="w-3/4 z-50 text-neutral-950"
        >
          Servicios
        </h1>
        <h1
          style={{
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
            fontSize: "17px",
          }}
          className="w-3/4 z-50 text-neutral-800"
        >
          <div
            className=
            "bg-zinc-200 opacity-50 p-2 rounded-[12px]"
          >

            Creamos soluciones completas, Para que tus redes eléctricas, de agua
            potable, telecomunicaciones y otros servicios funcionen mejor, de
            manera segura y eficiente. Estamos para impulsar juntos, la
            transformación digital en la gestión de los servicios esenciales.
            COOPTECH es tu aliado tecnológico para una mejor gestión de los
            servicios esenciales.
          </div>

          <br />
          <div className="mt-4">
            <button
              onClick={botonabajo}
              className={
                "border-2 border-gray-900 bg-zinc-200 hover:bg-zinc-400 " +
                styles.boton
              }
            >
              ver más
            </button>
          </div>
        </h1>
      </div>

      {/* ----MODAL----- */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="rounded-[12px]" sx={style}>
          <video
            className={"w-full flex " + styles.video}
            loop={true}
            muted={true}
            autoplay="true"
            playsinline={true}
          >
            <source src="src/assets/Principal-4.mp4" />
          </video>
          <Typography id="modal-modal-title" className="text-center" variant="h6" component="h2">
            OFICINA VIRTUAL
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Aprovechá todos los beneficios que tiene! Una forma distinta y nueva de administrar tus servicios...
          </Typography>
        </Box>
      </Modal>


      {/* --------- */}
      <section id="miElemento">
        <div className="flex justify-evenly my-24 text-center">
          <Card className={"max-w-[345px] " + styles.cardgeneral}>
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
            <CardActions className="flex justify-center">
              <Button
                onClick={handleOpen}
                className={"text-white " + styles.botoncard}
                variant="contained"
                disableElevation
              >
                Ver Más
              </Button>
            </CardActions>
          </Card>
          {/* ------ */}
          <Card className={"max-w-[345px] " + styles.cardgeneral}>
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
            <CardActions className="flex justify-center">
              <Button
                className={"text-white " + styles.botoncard}
                href=""
                variant="contained"
                disableElevation
              >
                Ver Más
              </Button>
            </CardActions>
          </Card>
          {/* ------ */}
          <Card className={"max-w-[345px] " + styles.cardgeneral}>
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
            <CardActions className="flex justify-center">
              <Button
                className={"text-white " + styles.botoncard}
                href=""
                variant="contained"
                disableElevation
              >
                Ver Más
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* ----- */}
        <div className="flex justify-evenly my-24 text-center">
          <Card className={"max-w-[345px] " + styles.cardgeneral}>
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
            <CardActions className="flex justify-center">
              <Button
                className={"text-white " + styles.botoncard}
                href=""
                variant="contained"
                disableElevation
              >
                Ver Más
              </Button>
            </CardActions>
          </Card>
          {/* ------ */}
          <Card className={"max-w-[345px] " + styles.cardgeneral}>
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
            <CardActions className="flex justify-center">
              <Button
                className={"text-white " + styles.botoncard}
                href=""
                variant="contained"
                disableElevation
              >
                Ver Más
              </Button>
            </CardActions>
          </Card>
          {/* ------ */}
          <Card className={"max-w-[345px] " + styles.cardgeneral}>
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
            <CardActions className="flex justify-center">
              <Button
                className={"text-white " + styles.botoncard}
                href="https://app.coopmorteros.coop/"
                variant="contained"
                disableElevation
              >
                Ver Más
              </Button>
            </CardActions>
          </Card>
        </div>
      </section>
    </>
  );
};
export default MediaCard;
