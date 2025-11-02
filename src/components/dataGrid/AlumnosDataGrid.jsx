import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper, Box, Typography, Tooltip, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AlumnosGrid({ rows, loading, onEdit, onDelete, title }) {
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
              onClick={() => onEdit(params.row)}
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
              onClick={() => onDelete(params.row.id)}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ width: "90%", margin: "0 auto", mt: 3 }}>
      <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
        {title}
      </Typography>

      <Paper sx={{ height: 420, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{
            border: "none",
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