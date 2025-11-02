import { useEffect, useState } from "react";
import { getTodosLosAlumnos } from "../../../services/SgetAlumnos";

export const useTodosLosAlumnos = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getTodosLosAlumnos();

        const alumnosConId = data.map((alumno) => ({
          ...alumno,
          id: alumno._id,
        }));

        setRows(alumnosConId);
        setError(null);
      } catch (error) {
        console.error("Error al cargar alumnos:", error);
        setError("No se pudieron cargar los alumnos. Verifica la conexión con la API.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { rows, loading, error };
};