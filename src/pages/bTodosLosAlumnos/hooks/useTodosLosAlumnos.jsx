import { useEffect, useState } from "react";
import { getTodosLosAlumnos } from "../../../services/SgetAlumnos";
import { useSearch } from "../../../context/SearchContext";

export const useTodosLosAlumnos = () => {
  const { searchTerm } = useSearch();
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

        // ✅ Filtrar por nombre o apellido si hay búsqueda
        const filtrados = searchTerm
          ? alumnosConId.filter((a) =>
              `${a.nombre} ${a.apellido}`
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            )
          : alumnosConId;

        setRows(filtrados);
        setError(null);
      } catch (error) {
        console.error("Error al cargar alumnos:", error);
        setError("No se pudieron cargar los alumnos. Verifica la conexión con la API.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]); // 👈 se vuelve a ejecutar al buscar

  return { rows, loading, error };
};
