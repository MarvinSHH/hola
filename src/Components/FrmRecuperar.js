import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./estilos";

const FrmRecuperar = () => {
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState(""); // Nuevo estado para mostrar mensajes al usuario

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje(""); // Resetea el mensaje cada vez que se envía el formulario

    try {
      const response = await fetch(
        "https://apibackend-one.vercel.app/api/usuarios/recuperar-contraseña",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ correo }),
        }
      );

      if (!response.ok) {
        throw new Error("No se pudo iniciar el proceso de recuperación");
      }

      const data = await response.json();
      setMensaje(
        "Si tus datos son correctos, recibirás un correo con instrucciones para recuperar tu contraseña."
      );
    } catch (error) {
      console.error("Error al recuperar la contraseña:", error);
      setMensaje(
        "Error al intentar recuperar la contraseña. Por favor, intenta nuevamente."
      );
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.title}>Recuperar Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <label style={styles.label}>Correo:</label>
        <input
          style={styles.input}
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <button style={styles.registerButton} type="submit">
          ¡Recuperar!
        </button>
      </form>
      {mensaje && <p style={{ color: "red" }}>{mensaje}</p>}{" "}
      {/* Muestra mensajes al usuario */}
      <Link to=".." style={styles.loginButtonText}>
        Cancelar
      </Link>
    </div>
  );
};

export default FrmRecuperar;
