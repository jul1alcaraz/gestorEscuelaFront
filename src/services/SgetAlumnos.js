const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getTodosLosAlumnos = async () => {
  try {
    const response = await fetch(`${BASE_URL}/estudiantes`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Error en getTodosLosAlumnos:", error);
    throw error;
  }
};

export const getAlumnosPorCurso = async (curso) => {
  try {
    const response = await fetch(`${BASE_URL}/estudiantes?curso=${encodeURIComponent(curso)}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Error en getAlumnosPorCurso:", error);
    throw error;
  }
};