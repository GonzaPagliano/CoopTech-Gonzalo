import React, { useState } from "react";
import styles from "./tarjeta.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


// Modal

// import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";



const Tarjeta = ({ nombre,img, icono, descripcion, link }) => {


  return (
    <>
      <Card className={"max-w-[340px] " + styles.cardgeneral}>
        <CardMedia
          sx={{ height: 150, border: "black" }}
          image={img}
          title="Oficina Virtual"
        />
        <CardContent className="text-white">
          <Typography gutterBottom variant="h5" component="div">
            {icono} {nombre}
          </Typography>
          <Typography variant="body2" color="text.white">
            {descripcion}
          </Typography>
        </CardContent>
        <CardActions className="flex justify-center">
          <Button
           
            className={"text-white " + styles.botoncard}
            variant="contained"
            disableElevation
          >
            Ver Más
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Tarjeta;
