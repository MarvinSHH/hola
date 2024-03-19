import React, { useState } from "react";
import Swal from "sweetalert2"; // Importa Swal para mostrar mensajes al usuario
import styles from "./estilos";

const FrmRegistro = () => {
  const initialState = {
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: "",
    telefono: "",
    tipo: "usuario", // Valor predeterminado para tipo
    preguntaRecuperacion: "colorFavorito", // Valor inicial
    respuestaPregunta: "",
    codigoRecuperacion: "",
    dispositivo: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
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

      // Mostrar mensaje de éxito
      Swal.fire({
        title: "Éxito",
        text: "Usuario registrado exitosamente",
        icon: "success",
        confirmButtonText: "Aceptar",
      }).then((result) => {
        if (result.isConfirmed) {
          setFormData(initialState); // Restablecer el formulario
        }
      });
    } catch (error) {
      // Mostrar mensaje de error
      Swal.fire({
        title: "Error",
        text: `Error al registrar usuario: ${error.message}`,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
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
        />

        <label style={styles.label}>Contraseña:</label>
        <input
          style={styles.input}
          type="password"
          name="contraseña"
          placeholder="Contraseña"
          value={formData.contraseña}
          onChange={handleChange}
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
        />
        <label style={styles.label}>Tipo:</label>
        <select
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          required
        >
          <option value="usuario">Usuario</option>
          <option value="administrador">Administrador</option>
        </select>
        <br />
        <label style={styles.label}>Pregunta de Recuperación:</label>
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
        <br />

        <label style={styles.label}>Respuesta de Pregunta:</label>
        <input
          style={styles.input}
          type="text"
          name="respuestaPregunta"
          value={formData.respuestaPregunta}
          onChange={handleChange}
          required
        />
        <label style={styles.label}>Código de Recuperación:</label>
        <input
          style={styles.input}
          type="text"
          name="codigoRecuperacion"
          value={formData.codigoRecuperacion}
          onChange={handleChange}
        />

        <label style={styles.label}>Dispositivo:</label>
        <input
          style={styles.input}
          type="text"
          name="dispositivo"
          value={formData.dispositivo}
          onChange={handleChange}
          maxLength="10"
          minLength="10"
        />

        <button style={styles.registerButton} type="submit">
          ¡Regístrate ahora!
        </button>
      </form>
    </div>
  );
};

export default FrmRegistro;
