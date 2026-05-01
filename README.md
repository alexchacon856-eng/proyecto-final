# Fullstack User Management System

Este es un sistema de gestión de usuarios desarrollado como parte de un curso de formación profesional. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) siguiendo los estándares modernos de desarrollo web.

## 🛠️ Tecnologías Utilizadas

### Backend
- **NestJS**: Framework de Node.js para construir APIs eficientes y escalables.
- **TypeORM**: ORM para la interacción con la base de datos.
- **PostgreSQL**: Sistema de gestión de bases de datos relacional.
- **Bcrypt**: Para la encriptación y seguridad de contraseñas.

### Frontend
- **React (Vite)**: Biblioteca para la construcción de interfaces de usuario.
- **Axios**: Cliente HTTP para realizar peticiones al backend.
- **CSS3**: Estilos personalizados siguiendo principios de UI/UX.

## 🚀 Características Principales

1.  **Registro de Usuarios**: Incluye validaciones de campos y encriptación de seguridad en el servidor.
2.  **Eliminación Lógica**: Los usuarios no se borran físicamente de la base de datos (se utiliza una bandera `isActive`), cumpliendo con estándares de integridad de datos.
3.  **Interfaz Responsiva**: Diseño limpio y funcional.
4.  **Gestión de Estados**: Sincronización en tiempo real entre el formulario y la lista de usuarios.

## 📋 Metodología de Trabajo

El proyecto se gestionó bajo estándares de la industria:
- **GitHub Projects**: Uso de tablero Kanban para el seguimiento de tareas.
- **Gitflow**: Desarrollo basado en ramas (feature branches).
- **Conventional Commits**: Mensajes de commit claros y categorizados.

## ⚙️ Configuración e Instalación

1.  **Clonar repositorio**: `git clone [URL-DE-TU-REPO]`
2.  **Backend**:
    - `cd backend`
    - `npm install`
    - Configurar variables de entorno en `app.module.ts`.
    - `npm run start:dev`
3.  **Frontend**:
    - `cd frontend`
    - `npm install`
    - `npm run dev`

---
Desarrollado por **Alex Chacon** - 2026