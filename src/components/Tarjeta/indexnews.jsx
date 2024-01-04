import React, { useState } from "react";
import styles from "./tarjeta.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";

// Modal

// import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";

const Tarjetanews = ({ nombre, img, descripcion, link }) => {
  return (
    <>
      <Card className={"max-w-[400px] " + styles.cardnews}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
            {nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {descripcion}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Tarjetanews;
