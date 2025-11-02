import React from "react";
import {
  Box,
  TextField,
  Button,
  Paper,
  Container,
  Alert,
  CircularProgress,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Chip,
  OutlinedInput,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Send as SendIcon } from "@mui/icons-material";
import { useCargarAlumnos } from "./hook/useCargarAlumno";

const CargarAlumnos = () => {
  const {
    formData,
    errors,
    loading,
    handleChange,
    handleCursosChange,
    handleSubmit,
  } = useCargarAlumnos();

  const cursosOpciones = ["Arte", "Matemática", "Historia", "Ciencias"];

  return (
    <Container
      sx={{
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
      }}
    >
      <Paper className="gestion-form-container">
        <Box sx={{ textAlign: "center" }}>
          <InboxIcon sx={{ fontSize: 88, mb: 2 }} />
          <h2>Formulario de Consulta</h2>
          <p>Complete el formulario para enviar su consulta.</p>
        </Box>

        {errors.submit && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {errors.submit}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid className="gestion-form-grid">
            {/* Nombre */}
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

            {/* Apellido */}
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

            {/* Mail */}
            <Grid item>
              <TextField
                fullWidth
                label="Correo electrónico"
                name="mail"
                value={formData.mail}
                onChange={handleChange}
                error={!!errors.mail}
                helperText={errors.mail}
                required
              />
            </Grid>

            {/* Cursos */}
            <Grid item>
              <FormControl
                fullWidth
                required
                error={!!errors.cursos}
                variant="outlined"
              >
                <InputLabel id="cursos-label">Curso(s)</InputLabel>
                <Select
                  labelId="cursos-label"
                  name="cursos"
                  multiple
                  value={formData.cursos}
                  onChange={handleCursosChange}
                  input={<OutlinedInput label="Curso(s)" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
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
                  <Box sx={{ color: "#d32f2f", fontSize: "0.75rem", mt: 1 }}>
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
                startIcon={
                  loading ? <CircularProgress size={20} /> : <SendIcon />
                }
              >
                {loading ? "Enviando..." : "Cargar nuevo alumno"}
              </Button>
            </Box>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default CargarAlumnos;