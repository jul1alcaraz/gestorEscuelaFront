import React from "react";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useTodosLosAlumnos } from "./hooks/useTodosLosAlumnos";
import AlumnosGrid from "../../components/dataGrid/AlumnosDataGrid";

export default function TodosLosAlumnos() {
  const { rows, loading, error } = useTodosLosAlumnos();
  const handleEdit = (row) => console.log("Editar:", row);
  const handleDelete = (id) => console.log("Eliminar ID:", id);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: "80vh",
        padding: 2,
      }}
    >

      {error && <div style={{ color: "red" }}>{error}</div>}

      <AlumnosGrid
        rows={rows}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
        title="Lista de Alumnos" 
      />

      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button
          component={Link}
          to="/Cargar"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          sx={{
            backgroundColor: "var(--color-verde-oscuro)",
            "&:hover": { backgroundColor: "var(--color-verde-claro)" },
            color: "white",
            fontWeight: 500,
            textTransform: "none",
            px: 4,
            py: 1.5,
          }}
        >
          Cargar nuevos alumnos
        </Button>
      </Box>
    </Box>
  );
}