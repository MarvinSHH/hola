import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Product() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

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
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      Swal.fire(
        "Error",
        `Error al eliminar producto: ${error.message}`,
        "error"
      );
    }
  };

  const openEditModal = (product) => {
    setEditingProduct(product);
  };

  const closeEditModal = () => {
    setEditingProduct(null);
  };

  const handleEditChange = (e) => {
    setEditingProduct({
      ...editingProduct,
      [e.target.name]: e.target.value,
    });
  };

  const saveChanges = async () => {
    try {
      const response = await fetch(
        `https://apibackend-one.vercel.app/api/productos/${editingProduct._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editingProduct),
        }
      );
      if (!response.ok) {
        throw new Error("Error al actualizar producto");
      }
      Swal.fire("Actualizado!", "El producto ha sido actualizado.", "success");
      setEditingProduct(null);
      fetchProducts();
    } catch (error) {
      Swal.fire(
        "Error",
        `Error al actualizar producto: ${error.message}`,
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
          <li key={product._id}>
            {product.nombre} - {product.descripcion} - {product.precio}
            <button onClick={() => deleteProduct(product._id)}>Eliminar</button>
            <button onClick={() => openEditModal(product)}>Editar</button>
          </li>
        ))}
      </ul>
      {editingProduct && (
        <div className="modal">
          <h2>Editar Producto</h2>
          <input
            type="text"
            name="nombre"
            value={editingProduct.nombre}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="descripcion"
            value={editingProduct.descripcion}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="precio"
            value={editingProduct.precio}
            onChange={handleEditChange}
          />
          <button onClick={saveChanges}>Guardar Cambios</button>
          <button onClick={closeEditModal}>Cancelar</button>
        </div>
      )}
    </div>
  );
}

export default Product;
