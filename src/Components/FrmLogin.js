import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importar desde react-router-dom para la navegación
import styles from "./estilos";

const FrmLogin = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registro:", {
      usuario,
      contrasena,
    });
  };

  // Aquí agregamos la palabra clave 'return' para devolver el JSX
  return (
    <div style={styles.formContainer}>
      <h2 style={styles.title}>Iniciar Sesion</h2>
      <form onSubmit={handleRegister}>
        <label style={styles.label}>Usuario:</label>
        <input
          style={styles.input}
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <label style={styles.label}>Contraseña:</label>
        <input
          style={styles.input}
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />

        <button style={styles.registerButton} type="submit">
          ¡Regístrate ahora!
        </button>
      </form>

      {/* Enlaces a otras páginas usando React Router */}
      <Link to="recuperar" style={styles.loginButtonText}>
        ¿Olvidaste tu contraseña?
      </Link>
      <Link to="registro" style={styles.loginButtonText}>
        Registrarme
      </Link>
    </div>
  );
};

export default FrmLogin;
