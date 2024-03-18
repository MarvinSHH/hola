import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importar desde react-router-dom para la navegación
import styles from "./estilos";

const FrmRecuperar = () => {
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registro:", {
      usuario,
      correo,
    });
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.title}>Recuperar Contraseña</h2>
      <form onSubmit={handleRegister}>
        <label style={styles.label}>Usuario:</label>
        <input
          style={styles.input}
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

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
      {/* Enlace a la página de login usando React Router */}
      <Link to=".." style={styles.loginButtonText}>
        Cancelar
      </Link>
    </div>
  );
};
export default FrmRecuperar;
