import { useState } from "react";
import { updateAlumno } from "../../../services/SputAlumnos";

export const useEditAlumno = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedAlumno, setSelectedAlumno] = useState(null);
  const [formData, setFormData] = useState({ nombre: "", apellido: "", email: "", cursos: "" });
  const [saving, setSaving] = useState(false);

  const handleEditOpen = (alumno) => {
    setSelectedAlumno(alumno);
    setFormData({ ...alumno });
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

  const handleSave = async (onSuccessCallback) => {
    setSaving(true);
    try {
      const response = await updateAlumno(formData._id, formData);
      console.log("Respuesta actualización:", response);
      
      // Cerramos el diálogo
      setOpenEdit(false);
      
      // Ejecutamos el callback que pasamos desde el componente padre
      if (onSuccessCallback) {
        onSuccessCallback("Alumno actualizado exitosamente");
      }
    } catch (error) {
      console.error("Error al actualizar alumno:", error);
    } finally {
      setSaving(false);
    }
  };

  return { openEdit, selectedAlumno, formData, saving, handleEditOpen, handleClose, handleFormChange, handleSave };
};