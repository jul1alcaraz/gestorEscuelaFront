Gestor Escolar

Es una aplicación web desarrollada con React + Material UI (MUI), diseñada para administrar a los alumnos y  cursos.

La app permite visualizar, agregar, editar y eliminar alumnos integrada con una API real alojada en Vercel.

🚀 Características principales

👩‍🏫 Gestión completa de alumnos — Listado dinámico con opciones para editar y eliminar.
❌ Eliminación con confirmación — Diálogo de seguridad antes de borrar registros.
📱 Diseño totalmente responsivo — Compatible con móviles, tablets y escritorio.
⚙️ Arquitectura modular y mantenible — Componentes reutilizables, hooks personalizados y servicios separados.
🌙 Modo oscuro y claro — Activación dinámica mediante tema global CSS.

🧩 Tecnologías utilizadas
Tipo        --Tecnología
Framework	--React 18 + Vite
UI Library	--Material UI (MUI v6)
Routing	React Router DOM v6
Backend	API REST desplegada en Vercel
HTTP	    --Fetch API con servicios (SgetAlumnos.js, SputAlumnos.js, SdeleteAlumnos.js)


🗂️ Estructura del proyecto
src/
├── components/
│   ├── BotonTheme.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   └── MenuDraer.jsx
|   └── dataGrid
|           |__Componentes
|            |       └──DialogDeleteAlumno.jsx
|            |       └──DialogEditAlumno.jsx
|           └──hooks
|            |    └──UseDeleteAlumno.js
|            |    └──UseDeleteAlumno.js
|            |
|            └──AlumnosDataGrid.jsx
│
├── context/
│   ├── SearchContext.jsx
│   └── ThemeContext.jsx
│
├── pages/
|      |__aHome
|      |    └──home.jsx
|      └──bTodosLosAlumnos
|      |    └──hooks
|      |    | | └──useTodosLosAlumnos.jsx
|      |    | └──TodosLosAlumnos.jsx
|      |    └──AlumnosDataGrid.jsx
|      └──cCursos
|      |    └──hooks
|      |    | | └──useAlumnosPorCurso.js
|      |    | └──AlumnosPorCurso.jsx
|      |    └──Cursos.jsx
|      └──dNuevoAlumnos
|      |    └──hooks
|      |    |  └──useCargarAlumno.js
|      |    └──CargarAlumnos.jsx
├── services/
│   ├── SdeleteAlumno.js
│   ├── SgetAlumnos.js
│   ├── SpostAlumno.js
│   └── SputAlumnos.js
│
|── App.css
|── App.jsx
└── main.jsx

⚙️ Cómo correr el proyecto

1️⃣ Clonar el repositorio

git clone <repo-url>


2️⃣ Instalar dependencias

npm install


3️⃣ Correr en entorno local

npm run dev

🧭 Rutas principales
Ruta	Descripción
/	Página principal con bienvenida e información general
/alumnos	Listado completo de alumnos
/alumnos/agregar	Alta de nuevos alumnos
/alumnos/editar/:id	Edición de alumno mediante diálogo
/alumnos/eliminar/:id	Eliminación con confirmación
/cursos	Administración de cursos disponibles