import React, { useState } from "react";


export function ViewBill() {
  const [formData, setFormData] = useState({
    idProducto: "",
    descripcion: "",
    cantidad: "",
    precio: ""
  });

  const [productos, setProductos] = useState([]);
  const [totals, setTotals] = useState({
    subtotal: 0,
    iva: 0,
    total: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calcula el precio total de este producto
    const cantidad = parseFloat(formData.cantidad);
    const precio = parseFloat(formData.precio);
    const totalProducto = cantidad * precio;

    // Actualiza la lista de productos
    setProductos([...productos, { ...formData, total: totalProducto }]);

    // Calcula los nuevos totales
    const nuevoSubtotal = totals.subtotal + totalProducto;
    const nuevoIva = nuevoSubtotal * 0.16; // Suponiendo un IVA del 16%
    const nuevoTotal = nuevoSubtotal + nuevoIva;

    setTotals({
      subtotal: nuevoSubtotal,
      iva: nuevoIva,
      total: nuevoTotal
    });

    // Resetea el formulario
    setFormData({
      idProducto: "",
      descripcion: "",
      cantidad: "",
      precio: ""
    });
  };

  return (
    <div className="view">
      <h1>Factura</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group-grid">


        <div className="mb-3">
            <label htmlFor="idFactura" className="form-label">
             ID Factura
            </label>
            <input
              type="text"
              className="form-control"
              id="idFactura"
              name="idFactura"         
            />
          </div>


          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
             Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="idFactura"
              name="idFactura"         
            />
          </div>
        
          <div className="mb-3">
            <label htmlFor="cedula" className="form-label">
             Cédula
            </label>
            <input
              type="text"
              className="form-control"
              id="idFactura"
              name="idFactura"         
            />
          </div>

          
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
             Télefono 
            </label>
            <input
              type="text"
              className="form-control"
              id="idFactura"
              name="idFactura"         
            />
          </div>
             
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">
             Correo
            </label>
            <input
              type="text"
              className="form-control"
              id="idFactura"
              name="idFactura"         
            />
          </div>

          <div className="mb-3">
            <label htmlFor="idProducto" className="form-label">
              ID Producto
            </label>
            <input
              type="text"
              className="form-control"
              id="idProducto"
              name="idProducto"
              value={formData.idProducto}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="descripcion" className="form-label">
              Descripción
            </label>
            <input
              type="text"
              className="form-control"
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 small-input">
            <label htmlFor="cantidad" className="form-label">
              Cantidad
            </label>
            <input
              type="text"
              className="form-control"
              id="cantidad"
              name="cantidad"
              value={formData.cantidad}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="precio" className="form-label">
              Precio
            </label>
            <input
              type="text"
              className="form-control"
              id="precio"
              name="precio"
              value={formData.precio}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Producto
        </button>
      </form>

      <h2>Productos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID Producto</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={index}>
              <td>{producto.idProducto}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.cantidad}</td>
              <td>{producto.precio}</td>
              <td>{producto.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Totales</h2>
      <div className="totals">
        <p>Subtotal: {totals.subtotal.toFixed(2)}</p>
        <p>IVA (16%): {totals.iva.toFixed(2)}</p>
        <p>Total: {totals.total.toFixed(2)}</p>
      </div>
    </div>
  );
}
