import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Product() {
  const [products, setProducts] = useState([]);

  // Carga inicial de productos
  useEffect(() => {
    fetchProducts();
  }, []);

  // Función para obtener productos
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://apibackend-one.vercel.app/api/productos"
      );
      if (!response.ok) {
        throw new Error("Error al obtener productos");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Función para eliminar producto
  const deleteProduct = async (id) => {
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
      Swal.fire("Eliminado!", "El producto ha sido eliminado.", "success");
      fetchProducts(); // Actualizar lista después de eliminar
    } catch (error) {
      Swal.fire(
        "Error",
        `Error al eliminar producto: ${error.message}`,
        "error"
      );
    }
  };

  return (
    <div>
      <h1>Productos</h1>
      <Link to="/insert-product">
        <button>Agregar Producto</button>
      </Link>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.nombre} - {product.descripcion} - {product.precio}
            <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
            <Link to={`/edit-product/${product.id}`}>
              <button>Editar</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
