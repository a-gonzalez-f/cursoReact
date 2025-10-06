import React from 'react';

const Carrito = ({ productosAgregados }) => {
  const productosAgrupados = productosAgregados?.reduce((acc, producto) => {
    const existente = acc.find(p => p.id === producto.id);
    if (existente) {
      existente.cantidad += 1;
    } else {
      acc.push({ ...producto, cantidad: 1 });
    }
    return acc;
  }, []);

  const total = productosAgrupados?.reduce((acc, producto) => {
    return acc + producto.precio * producto.cantidad;
  }, 0);

  return (
    <div className={`carrito ${productosAgrupados && productosAgrupados.length > 0 ? 'visible' : 'hidden'}`}>
      <h2>Carrito</h2>
      <div className='container'>
        {productosAgrupados && productosAgrupados.length > 0 ? (
          productosAgrupados.map((producto) => (
            <div className='producto card' key={producto.id}>
              <h3>{producto.nombre}</h3>
              <p>Precio unitario: ${producto.precio}</p>
              <p>Cantidad: {producto.cantidad}</p>
              <p>Subtotal: ${producto.precio * producto.cantidad}</p>
            </div>
          ))
        ) : (
          "Sin productos agregados"
        )}

        {total ? (
          <div className='total'>
            <p>
              TOTAL: <span>${total.toFixed(2)}</span>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Carrito;
