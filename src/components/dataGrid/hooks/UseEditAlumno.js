import { useState } from "react";
import { updateAlumno } from "../../../services/SputAlumnos";

export const useEditAlumno = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedAlumno, setSelectedAlumno] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    cursos: [],
  });
  const [saving, setSaving] = useState(false);

  const handleEditOpen = (alumno) => {
    setSelectedAlumno(alumno);
    setFormData({
      nombre: alumno.nombre || "",
      apellido: alumno.apellido || "",
      email: alumno.email || "",
      cursos: alumno.cursos || [],
    });
    setOpenEdit(true);
  };

  const handleClose = () => {
    setOpenEdit(false);
    setSelectedAlumno(null);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCursosChange = (newCursos) => {
    setFormData((prev) => ({ ...prev, cursos: newCursos }));
  };

  const handleSave = async (onSuccess) => {
    try {
      setSaving(true);
      await updateAlumno(selectedAlumno._id, formData); 
      onSuccess("Alumno actualizado correctamente");
      handleClose();
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
    } finally {
      setSaving(false);
    }
  };

  return {
    openEdit,
    selectedAlumno,
    formData,
    saving,
    handleEditOpen,
    handleClose,
    handleFormChange,
    handleCursosChange,
    handleSave,
  };
};