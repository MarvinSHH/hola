// Components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import imgLogo from '../assets/logoP.png';
import styles from './estilos.js'; 

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.head}>
        <div style={styles.logo}>
          <img style={styles.logo} src={imgLogo} alt="Logo"/>
        </div>
        <div style={styles.navStyles}>
          <nav style={styles.navLinks}>
            <h1 style={styles.navLink}>Header Usuario Gral</h1>

            <Link to="/" style={styles.navLink}>Inicio</Link>
            <Link to="/productos" style={styles.navLink}>Productos</Link>
            <Link to="/registrarse" style={styles.navLink}>Iniciar Sesion</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

