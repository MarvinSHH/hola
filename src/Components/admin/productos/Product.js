import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Product() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState({});
  const [isEditing, setIsEditing] = useState(false);

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
      fetchProducts(); // Actualiza la lista después de eliminar
    } catch (error) {
      Swal.fire(
        "Error",
        `Error al eliminar producto: ${error.message}`,
        "error"
      );
    }
  };

  const showEditModal = (product) => {
    setEditingProduct(product);
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct((prev) => ({ ...prev, [name]: value }));
  };

  const saveChanges = async () => {
    try {
      const response = await fetch(
        `https://apibackend-one.vercel.app/api/productos/${editingProduct._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editingProduct),
        }
      );
      if (!response.ok) {
        throw new Error("Error al actualizar producto");
      }

      // Actualizamos el estado de `products` de forma que refleje la actualización
      setProducts((currentProducts) =>
        currentProducts.map((product) =>
          product._id === editingProduct._id ? editingProduct : product
        )
      );

      Swal.fire(
        "Actualizado",
        "El producto ha sido actualizado con éxito",
        "success"
      );
      setIsEditing(false); // Cerrar el modal de edición después de guardar cambios
    } catch (error) {
      Swal.fire(
        "Error",
        `No se pudo actualizar el producto: ${error.message}`,
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
            {product.nombre} - {product.descripcion} - {product.precio} -{" "}
            {product.categoria} - {product.ruta}
            <button onClick={() => deleteProduct(product._id)}>Eliminar</button>
            <button onClick={() => showEditModal(product)}>Editar</button>
          </li>
        ))}
      </ul>
      {isEditing && (
        <div
          style={{
            position: "fixed",
            top: "20%",
            left: "30%",
            backgroundColor: "white",
            padding: "20px",
            zIndex: 100,
          }}
        >
          <h2>Editar Producto</h2>
          {/* Aquí, cada campo a editar, asegurándote de que cada input tenga el valor del estado editingProduct y onChange maneje los cambios */}
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={editingProduct.nombre}
            onChange={handleEditChange}
          />
          <label>Descripción:</label>
          <input
            type="text"
            name="descripcion"
            value={editingProduct.descripcion}
            onChange={handleEditChange}
          />
          <label>Precio:</label>
          <input
            type="text"
            name="precio"
            value={editingProduct.precio}
            onChange={handleEditChange}
          />
          <label>Categoría:</label>
          <input
            type="text"
            name="categoria"
            value={editingProduct.categoria}
            onChange={handleEditChange}
          />
          <label>Ruta:</label>
          <input
            type="text"
            name="ruta"
            value={editingProduct.ruta}
            onChange={handleEditChange}
          />
          <button onClick={saveChanges}>Guardar Cambios</button>
          <button onClick={() => setIsEditing(false)}>Cancelar</button>
        </div>
      )}
    </div>
  );
}

export default Product;
