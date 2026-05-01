import { useState } from 'react';
import axios from 'axios';

const UserForm = ({ onUserAdded }) => {
  
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
   
    const userData = { 
      name: nombreCompleto, 
      email, 
      password 
    }; 
    
    try {
      await axios.post('http://localhost:3000/users', userData);

     
      setNombreCompleto('');
      setEmail('');
      setPassword('');

      alert("Usuario registrado exitosamente");
      
      if (onUserAdded) onUserAdded(); 
    } catch (error) {
      const msg = error.response?.data?.message || "Error al registrar usuario";
      setError(Array.isArray(msg) ? msg.join(', ') : msg);
      console.error("Error al enviar", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px', backgroundColor: '#f9f9f9' }}>
      <h3>Registrar Nuevo Usuario</h3>
      
      {error && <p style={{ color: 'red', fontSize: '14px' }}>⚠️ {error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nombre Completo"
          value={nombreCompleto}
          onChange={(e) => setNombreCompleto(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
          required
        />
        {/* ... resto de los inputs iguales ... */}
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
          required
        />
        <input
          type="password"
          placeholder="Contraseña (mín. 8 caracteres)"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
          required
        />
        <button 
          type="submit" 
          disabled={loading}
          style={{ 
            backgroundColor: loading ? '#ccc' : '#4CAF50', 
            color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', 
            cursor: loading ? 'not-allowed' : 'pointer' 
          }}
        >
          {loading ? 'Guardando...' : 'Guardar Usuario'}
        </button>
      </form>
    </div>
  );
};

export default UserForm;