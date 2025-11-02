import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import AlumnosGrid from "../../components/dataGrid/AlumnosDataGrid";
import { useAlumnosPorCurso } from "./hook/useAlumnosPorCurso";

const cursos = ["Matemática", "Historia", "Ciencias", "Arte"];

export default function Cursos() {
  const [cursoSeleccionado, setCursoSeleccionado] = useState("");

  // Hook para traer los alumnos del curso seleccionado
  const { rows, loading, error } = useAlumnosPorCurso(cursoSeleccionado);

  const handleEdit = (row) => console.log("Editar:", row);
  const handleDelete = (id) => console.log("Eliminar ID:", id);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          padding: 2,
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "30vh",
        }}
      >
        {cursos.map((curso) => (
          <Card key={curso} className="card" sx={{ maxWidth: 345, flex: "1 1 300px" }}>
            <CardActionArea onClick={() => setCursoSeleccionado(curso)}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {curso}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>

      {/* DataGrid que muestra los alumnos del curso seleccionado */}
      {cursoSeleccionado && (
        <AlumnosGrid
          rows={rows}
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
          title={`Alumnos de ${cursoSeleccionado}`}
        />
      )}

      {/* Mensaje si no hay alumnos */}
      {cursoSeleccionado && !loading && rows.length === 0 && (
        <Typography variant="h6" sx={{ textAlign: "center", mt: 2 }}>
          No hay alumnos inscriptos en {cursoSeleccionado}.
        </Typography>
      )}

      {/* Error */}
      {error && (
        <Typography color="error" sx={{ textAlign: "center", mt: 2 }}>
          {error}
        </Typography>
      )}
    </>
  );
}
