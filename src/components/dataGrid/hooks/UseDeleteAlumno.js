import { useState } from "react";
import { deleteAlumno } from '../../../services/SdeleteAlumno'

export const useDeleteAlumno = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedAlumno, setSelectedAlumno] = useState(null);
  const [saving, setSaving] = useState(false);
    const [isResponseOk, setIsResponseOk] = useState(false);

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
    const response = deleteAlumno(selectedAlumno.nombre);
    console.log("Eliminando alumno:", selectedAlumno.nombre);
    setTimeout(() => {
      setSaving(false);
      setOpenDelete(false);
    }, 1000);
  };

  return { openDelete, selectedAlumno, saving, handleDeleteOpen, handleClose, handleDelete };
};