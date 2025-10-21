import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
  Paper,
  IconButton,
  Box,
  Button,
  Tooltip,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link } from 'react-router-dom';

// 🎯 Input oculto (para carga de archivos si lo necesitás después)
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

// Funciones de acción
const handleEdit = (row) => {
  console.log('Editar:', row);
};

const handleDelete = (id) => {
  console.log('Borrar ID:', id);
};

// Columnas de la tabla
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Nombre', flex: 1 },
  { field: 'lastName', headerName: 'Apellido', flex: 1 },
  { field: 'email', headerName: 'Mail', flex: 1.5 },
  { field: 'course', headerName: 'Curso', flex: 1 },
  {
    field: 'actions',
    headerName: 'Acciones',
    width: 130,
    sortable: false,
    renderCell: (params) => (
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Tooltip title="Editar alumno">
          <IconButton
            size="small"
            sx={{
              color: 'var(--color-verde-oscuro)',
              transition: '0.2s',
              '&:hover': {
                backgroundColor: 'rgba(0, 128, 0, 0.1)',
              },
            }}
            onClick={() => handleEdit(params.row)}
          >
            <EditIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Eliminar alumno">
          <IconButton
            size="small"
            sx={{
              color: '#d32f2f',
              transition: '0.2s',
              '&:hover': {
                backgroundColor: 'rgba(211, 47, 47, 0.1)',
              },
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

// 📦 Datos de ejemplo
const rows = [
  { id: 1, firstName: 'Jon', lastName: 'Snow', email: 'jon@snow.com', course: 'Historia' },
  { id: 2, firstName: 'Cersei', lastName: 'Lannister', email: 'cersei@lannister.com', course: 'Política' },
  { id: 3, firstName: 'Arya', lastName: 'Stark', email: 'arya@stark.com', course: 'Arte' },
];


export default function TodosLosAlumnos() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        gap: 3,
        backgroundColor: '#f9fafb',
        padding: 3,
      }}
    >
      {/* Título */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: 600,
          color: 'var(--color-rosa)',
          fontFamily: 'Poppins, sans-serif',
          textAlign: 'center',
        }}
      >
        Lista de Alumnos
      </Typography>

      {/* Botón de carga */}
      <Button
        component={Link}
        to="/Cargar"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        sx={{
          backgroundColor: 'var(--color-verde-oscuro)',
          color: 'white',
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 2,
          px: 3,
          py: 1,
          '&:hover': {
            backgroundColor: 'var(--color-verde-claro)',
          },
        }}
      >
        Cargar nuevos alumnos
      </Button>

      {/* Tabla */}
      <Paper
        elevation={5}
        sx={{
          width: '90%',
          height: 420,
          border: '2px solid var(--color-verde-oscuro)',
          borderRadius: 3,
          overflow: 'hidden',
          backgroundColor: 'black',
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { page: 0, pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{
            border: 'none',
            color: 'var(--color-verde-oscuro)',
            fontFamily: 'Poppins, sans-serif',
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: 'var(--color-verde-oscuro)',
              color: 'black',
              fontWeight: 600,
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: 'rgba(0, 128, 0, 0.04)',
            },
          }}
        />
      </Paper>
    </Box>
  );
}
