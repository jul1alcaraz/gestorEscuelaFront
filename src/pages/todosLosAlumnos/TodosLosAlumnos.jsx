import React from "react";
import { useTodosLosAlumnos } from "../todosLosAlumnos/hooks/useTodosLosAlumnos";
import AlumnosGrid from "../../components/dataGrid/AlumnosDataGrid";

export default function TodosLosAlumnos() {
  const { rows, loading, error } = useTodosLosAlumnos();

  const handleEdit = (row) => console.log("Editar:", row);
  const handleDelete = (id) => console.log("Eliminar ID:", id);

  return (
    <>
      {error && <div>{error}</div>}
      <AlumnosGrid
        rows={rows}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
        title="Lista de Alumnos"
      />
    </>
  );
}