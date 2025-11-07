import React from "react";
import Social from "./Social";
import LocalFloristSharpIcon from "@mui/icons-material/LocalFloristSharp";
import { Paper, Box } from "@mui/material";

function Footer() {
  return (
    <Paper
      sx={{
        position: "fixed",     
        bottom: 0,             
        left: 0,
        width: "100vw",        
        textAlign: "center",
        alignItems: "center",
        color: "white",
        backgroundColor: "var(--color-verde-oscuro)", 
        padding: "0.5rem 0",
        zIndex: 1000,
        borderTop: "2px solid var(--color-rosa)", 
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
        <span>Gestor Escolar x Alcaraz Julieta</span>
        <LocalFloristSharpIcon sx={{ color: "var(--color-rosa)" }} />
      </Box>
    </Paper>
  );
}

export default Footer;
