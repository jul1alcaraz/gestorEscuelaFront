import React, { useState } from "react";
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

const CargarAlumnos = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    mail: "",
    cursos: [],
    consulta: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Manejar cambio del campo "cursos" (múltiple)
  const handleCursosChange = (event) => {
    const { value } = event.target;
    setFormData((prev) => ({
      ...prev,
      cursos: typeof value === "string" ? value.split(",") : value,
    }));

    if (errors.cursos) {
      setErrors((prev) => ({
        ...prev,
        cursos: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = "El nombre debe tener al menos 2 caracteres";
    }

    if (!formData.apellido.trim()) {
      newErrors.apellido = "El apellido es obligatorio";
    } else if (formData.apellido.trim().length < 2) {
      newErrors.apellido = "El apellido debe tener al menos 2 caracteres";
    }

    if (!formData.mail.trim()) {
      newErrors.mail = "El mail es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.mail.trim())) {
      newErrors.mail = "El mail no es válido";
    }

    if (!formData.cursos.length) {
      newErrors.cursos = "Debe seleccionar al menos un curso";
    }

    if (!formData.consulta.trim()) {
      newErrors.consulta = "La consulta es obligatoria";
    } else if (formData.consulta.trim().length < 10) {
      newErrors.consulta = "La consulta debe tener al menos 10 caracteres";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    setErrors({});
    console.log("Datos enviados:", formData);

    // Simulación de envío
    setTimeout(() => {
      setLoading(false);
      alert("Consulta enviada correctamente ✅");
    }, 1500);
  };

  // Opciones disponibles para los cursos
  const cursosOpciones = ["Arte", "Matemática", "Historia", "Ciencias"];

  return (
    <Container>
      <Paper className="radiology-form-container">
        <Box sx={{ textAlign: "center" }}>
          <InboxIcon
            sx={{ fontSize: 48, color: "var(--radiology-yellow)", mb: 2 }}
          />
          <h2 className="radiology-subtitle">Formulario de Consulta</h2>
          <p className="radiology-subtitle2">
            Complete el formulario para enviar su consulta.
          </p>
        </Box>

        {errors.submit && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {errors.submit}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid className="radiology-form-grid">
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
                variant="outlined"
                required
                inputProps={{ maxLength: 50 }}
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
                variant="outlined"
                required
                inputProps={{ maxLength: 50 }}
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
                variant="outlined"
                required
                inputProps={{ maxLength: 100 }}
              />
            </Grid>

            {/* Cursos (selector múltiple) */}
            <Grid item>
              <FormControl fullWidth variant="outlined" required error={!!errors.cursos}>
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

          <Grid className="radiology-button-container">
            <Box>
              <Button
                item
                className="radiology-button-success-box"
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
