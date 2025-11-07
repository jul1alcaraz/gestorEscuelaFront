import React from "react";
import {  Box, TextField, Button, Paper, Container, CircularProgress, Grid, MenuItem,
  Select, InputLabel, FormControl, Chip, OutlinedInput, Snackbar, Alert,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Send as SendIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useCargarAlumnos } from "./hook/useCargarAlumno";

const CargarAlumnos = () => {
  const {
    formData,
    errors,
    loading,
    toast,
    setToast,
    handleChange,
    handleCursosChange,
    handleSubmit,
  } = useCargarAlumnos();

  const cursosOpciones = ["Arte", "Matemática", "Historia", "Ciencias"];

  return (
    <Container sx={{ alignItems: "center", justifyContent: "center", minHeight: "80vh" }} >
      <Paper>
        <Box sx={{ textAlign: "center" }}>
          <InboxIcon sx={{ fontSize: 88, mb: 2 }} />
          <h2>Formulario de Carga</h2>
          <p>Complete el formulario para agregar un nuevo alumno 📝.</p>
        </Box>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid className="gestion-form-grid">
            <Grid item>
              <TextField
                fullWidth
                label="Nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                error={!!errors.nombre}
                helperText={errors.nombre}
                required
              />
            </Grid>

            <Grid item>
              <TextField
                fullWidth
                label="Apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                error={!!errors.apellido}
                helperText={errors.apellido}
                required
              />
            </Grid>

            <Grid item>
              <TextField
                fullWidth
                label="Correo electrónico"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                required
              />
            </Grid>

            <Grid item>
              <FormControl fullWidth required error={!!errors.cursos} variant="outlined">
                <InputLabel id="cursos-label" >Curso(s)</InputLabel>
                <Select 
                  labelId="cursos-label"
                  name="cursos"
                  multiple
                  value={formData.cursos}
                  onChange={handleCursosChange}
                  input={<OutlinedInput label="Curso(s)" />}
                  renderValue={(selected) => (

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }} >
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {cursosOpciones.map((curso) => (
                    <MenuItem key={curso} value={curso}>
                      {curso}
                    </MenuItem>
                  ))}
                </Select>
                {errors.cursos && (
                  <Box sx={{ color: "#d32f2f", fontSize: "0.75rem", mt: 1 }}  >
                    {errors.cursos}
                  </Box>
                )}
              </FormControl>
            </Grid>
          </Grid>

          <Grid className="gestion-button-container">
            <Box>
              <Button
                className="gestion-button-success-box"
                type="submit"
                disabled={loading}
                startIcon={loading ? <CircularProgress size={20} /> : <SendIcon />}
              >
                {loading ? "Enviando..." : "Cargar nuevo alumno"}
              </Button>
            </Box>
          </Grid>
        </Box>
      </Paper>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button
          component={Link}
          to="/TodosLosAlumnos"
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
          Ver todos los alumnos
        </Button>
      </Box>

      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={() => setToast({ ...toast, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setToast({ ...toast, open: false })}
          severity={toast.severity}
          sx={{ width: "100%" }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CargarAlumnos;
