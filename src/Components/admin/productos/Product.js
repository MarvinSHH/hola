import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import colores from "../../paletaColores.js";
import styles from "../../estilos.js";

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
      fetchProducts(); // Actualiza la lista después de eliminar
    } catch (error) {
      Swal.fire(
        "Error",
        `Error al eliminar producto: ${error.message}`,
        "error"
      );
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct((prev) => ({ ...prev, [name]: value }));
  };

  const saveChanges = async () => {
    if (!editingProduct) return;
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
      await response.json(); // Suponiendo que la API devuelve el producto actualizado
      Swal.fire(
        "Actualizado",
        "El producto ha sido actualizado con éxito",
        "success"
      );
      setEditingProduct(null); // Resetear el producto en edición
      fetchProducts(); // Recargar los productos actualizados
    } catch (error) {
      Swal.fire(
        "Error",
        `No se pudo actualizar el producto: ${error.message}`,
        "error"
      );
    }
  };

  return (
    <div style={{ backgroundColor: colores.fondoPrincipal, padding: "20px" }}>
      <h1 style={{ color: colores.negro, textAlign: "center" }}>Productosx</h1>
      <Link to="/insert-product">
        <button
          style={{ backgroundColor: colores.boton, color: colores.textoBoton }}
        >
          Agregar Producto
        </button>
      </Link>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
      >
        <thead>
          <tr>
            {/* Aplicamos estilos para centrar el texto y agregar contorno a los encabezados */}
            <th
              style={{
                backgroundColor: colores.fondoHeader,
                color: colores.textoHeader,
                textAlign: "center",
                border: `1px solid ${colores.separador}`,
              }}
            >
              Nombre
            </th>
            <th
              style={{
                backgroundColor: colores.fondoHeader,
                color: colores.textoHeader,
                textAlign: "left",
                border: `1px solid ${colores.separador}`,
              }}
            >
              Descripción
            </th>
            <th
              style={{
                backgroundColor: colores.fondoHeader,
                color: colores.textoHeader,
                textAlign: "center",
                border: `1px solid ${colores.separador}`,
              }}
            >
              Precio
            </th>
            <th
              style={{
                backgroundColor: colores.fondoHeader,
                color: colores.textoHeader,
                textAlign: "center",
                border: `1px solid ${colores.separador}`,
              }}
            >
              Categoría
            </th>
            <th
              style={{
                backgroundColor: colores.fondoHeader,
                color: colores.textoHeader,
                textAlign: "center",
                border: `1px solid ${colores.separador}`,
              }}
            >
              Imagen
            </th>
            <th
              style={{
                backgroundColor: colores.fondoHeader,
                color: colores.textoHeader,
                textAlign: "center",
                border: `1px solid ${colores.separador}`,
              }}
            >
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              {/* Aplicamos estilos para centrar el texto y agregar contorno a las celdas */}
              <td
                style={{
                  textAlign: "center",
                  border: `1px solid ${colores.separador}`,
                }}
              >
                {product.nombre}
              </td>
              <td style={{ border: `1px solid ${colores.separador}` }}>
                {product.descripcion}
              </td>
              <td
                style={{
                  textAlign: "center",
                  border: `1px solid ${colores.separador}`,
                }}
              >
                {product.precio}
              </td>
              <td
                style={{
                  textAlign: "center",
                  border: `1px solid ${colores.separador}`,
                }}
              >
                {product.categoria}
              </td>
              <td
                style={{
                  textAlign: "center",
                  border: `1px solid ${colores.separador}`,
                }}
              >
                {product.ruta && (
                  <img
                    src={product.ruta}
                    alt={product.nombre}
                    style={{ maxWidth: "100px" }}
                  />
                )}
              </td>
              <td
                style={{
                  textAlign: "center",
                  border: `1px solid ${colores.separador}`,
                }}
              >
                <button
                  onClick={() => deleteProduct(product._id)}
                  style={{
                    backgroundColor: colores.boton,
                    color: colores.textoBoton,
                    marginRight: "5px",
                  }}
                >
                  Eliminar
                </button>
                <button
                  onClick={() => setEditingProduct(product)}
                  style={{
                    backgroundColor: colores.boton,
                    color: colores.textoBoton,
                  }}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingProduct && (
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
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={editingProduct.nombre || ""}
            onChange={handleEditChange}
          />
          <label>Descripción:</label>
          <input
            type="text"
            name="descripcion"
            value={editingProduct.descripcion || ""}
            onChange={handleEditChange}
          />
          <label>Precio:</label>
          <input
            type="text"
            name="precio"
            value={editingProduct.precio || ""}
            onChange={handleEditChange}
          />
          <label>Categoría:</label>
          <input
            type="text"
            name="categoria"
            value={editingProduct.categoria || ""}
            onChange={handleEditChange}
          />
          <label>Ruta:</label>
          <input
            type="text"
            name="ruta"
            value={editingProduct.ruta || ""}
            onChange={handleEditChange}
          />
          <button onClick={saveChanges}>Guardar Cambios</button>
          <button onClick={() => setEditingProduct(null)}>Cancelar</button>
        </div>
      )}
    </div>
  );
}

export default Product;
