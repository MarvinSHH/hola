import React from 'react'
import { Link } from 'react-router-dom';
import imgLogo from '../../assets/logoP.png';
import styles from '../estilos.js'; 

function pubHeader() {
  return (
    <header style={styles.header}>
      <div style={styles.head}>
        <div style={styles.logo}>
          <img style={styles.logo} src={imgLogo} alt="Logo"/>
        </div>
        <div style={styles.navStyles}>
          <nav style={styles.navLinks}>
            <h1 style={styles.navLink}>Header Cliente Registrado</h1>
            <Link to="/" style={styles.navLink}>Inicio</Link>
            <Link to="/productos" style={styles.navLink}>Productos</Link>
            <Link to="/" style={styles.navLink}>Dashboard</Link>
            <Link to="/" style={styles.navLink}>Perfil</Link>
            <Link to="/registrarse" style={styles.navLink}>Cerrar Sesion</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default pubHeader
