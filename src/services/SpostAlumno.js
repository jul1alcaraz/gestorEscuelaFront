const BASE_URL = `${import.meta.env.VITE_BASE_URL}/estudiantes`;

export const postAlumno = async (body) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error al cargar el alumno: ${errorText}`);
    }

    const data = await response.json();
    console.log("Alumno creado con éxito:", data);
    return data;
  } catch (error) {
    console.error("Error en postAlumno:", error);
    throw error;
  }
};
