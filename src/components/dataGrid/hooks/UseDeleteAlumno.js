import { useState } from "react";
import { deleteAlumno } from "../../../services/SdeleteAlumno";
import { useNavigate, useLocation } from "react-router-dom";

export const useDeleteAlumno = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedAlumno, setSelectedAlumno] = useState(null);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleDeleteOpen = (alumno) => {
    setSelectedAlumno(alumno);
    setOpenDelete(true);
  };

  const handleClose = () => {
    setOpenDelete(false);
    setSelectedAlumno(null);
  };

  const handleDelete = async (onSuccessCallback) => {
    if (!selectedAlumno) return;
    setSaving(true);
    try {
      const response = await deleteAlumno(selectedAlumno._id); 
      console.log("Respuesta eliminación:", response);

      setOpenDelete(false);

      if (onSuccessCallback) {
        onSuccessCallback(
          `Alumno ${selectedAlumno.nombre} ${selectedAlumno.apellido} eliminado correctamente`
        );
      }

      setTimeout(() => {
        navigate(location.pathname, { replace: true, state: { refresh: Date.now() } });
      }, 1000);
    } catch (error) {
      console.error("Error al eliminar alumno:", error);
    } finally {
      setSaving(false);
    }
  };

  return { openDelete, selectedAlumno, saving, handleDeleteOpen, handleClose, handleDelete };
};
