import React, { useState } from "react";
import Swal from "sweetalert2";
import styles from "./estilos"; // Asegúrate de que la ruta de importación sea correcta

const FrmRegistro = () => {
  const initialState = {
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: "",
    confirmarContraseña: "", // Agregar este campo
    telefono: "",
    preguntaRecuperacion: "colorFavorito",
    respuestaPregunta: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Verificar que la contraseña coincida con la confirmación de la contraseña
      if (formData.contraseña !== formData.confirmarContraseña) {
        throw new Error("Las contraseñas no coinciden");
      }

      const response = await fetch(
        "https://apibackend-one.vercel.app/api/usuarios",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorDetails = await response.text(); // O .json(), dependiendo de tu API
        throw new Error(`Error al registrar usuario: ${errorDetails}`);
      }

      const result = await response.json();
      console.log("Registro exitoso:", result);
      Swal.fire("Éxito", "Usuario registrado exitosamente", "success");
      setFormData(initialState);
    } catch (error) {
      console.error(error);
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.title}>Registro</h2>
      <form onSubmit={handleRegister}>
        <div style={styles.cincuenta}>
          <div style={styles.inCincuenta}>
            <label style={styles.label}>Nombre:</label>
            <input
              style={styles.input}
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>
          <div style={styles.inCincuenta}>
            <label style={styles.label}>Apellido:</label>
            <input
              style={styles.input}
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={formData.apellido}
              onChange={handleChange}
            />
          </div>
        </div>

        <label style={styles.label}>Correo:</label>
        <input
          style={styles.input}
          type="email"
          name="correo"
          placeholder="Correo"
          value={formData.correo}
          onChange={handleChange}
          required
        />

        <label style={styles.label}>Contraseña:</label>
        <input
          style={styles.input}
          type="password"
          name="contraseña"
          placeholder="Contraseña"
          value={formData.contraseña}
          onChange={handleChange}
          required
        />

        <label style={styles.label}>Confirmar Contraseña:</label>
        <input
          style={styles.input}
          type="password"
          name="confirmarContraseña"
          placeholder="Confirmar Contraseña"
          value={formData.confirmarContraseña}
          onChange={handleChange}
          required
        />

        <label style={styles.label}>Teléfono:</label>
        <input
          style={styles.input}
          type="text"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
          maxLength="10"
          minLength="10"
          required
        />

        <label style={styles.label}>Pregunta de Recuperación:</label>
        <select
          name="preguntaRecuperacion"
          value={formData.preguntaRecuperacion}
          onChange={handleChange}
          style={styles.input}
          required
        >
          <option value="colorFavorito">Color Favorito</option>
          <option value="nombreMascota">Nombre de Mascota</option>
          <option value="mejorAmigo">Mejor Amigo</option>
        </select>

        <label style={styles.label}>Respuesta de Pregunta:</label>
        <input
          style={styles.input}
          type="text"
          name="respuestaPregunta"
          placeholder="Respuesta de Pregunta"
          value={formData.respuestaPregunta}
          onChange={handleChange}
          required
        />

        <button style={styles.registerButton} type="submit">
          ¡Regístrate ahora!
        </button>
      </form>
    </div>
  );
};

export default FrmRegistro;
