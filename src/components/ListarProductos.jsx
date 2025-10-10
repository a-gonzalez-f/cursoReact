import React from 'react'

const ListarProductos = ({ productos, agregarAlCarrito }) => {
  return (
    <div className='container productos'>
      {productos.map((producto, index) => (
        <div className='producto card' key={index}>
          <img src={producto.imagen} alt={producto.nombre} />
          <h3>{producto.nombre}</h3>
          <p>Categoría: {producto.categoria}</p>
          <p>Precio: ${producto.precio}</p>
          <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  )
}

export default ListarProductos
