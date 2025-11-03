import { useState } from "react";

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

  const handleSave = async () => {
    setSaving(true);
    // Llamar al service PUT aquí
    console.log("Actualizando alumno:", formData);
    setTimeout(() => {
      setSaving(false);
      setOpenEdit(false);
    }, 1000);
  };

  return { openEdit, selectedAlumno, formData, saving, handleEditOpen, handleClose, handleFormChange, handleSave };
};