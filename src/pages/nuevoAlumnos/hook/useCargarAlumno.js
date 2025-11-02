import { useState } from "react";

export const useCargarAlumnos = () => {
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
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCursosChange = (event) => {
    const { value } = event.target;
    setFormData((prev) => ({
      ...prev,
      cursos: typeof value === "string" ? value.split(",") : value,
    }));

    if (errors.cursos) {
      setErrors((prev) => ({ ...prev, cursos: "" }));
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

    setTimeout(() => {
      setLoading(false);
      alert("Consulta enviada correctamente ✅");
    }, 1500);
  };

  return {
    formData,
    errors,
    loading,
    handleChange,
    handleCursosChange,
    handleSubmit,
  };
};