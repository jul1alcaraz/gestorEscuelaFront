import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  CircularProgress,
  Box,
  Chip,
  Autocomplete,
} from "@mui/material";

const cursosDisponibles = ["Arte", "Matemática", "Historia", "Ciencias"];

export default function DialogEditarAlumno({ 
  open, 
  onClose, 
  formData, 
  saving, 
  onChange, 
  onCursosChange, // Nueva prop
  onSave 
}) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Editar Alumno</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={onChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Apellido"
          name="apellido"
          value={formData.apellido}
          onChange={onChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Email"
          name="email"
          value={formData.email}
          onChange={onChange}
          fullWidth
        />

        <Box mt={2}>
          <Autocomplete
            multiple
            options={cursosDisponibles}
            value={formData.cursos}
            onChange={(event, newValue) => onCursosChange(newValue)} // Usar la nueva función
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  label={option}
                  {...getTagProps({ index })}
                  key={option}
                  color="primary"
                />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} label="Cursos" placeholder="Selecciona cursos" />
            )}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">
          Cancelar
        </Button>
        <Button onClick={onSave} variant="contained" disabled={saving}>
          {saving ? <CircularProgress size={24} /> : "Guardar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}