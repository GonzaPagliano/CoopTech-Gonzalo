import React from "react";
import styles from "./communitynews.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Certifpremios = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <div>
          <img className="w-full" src="src/assets/community.png" alt="" />
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

      <div className="flex justify-center py-20 text-[25px]">
        <h1>ESTOS SON ALGUNOS DE LAS DISTINCIONES QUE HEMOS RECIBIDO..</h1>
      </div>
      <div className="flex justify-center">
        <h3>
          Espacio de posteo de noticias y visibilizarían de presencia en
          eventos.
        </h3>
      </div>

      <section id="noticias_comunidad">
        <div className="grid grid-flow-col justify-stretch py-20">
          <div className="flex justify-center col-md-4">
            <Card className={"max-w-[400px] " + styles.cardnews}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  src="src/assets/Logo-3.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    COOPTECH FUE PRENSENTADO EN BUENOS AIRES
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Nos complace enormemente compartir una noticia que llena de orgullo a toda la familia CoopMorteros.

                    Egresado de la carrera de Ingeniería Electrónica, Lorenzo Depetris alcanzó el mejor promedio (9.14) en el rango de ingenierías de UTN San Francisco.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="flex justify-center col-md-4">
            <Card className={"max-w-[400px] " + styles.cardnews}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  src="src/assets/Logo-3.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    SE LANZA COOPTECH PARA EMPRESAS
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Nuestros ingenieros Leonardo Depetris y Lucas Ponce compartieron conocimientos clave en una charla técnica de agua y saneamiento, a través de Zoom.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="flex justify-center col-md-4">
            <Card className={"max-w-[400px] " + styles.cardnews}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  src="src/assets/Logo-3.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    IT PRESENTA COOPTECH
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Avanzamos con la instalación de los paneles solares en nuestro Parque Generador Comunitario.

                    Un paso más cerca de un futuro más sostenible para nuestra comunidad
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
        <div className="grid grid-flow-col justify-stretch py-20">
          <div className="flex justify-center col-md-4">
            <Card className={"max-w-[400px] " + styles.cardnews}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  src="src/assets/Logo-3.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    COOPTECH FUE PRENSENTADO EN BUENOS AIRES
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Nos complace enormemente compartir una noticia que llena de orgullo a toda la familia CoopMorteros.

                    Egresado de la carrera de Ingeniería Electrónica, Lorenzo Depetris alcanzó el mejor promedio (9.14) en el rango de ingenierías de UTN San Francisco.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="flex justify-center col-md-4">
            <Card className={"max-w-[400px] " + styles.cardnews}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  src="src/assets/Logo-3.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    SE LANZA COOPTECH PARA EMPRESAS
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Avanzamos con la instalación de los paneles solares en nuestro Parque Generador Comunitario.

                    Un paso más cerca de un futuro más sostenible para nuestra comunidad
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifpremios;
