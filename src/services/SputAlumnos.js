const BASE_URL = import.meta.env.VITE_BASE_URL;

export const updateAlumno = async (id, data) => {
  try {
    const response = await fetch(`${BASE_URL}/estudiantes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Error al actualizar alumno");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
