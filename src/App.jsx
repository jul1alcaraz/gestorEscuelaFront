import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Categorias from "./pages/categorias/categorias";
import TodosLosAlumnos from "./pages/todosLosAlumnos/TodosLosAlumnos";
import Cursos from "./pages/cursos/Cursos";
import CargarAlumnos from "./pages/nuevoAlumnos/CargarAlumnos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext"
import "./App.css";



const App = () => {
  return (
    <ThemeProvider>
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Categorias />
            </>
          }
        />
        <Route path="/TodosLosAlumnos" element={<TodosLosAlumnos />} />
        <Route path="/Cursos" element={<Cursos />} />
        <Route path="/Cargar" element={<CargarAlumnos />} />
      </Routes>

      <Footer />
    </>
    </ThemeProvider>
  );
};

export default App;
