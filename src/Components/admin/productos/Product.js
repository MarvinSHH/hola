import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Product() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Carga los productos al montar el componente
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    try {
      const response = await fetch(
        "https://apibackend-one.vercel.app/api/productos"
      );
      if (!response.ok) {
        throw new Error("No se pudieron obtener los productos");
      }
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://apibackend-one.vercel.app/api/productos/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Error al eliminar producto");
      }
      // Actualiza la lista de productos
      fetchProductos();
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };

  const handleEdit = (id) => {
    // Redirige al usuario al formulario de edición con el ID del producto
    // Aquí debes tener una ruta para editar productos, algo como /edit-product/:id
    // Puedes usar useHistory de react-router-dom para hacer la redirección o simplemente Link con el ID
  };

  return (
    <div>
      <h1>Productos</h1>
      <Link to="/insert-product">
        <button>Agregar Producto</button>
      </Link>
      <ul>
        {productos.map((producto) => (
          <li key={producto._id}>
            {producto.nombre} - {producto.descripcion} - {producto.precio}
            <button onClick={() => handleEdit(producto._id)}>Editar</button>
            <button onClick={() => handleDelete(producto._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
