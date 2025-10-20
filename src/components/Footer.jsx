import React from "react";
import Social from "./Social";
import LocalFloristSharpIcon from "@mui/icons-material/LocalFloristSharp";
import { Paper, Box } from "@mui/material";

function Footer() {
  return (
    <Paper
    
      sx={{
        width: "100vw", // Cambio: 100vw en lugar de 100%
        top: 10,
        textAlign: "center",
        alignItems: "center",
        color: "white",
        zIndex: 1000,
      }}
      square
      variant="outlined"
    >
      <Social />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <span>Gestor Escolar</span>
        <LocalFloristSharpIcon />
      </Box>
    </Paper>
  );
}

export default Footer;