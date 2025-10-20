import * as React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Categorias() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        padding: 2,
        flexWrap: "wrap", 
        justifyContent: "center", 
      }}
    >
 
     <Card className="card" sx={{ maxWidth: 345, flex: "1 1 300px" }}>
        <CardActionArea component={Link} to="/TodosLosAlumnos">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Todos los alumnos
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      
     <Card className="card" sx={{ maxWidth: 345, flex: "1 1 300px" }}>
        <CardActionArea component={Link} to="/Cursos">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Cursos
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
