import { useState } from "react";

export const useDeleteAlumno = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedAlumno, setSelectedAlumno] = useState(null);
  const [saving, setSaving] = useState(false);

  const handleDeleteOpen = (alumno) => {
    setSelectedAlumno(alumno);
    setOpenDelete(true);
  };

  const handleClose = () => {
    setOpenDelete(false);
    setSelectedAlumno(null);
  };

  const handleDelete = async () => {
    setSaving(true);
    // Llamar al service DELETE aquí
    console.log("Eliminando alumno:", selectedAlumno.id);
    setTimeout(() => {
      setSaving(false);
      setOpenDelete(false);
    }, 1000);
  };

  return { openDelete, selectedAlumno, saving, handleDeleteOpen, handleClose, handleDelete };
};