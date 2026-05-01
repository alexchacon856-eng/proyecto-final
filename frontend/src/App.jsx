import { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  // Esta función hace que la lista se vuelva a cargar cuando creas un usuario
  const handleUserCreated = () => {
    setRefreshKey(oldKey => oldKey + 1);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Gestión de Usuarios</h1>
      
      {/* 1. Formulario para CREAR */}
      <UserForm onUserCreated={handleUserCreated} />
      
      <hr style={{ margin: '40px 0' }} />
      
      {/* 2. Lista para VER */}
      <UserList key={refreshKey} />
    </div>
  );
}

export default App;