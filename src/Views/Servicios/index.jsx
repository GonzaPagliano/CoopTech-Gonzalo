import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./services.module.css";
import HubIcon from '@mui/icons-material/Hub';

const MediaCard = () => {
  return (
    <>
    
    <div className="w-screen w-full flex justify-evenly p-8">
      <Card sx={{ maxWidth: 345, background: "#278e9b", boxShadow: "black 8px 7px 27.5px" }}>
        <CardMedia
          sx={{ height: 150, border: "black" }}
          image="src/assets/Coop Tech inicial_page-0001.jpg"
          title="Oficina Virtual"
        />
        <CardContent className="text-white">
          <Typography gutterBottom variant="h5" component="div">
            <HubIcon/> Oficina Virtual
          </Typography>
          <Typography variant="body2" color="text.white">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions >
          <Button size="small">Ver Más</Button>
        </CardActions>
      </Card>
      {/* ------ */}
      <Card sx={{ maxWidth: 345, background: "#278e9b", boxShadow: "black 8px 7px 27.5px" }}>
        <CardMedia
          sx={{ height: 150 }}
          image="src/assets/Coop Tech inicial_page-0001.jpg"
          title="Reconecta"
        />
        <CardContent className="text-white">
          <Typography gutterBottom variant="h5" component="div">
          <HubIcon/> Reconecta
          </Typography>
          <Typography variant="body2" color="text.white">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Ver Más</Button>
        </CardActions>
      </Card>
      {/* ------ */}
      <Card sx={{ maxWidth: 345, background: "#278e9b", boxShadow: "black 8px 7px 27.5px" }}>
        <CardMedia
          sx={{ height: 150 }}
          image="src/assets/Coop Tech inicial_page-0001.jpg"
          title="+ Agua"
        />
        <CardContent className="text-white">
          <Typography
            gutterBottom
            color="text.white"
            variant="h5"
            component="div"
          >
           <HubIcon/> + Agua
          </Typography>
          <Typography variant="body2" color="text.white">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Ver Más</Button>
        </CardActions>
      </Card>
    </div>

    {/* ----- */}
    <div className="w-screen w-full flex justify-evenly p-8">
      <Card sx={{ maxWidth: 345, background: "#278e9b", boxShadow: "black 8px 7px 27.5px" }}>
        <CardMedia
          sx={{ height: 150, border: "black" }}
          image="src/assets/Coop Tech inicial_page-0001.jpg"
          title="Oficina Virtual"
        />
        <CardContent className="text-white">
          <Typography gutterBottom variant="h5" component="div">
            <HubIcon/> Cloud Services
          </Typography>
          <Typography variant="body2" color="text.white">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions >
          <Button size="small">Ver Más</Button>
        </CardActions>
      </Card>
      {/* ------ */}
      <Card sx={{ maxWidth: 345, background: "#278e9b", boxShadow: "black 8px 7px 27.5px" }}>
        <CardMedia
          sx={{ height: 150 }}
          image="src/assets/Coop Tech inicial_page-0001.jpg"
          title="Reconecta"
        />
        <CardContent className="text-white">
          <Typography gutterBottom variant="h5" component="div">
          <HubIcon/> Provisión
          </Typography>
          <Typography variant="body2" color="text.white">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Ver Más</Button>
        </CardActions>
      </Card>
      {/* ------ */}
      <Card sx={{ maxWidth: 345, background: "#278e9b", boxShadow: "black 8px 7px 27.5px" }}>
        <CardMedia
          sx={{ height: 150 }}
          image="src/assets/Coop Tech inicial_page-0001.jpg"
          title="+ Agua"
        />
        <CardContent className="text-white">
          <Typography
            gutterBottom
            color="text.white"
            variant="h5"
            component="div"
          >
            <HubIcon/> Desarrollos Especiales
          </Typography>
          <Typography variant="body2" color="text.white">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Ver Más</Button>
        </CardActions>
      </Card>
    </div>

    </>
  );
};
export default MediaCard;
