import { useEffect, useState } from "react";
import { getAlumnosPorCurso } from "../../../services/SgetAlumnos";

export const useAlumnosPorCurso = (curso) => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!curso) return; // No hace nada si no hay curso seleccionado

    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getAlumnosPorCurso(curso);

        // Agregamos un campo "id" para DataGrid
        const alumnosConId = data.map((alumno) => ({
          ...alumno,
          id: alumno._id,
        }));

        setRows(alumnosConId);
        setError(null);
      } catch (error) {
        console.error("Error al cargar alumnos por curso:", error);
        setError(
          "No se pudieron cargar los alumnos. Verifica la conexión con la API."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [curso]);

  return { rows, loading, error };
};