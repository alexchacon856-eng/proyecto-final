import { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  // 1. Función para cargar los usuarios (solo traerá los isActive: true)
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users');
      setUsers(response.data);
    } catch (error) {
      console.error("Error cargando usuarios", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 2. Función para la ELIMINACIÓN LÓGICA
  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
      try {
        // Esto llama al método remove() de NestJS
        await axios.delete(`http://localhost:3000/users/${id}`);
        
        // Refrescamos la lista para que el usuario "desaparezca"
        fetchUsers();
        alert("Usuario eliminado con éxito (lógicamente)");
      } catch (error) {
        alert("Error al eliminar el usuario");
      }
    }
  };

  return (
    <div>
      <h3>Lista de Usuarios Activos</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>Name</th>
            <th>Email</th>
            <th>Estado</th>
            <th>Acciones</th> {/* Nueva columna */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.isActive ? '✅ Activo' : '❌ Inactivo'}</td>
              <td>
                {/* 3. El Botón de Eliminar */}
                <button 
                  onClick={() => handleDelete(user.id)}
                  style={{ 
                    backgroundColor: '#ff4d4d', 
                    color: 'white', 
                    border: 'none', 
                    padding: '5px 10px', 
                    borderRadius: '4px',
                    cursor: 'pointer' 
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;