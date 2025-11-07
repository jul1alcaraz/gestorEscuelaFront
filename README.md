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

# 🗂️ Estructura del Proyecto

## Árbol de Directorios

**src/**  
**├── components/**  
│   ├── BotonTheme.jsx  
│   ├── Footer.jsx  
│   ├── Header.jsx  
│   ├── MenuDrawer.jsx  
│   └── **dataGrid/**  
│       ├── **componentes/**  
│       │   ├── DialogDeleteAlumno.jsx  
│       │   └── DialogEditAlumno.jsx  
│       ├── **hooks/**  
│       │   ├── UseDeleteAlumno.js  
│       │   └── UseEditAlumno.js  
│       └── AlumnosDataGrid.jsx  
│  
**├── context/**  
│   ├── SearchContext.jsx  
│   └── ThemeContext.jsx  
│  
**├── pages/**  
│   ├── **aHome/**  
│   │   └── Home.jsx  
│   ├── **bTodosLosAlumnos/**  
│   │   ├── **hooks/**  
│   │   │   └── useTodosLosAlumnos.jsx  
│   │   └── TodosLosAlumnos.jsx  
│   ├── **cCursos/**  
│   │   ├── **hooks/**  
│   │   │   └── useAlumnosPorCurso.js  
│   │   ├── AlumnosPorCurso.jsx  
│   │   └── Cursos.jsx  
│   └── **dNuevoAlumno/**  
│       ├── **hooks/**  
│       │   └── useCargarAlumno.js  
│       └── CargarAlumnos.jsx  
│  
**├── services/**  
│   ├── SdeleteAlumno.js  
│   ├── SgetAlumnos.js  
│   ├── SpostAlumno.js  
│   └── SputAlumnos.js  
│  
├── App.css  
├── App.jsx  
└── main.jsx  


⚙️ Cómo correr el proyecto

1️⃣ Clonar el repositorio

git clone <https://github.com/jul1alcaraz/gestorEscuelaFront.git>


2️⃣ Instalar dependencias

npm install


3️⃣ Correr en entorno local

npm run dev

🧭 Rutas principales
Ruta	                    Descripción
/	                        Página principal con bienvenida e información general
/TodosLosAlumnos	        Listado completo de alumnos
/Cargar	                  Alta de nuevos alumnos
/Cursos	                  Administración de cursos disponibles


<img width="2879" height="1471" alt="image" src="https://github.com/user-attachments/assets/168694b2-34d2-485b-acb2-7aaa16c1a40e" />
<img width="2842" height="1458" alt="image" src="https://github.com/user-attachments/assets/99cd5a11-e6e3-42c1-a98f-97278b8a8667" />
<img width="2828" height="1461" alt="image" src="https://github.com/user-attachments/assets/20ab09eb-2657-4fd7-b3be-c4f64f34c501" />
<img width="2832" height="1453" alt="image" src="https://github.com/user-attachments/assets/7878b6ff-e3e7-46cb-af7c-d1ff6cca0960" />
<img width="2859" height="1447" alt="image" src="https://github.com/user-attachments/assets/aad90cd3-2e62-4c99-9ea4-47e604346374" />
<img width="2804" height="1454" alt="image" src="https://github.com/user-attachments/assets/7e2a4093-3312-4603-bbd7-e3fa286aa647" />



