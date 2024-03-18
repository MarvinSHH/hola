import React, { useState } from "react";

function InsertProduct() {
  const initialFormData = {
    nombre: "",
    descripcion: "",
    precio: "",
    categoria: "raza pequeña", // Valor predeterminado
    ruta: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, ruta: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://apibackend-one.vercel.app/api/productos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Error al registrar productos");
      }

      // Limpiar los campos del formulario después de registrar un producto
      setFormData(initialFormData);

      console.log("Producto registrado exitosamente");
      alert("Producto registrado exitosamente");

      // Puedes agregar aquí lógica adicional después de registrar el producto
    } catch (error) {
      console.error("Error al registrar los productos:", error);
      alert("Error en registro de producto");
    }
  };

  return (
    <div>
      <h2>Agregar producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descripcion:</label>
          <input
            type="text"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="text"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Categoria:</label>
          <select
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            required
          >
            <option value="pequeño">Raza pequeña</option>
            <option value="grande">Raza grandess</option>
          </select>
        </div>
        <div>
          <label>Imagen:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit">Agregar producto</button>
      </form>
    </div>
  );
}

export default InsertProduct;
