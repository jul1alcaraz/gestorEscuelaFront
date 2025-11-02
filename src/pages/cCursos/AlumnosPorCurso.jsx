import React from "react";
import { useAlumnosPorCurso } from "../hooks/useAlumnosPorCurso";
import AlumnosGrid from "../components/AlumnosGrid/AlumnosGrid";
import { Alert, Typography } from "@mui/material";

export default function AlumnosPorCurso({ curso }) {
  const { rows, loading, error } = useAlumnosPorCurso(curso);

  const handleEdit = (row) => console.log("Editar:", row);
  const handleDelete = (id) => console.log("Eliminar ID:", id);

  if (!curso)
    return (
      <Typography variant="h6" sx={{ textAlign: "center", mt: 3 }}>
        Selecciona un curso para ver los alumnos
      </Typography>
    );

  return (
    <>
      {error && (
        <Alert severity="error" sx={{ width: "90%", margin: "0 auto", mt: 2 }}>
          {error}
        </Alert>
      )}

      <AlumnosGrid
        rows={rows}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
        title={`Alumnos de ${curso}`}
      />
    </>
  );
}