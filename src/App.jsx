import { Routes, Route } from "react-router-dom";
import Home from "./pages/aHome/home";
import TodosLosAlumnos from "./pages/bTodosLosAlumnos/TodosLosAlumnos";
import Cursos from "./pages/cCursos/Cursos";
import CargarAlumnos from "./pages/dNuevoAlumnos/CargarAlumnos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { SearchProvider } from "./context/SearchContext";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <SearchProvider>
      <>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
               
              </>
            }
          />

          {/* ✅ Listado de alumnos */}
          <Route path="/TodosLosAlumnos" element={<TodosLosAlumnos />} />

          {/* ✅ Cursos */}
          <Route path="/Cursos" element={<Cursos />} />

          {/* ✅ Cargar nuevo alumno */}
          <Route path="/Cargar" element={<CargarAlumnos />} />

          {/* ✅ Nueva ruta para editar alumno */}
         {/* <Route path="/editar/:id" element={<EditarAlumno />} ></Route>*/}
         
        </Routes>

        <Footer />
      </>
      </SearchProvider>
    </ThemeProvider>
  );
};

export default App;
