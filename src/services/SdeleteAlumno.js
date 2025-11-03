const BASE_URL = import.meta.env.VITE_BASE_URL;

export const deleteAlumno = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/estudiantes/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar alumno");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};