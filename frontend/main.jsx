import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [mensaje, setMensaje] = React.useState('');

  const obtenerSaludo = async () => {
    try {
      const res = await fetch('/api/saludo');
      const data = await res.json();
      setMensaje(data.mensaje);
    } catch (err) {
      setMensaje('Error: ' + err);
    }
  };

  // 🔹 NUEVA FUNCIÓN
  const obtenerDespedida = async () => {
    try {
      const res = await fetch('/api/despedida');
      const data = await res.json();
      setMensaje(data.mensaje);
    } catch (err) {
      setMensaje('Error: ' + err);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>React Vite Docker + HTTPS</h1>

      <button onClick={obtenerSaludo}>
        Pedir saludo al backend
      </button>

      <button
        onClick={obtenerDespedida}
        style={{ marginLeft: '10px' }}
      >
        Pedir despedida al backend
      </button>
      <button
        onClick={() => {
          fetch('/api/servidor')
            .then(res => res.json())
            .then(data => setMensaje(data.mensaje));
        }}
        style={{ marginLeft: '10px' }}
      >
        Pedir servidor inverso al backend
      </button>

      <p>{mensaje}</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
