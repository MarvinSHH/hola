import React, { useState } from "react";
import Swal from "sweetalert2";

function Insertuser() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: "",
    telefono: "",
    tipo: "usuario",
    preguntaRecuperacion: "colorFavorito",
    respuestaPregunta: "",
    codigoRecuperacion: "",
    dispositivo: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://apibackend-one.vercel.app/api/usuarios",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Error al registrar usuario");
      }

      //const data = await response.json();
      console.log("Usuario registrado exitosamente:");
      // Si la respuesta es OK, muestra una alerta personalizada.
      Swal.fire({
        title: "Éxito",
        text: "Producto registrado exitosamente",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      // Puedes agregar aquí lógica adicional después de registrar el usuario
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      // Si hay un error, muestra una alerta personalizada con el mensaje de error.
      Swal.fire({
        title: "Error",
        text: `Error al registrar productos: ${error.message}`,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <div>
      <h2>Agregar Usuario</h2>
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
          <label>Apellido:</label>
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Correo:</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            maxLength={10}
            minLength={10}
          />
        </div>
        <div>
          <label>Tipo:</label>
          <select
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            required
          >
            <option value="usuario">Usuario</option>
            <option value="administrador">Administrador</option>
          </select>
        </div>
        <div>
          <label>Pregunta de Recuperación:</label>
          <select
            name="preguntaRecuperacion"
            value={formData.preguntaRecuperacion}
            onChange={handleChange}
            required
          >
            <option value="colorFavorito">Color Favorito</option>
            <option value="nombreMascota">Nombre de Mascota</option>
            <option value="mejorAmigo">Mejor Amigo</option>
          </select>
        </div>
        <div>
          <label>Respuesta de Pregunta:</label>
          <input
            type="text"
            name="respuestaPregunta"
            value={formData.respuestaPregunta}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Código de Recuperación:</label>
          <input
            type="text"
            name="codigoRecuperacion"
            value={formData.codigoRecuperacion}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Dispositivo:</label>
          <input
            type="text"
            name="dispositivo"
            value={formData.dispositivo}
            onChange={handleChange}
            maxLength={10}
            minLength={10}
          />
        </div>
        <button type="submit">Agregar Usuario</button>
      </form>
    </div>
  );
}

export default Insertuser;
