import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importar desde react-router-dom para la navegación
import styles from "./estilos";

const FrmRegistro = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmaContrasena, setConfirmarContrasena] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registro:", {
      nombre,
      apellido,
      usuario,
      correo,
      contrasena,
      confirmaContrasena,
      telefono,
    });
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
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div style={styles.inCincuenta}>
            <label style={styles.label}>Apellido:</label>
            <input
              style={styles.input}
              type="text"
              placeholder="Apellido "
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
        </div>

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

        <label style={styles.label}>Contraseña:</label>
        <input
          style={styles.input}
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />

        <label style={styles.label}>Confirmar Contraseña:</label>
        <input
          style={styles.input}
          type="password"
          placeholder="Confirmar contraseña"
          value={confirmaContrasena}
          onChange={(e) => setConfirmarContrasena(e.target.value)}
        />

        <label style={styles.label}>Teléfono:</label>
        <input
          style={styles.input}
          type="tel"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />

        <button style={styles.registerButton} type="submit">
          ¡Regístrate ahora!
        </button>
      </form>
      {/* Enlace a la página de login usando React Router */}
      <Link to=".." style={styles.loginButtonText}>
        ¿Ya tengo Cuenta?
      </Link>
    </div>
  );
};

export default FrmRegistro;
