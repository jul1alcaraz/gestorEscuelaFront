import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper, Box, Typography, Tooltip, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DialogEditAlumno from "./componentes/DialogEditAlumno";
import DialogDeleteAlumno from "./componentes/DialogDeleteAlumno";
import { useEditAlumno } from "../dataGrid/hooks/UseEditAlumno";
import { useDeleteAlumno } from "../dataGrid/hooks/UseDeleteAlumno";

export default function AlumnosDataGrid({ rows, loading, title }) {
  const {
    openEdit,
    selectedAlumno,
    formData,
    saving,
    handleEditOpen,
    handleClose,
    handleFormChange,
    handleSave,
  } = useEditAlumno();
  const { openDelete, handleDeleteOpen, handleDelete } = useDeleteAlumno();

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
              sx={{ color: "var(--color-verde-oscuro)" }}
              onClick={() => handleEditOpen(params.row)}
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Eliminar alumno">
            <IconButton
              size="small"
              sx={{ color: "#d32f2f" }}
              onClick={() => handleDeleteOpen(params.row)}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ width: "90%", margin: "0 auto" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginBottom: 2, fontWeight: 600 }}
      >
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

      <DialogEditAlumno
        open={openEdit}
        onClose={handleClose}
        alumno={selectedAlumno}
        formData={formData}
        saving={saving}
        onChange={handleFormChange}
        onSave={handleSave}
      />
      <DialogDeleteAlumno
        open={openDelete}
        onClose={handleClose}
        alumno={selectedAlumno}
        saving={saving}
        onDelete={handleDelete}
      />
    </Box>
  );
}
