const BASE_URL = import.meta.env.VITE_BASE_URL;

export const deleteAlumno = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!response.ok) throw new Error("Error al eliminar alumno");
  return response.json();
};
