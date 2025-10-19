import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";

export default function Cursos() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        padding: 2,
        flexWrap: "wrap", // Para que se adapte en pantallas pequeñas
      }}
    >
      <Card sx={{ maxWidth: 345, flex: "1 1 300px" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Matemática
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345, flex: "1 1 300px" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Historia
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345, flex: "1 1 300px" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ciencias
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345, flex: "1 1 300px" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Arte
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
