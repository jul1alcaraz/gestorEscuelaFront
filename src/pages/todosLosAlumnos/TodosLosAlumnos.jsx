import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Paper,
  IconButton,
  Box,
  Button,
  Tooltip,
  Typography,
  Alert,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Link, useNavigate } from "react-router-dom";
import { useTodosLosAlumnos } from "../todosLosAlumnos/hooks/useTodosLosAlumnos";

export default function TodosLosAlumnos() {
  const { rows, loading, error } = useTodosLosAlumnos();
  const navigate = useNavigate(); 

  // 👉 Función para editar
  const handleEdit = (row) => {
    console.log("Editar:", row);
   {/*navigate(`/editar/${row.id}`); // ✅ Redirige correctamente al formulario*/}
  };

  // 👉 Función para eliminar
  const handleDelete = (id) => {
    console.log("Eliminar ID:", id);
    // Aquí podés luego agregar la lógica de eliminación con fetch DELETE
  };

  // 👉 Columnas
  const columns = [
    { field: "nombre", headerName: "Nombre", flex: 1 },
    { field: "apellido", headerName: "Apellido", flex: 1 },
    { field: "email", headerName: "Mail", flex: 1.5 },
    { field: "cursos", headerName: "Curso", flex: 1 },
    {
      field: "actions",
      headerName: "Acciones",
      width: 130,
      sortable: false,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Tooltip title="Editar alumno">
            <IconButton
              size="small"
              sx={{
                color: "var(--color-verde-oscuro)",
                transition: "0.2s",
                "&:hover": { backgroundColor: "rgba(0, 128, 0, 0.1)" },
              }}
              onClick={() => handleEdit(params.row)} // ✅ ahora funciona
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Eliminar alumno">
            <IconButton
              size="small"
              sx={{
                color: "#d32f2f",
                transition: "0.2s",
                "&:hover": { backgroundColor: "rgba(211, 47, 47, 0.1)" },
              }}
              onClick={() => handleDelete(params.row.id)}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        gap: 3,
        padding: 3,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 600,
          color: "var(--color-rosa)",
          fontFamily: "Poppins, sans-serif",
          textAlign: "center",
        }}
      >
        Lista de Alumnos
      </Typography>

      <Button
        component={Link}
        to="/Cargar"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        sx={{
          backgroundColor: "var(--color-verde-oscuro)",
          color: "white",
          textTransform: "none",
          fontWeight: 500,
          borderRadius: 2,
          px: 3,
          py: 1,
          "&:hover": {
            backgroundColor: "var(--color-verde-claro)",
          },
        }}
      >
        Cargar nuevos alumnos
      </Button>

      {error && (
        <Alert severity="error" sx={{ width: "90%" }}>
          {error}
        </Alert>
      )}

      <Paper
        elevation={5}
        sx={{
          width: "90%",
          height: 420,
          border: "2px solid var(--color-verde-oscuro)",
          borderRadius: 3,
          overflow: "hidden",
          backgroundColor: "black",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading}
          initialState={{
            pagination: { paginationModel: { page: 0, pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{
            border: "none",
            color: "var(--color-verde-oscuro)",
            fontFamily: "Poppins, sans-serif",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "var(--color-verde-oscuro)",
              color: "black",
              fontWeight: 600,
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "rgba(0, 128, 0, 0.04)",
            },
          }}
        />
      </Paper>
    </Box>
  );
}
