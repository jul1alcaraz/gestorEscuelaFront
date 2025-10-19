import './App.css'
import Categorias from './pages/categorias/categorias'
import Cursos from './pages/cursos/Cursos'
import Home from './pages/home/home'
import CargarAlumnos from './pages/nuevoAlumnos/CargarAlumnos'
import TodosLosAlumnos from './pages/TodosLosAlumnos/TodosLosAlumnos'


function App() {
  return (
  <div>
    <Home/>
    <Categorias/>
    <TodosLosAlumnos/>
    <Cursos/>
    <CargarAlumnos/>

  
  </div>
)
}

export default App
