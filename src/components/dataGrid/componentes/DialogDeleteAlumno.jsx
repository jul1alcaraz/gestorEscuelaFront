import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";

export default function DialogDeleteAlumno({ open, onClose, alumno, saving, onDelete }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Eliminar Alumno🚮</DialogTitle>

      <DialogContent>
        <Typography>
          ¿Estás seguro de eliminar a{" "}
          <b>{alumno?.nombre} {alumno?.apellido}</b>?
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} disabled={saving}>
          Cancelar
        </Button>
        <Button
          onClick={onDelete}
          variant="contained"
          color="error"
          disabled={saving}
        >
          {saving ? <CircularProgress size={20} /> : "Eliminar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
