import React from "react";
import styles from "./certificaciones.module.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// Media

import PremiosImagen from "/src/assets/premios.jpg";
import Premio1 from "/src/assets/premio1.png";

const Certifpremios = () => {
  const theme = useTheme();
  return (
    <>
      <div style={{ position: "relative" }}>
        <div>
          <img src={PremiosImagen} className="w-full" alt="" />
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

      <div className={"flex justify-center py-20  " + styles.titulo}>
        <h1>"ESTOS SON ALGUNOS DE LAS DISTINCIONES QUE HEMOS RECIBIDO.."</h1>
      </div>

      <div className="flex flex-row justify-center col-md-12 col-sm-12 m-12">
        <Card className={"flex " + styles.card}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={Premio1}
            alt="Live from space album cover"
          />
          <Box className={"w-80 " + styles.cardlogros}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                APP DEL AÑO
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <p>
                  Este premio se debe al desarrollo innovador del la app
                  CoopTech, fue galardona con el maximo de los premios por su
                  innovacion tecnologica..
                </p>
              </Typography>
            </CardContent>
          </Box>
        </Card>
        <Card className={"flex " + styles.card}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={Premio1}
            alt="Live from space album cover"
          />
          <Box className={"w-80 " + styles.cardlogros}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                APP DEL AÑO
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <p>
                  Este premio se debe al desarrollo innovador del la app
                  CoopTech, fue galardona con el maximo de los premios por su
                  innovacion tecnologica..
                </p>
              </Typography>
            </CardContent>
          </Box>
        </Card>
        <Card className={"flex " + styles.card}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={Premio1}
            alt="Live from space album cover"
          />
          <Box className={"w-80 " + styles.cardlogros}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                APP DEL AÑO
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <p>
                  Este premio se debe al desarrollo innovador del la app
                  CoopTech, fue galardona con el maximo de los premios por su
                  innovacion tecnologica..
                </p>
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </div>
    </>
  );
};

export default Certifpremios;
