import { useState } from "react";
import { postAlumno } from "../../../services/SpostAlumno";

export const useCargarAlumnos = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    cursos: [],
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ open: false, message: "", severity: "success" });

  // --- Validar el formulario ---
  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!formData.apellido.trim()) newErrors.apellido = "El apellido es obligatorio";
    if (!formData.email.trim()) newErrors.email = "El correo es obligatorio";
    if (!formData.cursos.length) newErrors.cursos = "Seleccione al menos un curso";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- Manejadores de cambio ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCursosChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      cursos: typeof value === "string" ? value.split(",") : value,
    }));
  };

  // --- Enviar formulario ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await postAlumno(formData);

      // ✅ Mostrar toast de éxito
      setToast({ open: true, message: "✅ Alumno cargado con éxito", severity: "success" });

      // Resetear formulario
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        cursos: [],
      });
      setErrors({});
    } catch (error) {
      console.error("Error al cargar alumno:", error);

      // ❌ Mostrar toast de error
      setToast({
        open: true,
        message: "Error al cargar el alumno. Intente nuevamente.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    errors,
    loading,
    toast,
    setToast,
    handleChange,
    handleCursosChange,
    handleSubmit,
  };
};
