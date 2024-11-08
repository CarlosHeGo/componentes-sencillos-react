import React, { useState } from 'react';

function BuscadorDeProductos (){

  const productos = [
    { id: 1, nombre: 'Camiseta' },
    { id: 2, nombre: 'Pantalón' },
    { id: 3, nombre: 'Zapatos' },
    { id: 4, nombre: 'Sombrero' }
  ];
  
  const [busqueda, setBusqueda] = useState('');

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <ul>
        {productosFiltrados.map((producto) => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default BuscadorDeProductos;