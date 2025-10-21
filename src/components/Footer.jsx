import React from "react";
import Social from "./Social";
import LocalFloristSharpIcon from "@mui/icons-material/LocalFloristSharp";
import { Paper, Box } from "@mui/material";

function Footer() {
  return (
    <Paper
      sx={{
        position: "fixed",      // 👈 Fija el footer
        bottom: 0,              // 👈 Lo coloca al fondo
        left: 0,
        width: "100vw",         // Ocupa todo el ancho de la pantalla
        textAlign: "center",
        alignItems: "center",
        color: "white",
        backgroundColor: "var(--color-verde-oscuro)", // mantiene tu paleta
        padding: "0.5rem 0",
        zIndex: 1000,
        borderTop: "2px solid var(--color-rosa)", // pequeño detalle estético
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
