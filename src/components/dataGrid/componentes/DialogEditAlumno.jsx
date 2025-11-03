import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, CircularProgress } from "@mui/material";

export default function DialogEditAlumno({ open, onClose, alumno, formData, onChange, onSave, saving }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Editar Alumno</DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
        <TextField label="Nombre" name="nombre" value={formData.nombre} onChange={onChange} />
        <TextField label="Apellido" name="apellido" value={formData.apellido} onChange={onChange} />
        <TextField label="Email" name="email" value={formData.email} onChange={onChange} />
        <TextField label="Curso" name="cursos" value={formData.cursos} onChange={onChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={saving}>Cancelar</Button>
        <Button onClick={onSave} variant="contained" disabled={saving}>
          {saving ? <CircularProgress size={20} /> : "Guardar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}